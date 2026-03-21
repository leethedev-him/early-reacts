import { loginAuth, signupAuth, validateSignup } from './Account/Auth.js'
import { useState } from 'react';
let loginPageStat = false;
function Signup(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");

    const SERVER_URL = 'http://localhost:4000'; // Your Node.js server URL

    const getEmail = (e) => setEmail(e.target.value);
    const getName = (e) => setName(e.target.value);
    const getPassword = (e) => setPassword(e.target.value);
    const getRepeatPassword = (e) => setRepeatPass(e.target.value);

    // --- Client-Side Validation (for immediate feedback) ---
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;

    function clientValidatePassword(password){
        // Simplified client-side check for immediate feedback
        if (password.length < 8) return "Password must be at least 8 characters long.";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter.";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
        if (!/[0-9]/.test(password)) return "Password must contain at least one numeric digit.";
        if (!/[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~£]/.test(password)) return "Password must contain at least one special character.";
        return null; // No error
    }

    function clientValidateEmail(email){
        if (!emailRegex.test(email)){
            return "Email format is invalid";
        }
        return null;
    }

    function clientValidateName(name){
        const namet = name.trim();
        if (namet === "" || namet.length < 7){
            return "Name must be greater than 6 Characters!";
        }
        if (namet.includes(" ")) {
            return "Name must not contain spaces!";
        }
        return null;
    }
    // --- End Client-Side Validation ---


    async function signup(){
        // Client-side validation first for better UX
        let validationError = clientValidateName(name);
        if (validationError) { alert(validationError); return; }

        validationError = clientValidateEmail(email);
        if (validationError) { alert(validationError); return; }

        if (password !== repeatPass){
            alert("Both passwords must be the same!");
            return;
        }

        validationError = clientValidatePassword(password);
        if (validationError) { alert(validationError); return; }


        // If client-side validation passes, send to server
        const cred = {
            name: name,
            email: email,
            password: password,
            repeatPass: repeatPass
        };

        try {
            const response = await fetch(`${SERVER_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cred)
            });

            const data = await response.json(); // Parse the JSON response from the server

            if (response.ok) { // Check if the response status is 2xx
                alert(data.message);
                // Optionally clear form or redirect on successful signup
                setEmail('');
                setName('');
                setPassword('');
                setRepeatPass('');
            } else {
                // Server returned an error (e.g., 400, 409, 500)
                alert(`Signup failed: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Network error during signup:', error);
            alert('A network error occurred. Please try again.');
        }
    }
    return(
        <>
            <div className="auth-card">
                <h2>Signup</h2>
                {loginPageStat && <input type="text" className="form-input" placeholder="Enter your Name" onChange={getName} /> <br/>}
                <input type="email" className="form-input" placeholder="Enter your Email" onChange={getEmail} /> <br/>
                <input type="password" className="form-input" placeholder="Enter your Password" onChange={getPassword} /> <br/>
                {!loginPageStat && <input type="password" className="form-input" placeholder="Repeat your Password" onChange={getRepeatPassword} /> <br/>}

                <button className="btn" onClick={ signup }>Create Account</button> <br />
                <a href="#"> {loginPageStat? <code>Signup</code> : <code>Login</code>} </a>
            </div>
        </>
    )
}
export default Signup