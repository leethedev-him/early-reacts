// server.js
import http from 'http';
import fs from 'fs/promises'; // Use fs/promises for async file operations
import hash from './hash.js'; // Assuming hash.js is in the same directory as server.js

const PORT = 4000; // Choose a port that doesn't conflict with React (usually 4000)
const DB_PATH = './mockDB.json'; // Path to your mock database file

// --- Helper Functions for Server-Side Validation (Moved from original Auth.js) ---
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;

function validatePasswordStrength(password) {
    const req = {
        lAlphab: /[a-z]/,
        UAlphab: /[A-Z]/,
        nums: /[0-9]/,
        spechar: /[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~£]/
    };
    const messages = [
        "Password must contain at least one lowercase letter.",
        "Password must contain at least one uppercase letter.",
        "Password must contain at least one numeric digit.",
        "Password must contain at least one special character.",
    ];

    if (password.length < 8) return "Password must be at least 8 characters long.";

    if (!req.lAlphab.test(password)) return messages[0];
    if (!req.UAlphab.test(password)) return messages[1];
    if (!req.nums.test(password)) return messages[2];
    if (!req.spechar.test(password)) return messages[3];

    return null; // No error
}

function validateEmailFormat(email) {
    if (!emailRegex.test(email)) {
        return "Email format is invalid.";
    }
    return null; // No error
}

function validateName(name) {
    const namet = name.trim();
    if (namet === "" || namet.length < 7) {
        return "Name must be greater than 6 characters!";
    }
    if (namet.includes(" ")) {
        return "Name must not contain spaces!";
    }
    return null; // No error
}

// --- HTTP Server Logic ---
const server = http.createServer(async (req, res) => {
    // Set CORS headers first for all responses
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from your React app
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight OPTIONS requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204); // No content for preflight
        res.end();
        return;
    }

    // Helper to read request body
    const getRequestBody = () => {
        return new Promise((resolve, reject) => {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(new Error('Invalid JSON body'));
                }
            });
            req.on('error', err => reject(err));
        });
    };

    if (req.method === 'POST') {
        let payload;
        try {
            payload = await getRequestBody();
        } catch (error) {
            console.error('Error parsing request body:', error);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: error.message }));
            return;
        }

        if (req.url === '/signup') {
            const { name, email, password, repeatPass } = payload;

            // Server-side validation
            let validationError = validateName(name);
            if (validationError) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: validationError }));
                return;
            }

            validationError = validateEmailFormat(email);
            if (validationError) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: validationError }));
                return;
            }

            if (password !== repeatPass) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: "Passwords do not match!" }));
                return;
            }

            validationError = validatePasswordStrength(password);
            if (validationError) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: validationError }));
                return;
            }

            try {
                const data = JSON.parse(await fs.readFile(DB_PATH, 'utf8'));
                const userExists = data.find(u => u.email === email);

                if (userExists) {
                    res.writeHead(409, { 'Content-Type': 'application/json' }); // 409 Conflict
                    res.end(JSON.stringify({ success: false, message: "User already exists, try a different email or login to your account." }));
                    return;
                }

                const hashedPassword = hash(password);
                const newUser = {
                    id: data.length > 0 ? Math.max(...data.map(u => u.id)) + 1 : 1, // Generate next ID
                    name: name,
                    email: email,
                    password: hashedPassword
                };
                data.push(newUser);

                await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));

                res.writeHead(201, { 'Content-Type': 'application/json' }); // 201 Created
                res.end(JSON.stringify({ success: true, message: "Signup Successful!" }));

            } catch (err) {
                console.error('Error during signup:', err);
                if (err.code === 'ENOENT') { // File not found, create it with initial user
                    try {
                        const hashedPassword = hash(password);
                        const newUser = { id: 1, name, email, password: hashedPassword };
                        await fs.writeFile(DB_PATH, JSON.stringify([newUser], null, 2));
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true, message: "Signup Successful! (DB created)" }));
                    } catch (writeErr) {
                        console.error('Error creating DB file:', writeErr);
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: false, message: "Server error during DB creation." }));
                    }
                } else {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: "Internal server error during signup." }));
                }
            }

        } else if (req.url === '/login') {
            const { email, password } = payload;

            try {
                const data = JSON.parse(await fs.readFile(DB_PATH, 'utf8'));
                const user = data.find(u => u.email === email);

                if (!user) {
                    res.writeHead(401, { 'Content-Type': 'application/json' }); // 401 Unauthorized
                    res.end(JSON.stringify({ success: false, message: "Email not found." }));
                    return;
                }

                if (user.password !== hash(password)) {
                    res.writeHead(401, { 'Content-Type': 'application/json' }); // 401 Unauthorized
                    res.end(JSON.stringify({ success: false, message: "Incorrect password." }));
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: "Login Successful!" }));

            } catch (err) {
                console.error('Error during login:', err);
                if (err.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: "User database not found. No users registered." }));
                } else {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: "Internal server error during login." }));
                }
            }

        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: "Endpoint not found." }));
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' }); // 405 Method Not Allowed
        res.end(JSON.stringify({ success: false, message: "Method not allowed." }));
    }
});

server.listen(PORT, () => {
    console.log(`Auth server running on http://localhost:${PORT}`);
});
