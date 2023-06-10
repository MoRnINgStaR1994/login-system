const signupBtn = document.getElementById("signupBtn")
const signinBtn = document.getElementById("signinBtn")
const nameField = document.getElementById("nameField")
const title = document.getElementById("title")
const password = document.getElementById("passwordField");
const email = document.getElementById("emailField");
const errors = document.getElementById("errors");



signupBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const name = nameField.childNodes[3];
    const emailField = email.childNodes[3];
    const passwordField = password.childNodes[3];

    if(!/^[A-Z]+$/i.test(name.value)) {
        errors.style.display = "block";
        errors.innerHTML = "name is wrong, please write only alphabets"
        return;
    }
    
    errors.style.display = "none"

    console.log(name.value)
    console.log(emailField.value)
    console.log(passwordField.value)
})

signinBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const name = nameField.childNodes[3];
    const passwordField = password.childNodes[3];
    
    console.log(name.value)
    console.log(passwordField.value)
})