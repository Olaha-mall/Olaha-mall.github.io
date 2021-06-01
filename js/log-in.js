const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');


const inputs = [
    emailInput,
    passwordInput
]

let LoginValid = false;
let ValidationOn = false;

const resetElm = (Elm) => {
    Elm.classList.remove("invalid");
    Elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (Elm) => {
    Elm.classList.add("invalid");
    Elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if(!ValidationOn) return;

    LoginValid = true;
    resetElm(emailInput);
    resetElm(passwordInput);

    if(!emailInput.value) {
        LoginValid = false;
        invalidateElm(emailInput);
    }

    if(!passwordInput.value) {
        LoginValid = false;
        invalidateElm(passwordInput);
    }
}

form.addEventListener('click', (e) => {
    if(LoginValid) {
        return;
    }
    else {
        e.preventDefault();
        ValidationOn = true;
        validateInputs();
    }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
    validateInputs();
    });
});

// Store user login input into localStorage //
let userInput = [];

const userLoginData = (e) => {
    e.preventDefault;
    let userData = {
        username : document.querySelector('input[name="email"]').value,
        password : document.querySelector('input[name="password"]').value
    }
    userInput.push(userData);
    console.log(userData);

    // Save to localStorage //
    localStorage.setItem('UserDataList', JSON.stringify(userInput));
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('log-in-btn').addEventListener('click', userLoginData)
});