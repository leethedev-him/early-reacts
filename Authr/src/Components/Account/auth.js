
import hash from './hash.js';
import fs from 'fs/promises';


async function loginAuth(email, password) {
    try {
        const data = JSON.parse(await fs.readFile('./mockDB.json', 'utf8'));
        const user = data.find(user => user.email === email);
        if (!user) return "Email not found";
        if (user.password !== hash(password)) return "Incorrect Password"
        return "Login Successful";
    } catch (err){
        return "Error loggin in";
    }
        
}

function validateSignup(name, email, password, repeatPassword) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
    function validPassword(password){
        const req = {
            lAlphab : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            UAlphab : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            nums : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            spechar : ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '£', "'"]
        }
        const messages = [
            "Your password must contain at least one Lowercase Letter",
            "Your password must contain at least one Uppercase Letter",
            "Your password must contain at least one Numeric Digit",
            "Your password must contain at least one Special Character",
        ]
        let valid = true;
         Object.entries(req).forEach(([name, required], i) => {
            if (required.every(chare => !password.includes(chare))){
                alert(messages[i]);
                valid = false;
            }
        })
        
            return valid;
        }
        function validEmail(email){
            let valid = true;
            if (!(emailRegex.test(email))){
                valid = false;
                alert("Email Format is invalid")
            }

            return valid;
        }
        function equivalent(password, repeatPassword){
            let valid = true;
            if (password !== repeatPassword){
                alert("Both passwords must be the same! ");
                valid = !valid;
            }
            return valid;
        }
        function nameValid(name){
            let valid = true;
            const namet = name.trim();
            if (namet === "" || namet.length < 7){
                alert("Name must be greater than 6 Characters!")
                valid = false;
            } 
            if (namet.includes(" ")) {
                alert("Name must be not contain space!");
                valid = false;
            }     
            return valid;
        }
    /*
    nameValid(name);
    validEmail(email);
    equivalent(password, repeatPassword);
    validPassword(password);
    */
       
    if (equivalent(password, repeatPassword) && validPassword(repeatPassword) && nameValid(name) && validEmail(email)){
                alert("All");
                signupAuth(name, email, repeatPassword)
                  .then(user =>  alert(user))
                 .catch(err => alert(err.message));
            }

}







async function signupAuth(name, email, password){
    try {
        alert("About to create....");
        password = hash(password);
        const data = JSON.parse(await fs.readFile('./src/Components/Account/mockDB.json', 'utf8'));
        const user = data.find(user => user.email === email);
        if (user) {
            return "User already exists, try a different email or login to your account.";
        }else{
            // Create user;
            alert("Creating user...")
            const newUser = {
                id: data.length + 1,
                name: name,
                email: email,
                password: password
            };
            data.push(newUser);
            await fs.writeFile('./src/Components/Account/mockDB.json', JSON.stringify(data, null, 2));
            alert("Written")
        }
        return "Signup Successful";
    } catch (err){
        return `${err}, Error Occured`;
    }
}

export { loginAuth, signupAuth, validateSignup };


/*
loginAuth('leethedevo@gmail.com', 'Welcome123')
    .then(user =>  alert(user))
    .catch(err => alert(err.message));


signupAuth("dude", 'lfeethedevo@gmail.com', "uytjhg")
     .then(user =>  alert(user))
     .catch(err => alert(err.message));
*/

//validateSignup("namayuygsadse", "email@gmail.com", "1*repeatPasstword", "1*repeatPassword") 
