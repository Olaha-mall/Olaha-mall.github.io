// Input requirement register form //
const form = document.querySelector('form');
const thankyou = document.querySelector('.thank-you');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
const firstnameInput = document.querySelector('input[name="first_name"]');
const lastnameInput = document.querySelector('input[name="last_name"]');
const addressInput = document.querySelector('input[name="address"]');
const cityInput = document.querySelector('input[name="city"]');
const zipcodeInput = document.querySelector('input[name="zipcode"]');
const countryInput = document.querySelector('select[name="country"]');
const accountInput = document.querySelector('select[name="AccountType"]');


// Email validation Regex //
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Phone validation Regex //
const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

// Password validation Regex //
const isValidPassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return re.test(String(password).toLowerCase());
}

// First Name and Last Name and City validation Regex //
const isValidName = (name) => {
    const re = /^[a-zA-Z]{3,}$/;
    return re.test(String(name).toLocaleLowerCase());
}

// City validation Regex //
const isValidCity = (city) => {
    const re = /^(\b\S+\b\s?){3,}$/;
    return re.test(String(city).toLocaleLowerCase());
}

// Address validattion Regex //
const isValidAddress = (address) => {
    const re = /^(?=.*\d)[a-zA-Z\s\d\/]{3,}$/;
    return re.test(String(address).toLocaleLowerCase());
}

// Zip code valdation Regex //
const isValidZipcode = (zipcode) => {
    const re = /^[0-9]{4,6}$/;
    return re.test(String(zipcode).toLocaleLowerCase());
}

// Array for inputs //
const inputs = [
// register form input //
    emailInput,
    phoneInput,
    passwordInput,
    confirmPasswordInput,
    firstnameInput,
    lastnameInput,
    addressInput,
    cityInput,
    zipcodeInput,
    countryInput,
    accountInput
]

// Boolean // 
let isFormValid = false;
let isValidationOn = false;

const resetElm = (Elm) => {
    Elm.classList.remove("invalid");
    Elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (Elm) => {
    Elm.classList.add("invalid");
    Elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if(!isValidationOn) return;

    isFormValid = true;
    // register form //
    resetElm(emailInput);
    resetElm(phoneInput);
    resetElm(passwordInput);
    resetElm(confirm_password);
    resetElm(firstnameInput);
    resetElm(lastnameInput);
    resetElm(addressInput);
    resetElm(cityInput);
    resetElm(zipcodeInput);
    resetElm(countryInput);
    resetElm(accountInput);

    // Email validate input // 
    if(!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }

    // Phone validate input // 
    if(!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invalidateElm(phoneInput);
    }

    // Password validate input //
    if(!isValidPassword(passwordInput.value)) {
        isFormValid = false;
        invalidateElm(passwordInput);
    }
    if(!isValidPassword(confirmPasswordInput.value)) {
        isFormValid = false;
        invalidateElm(confirmPasswordInput);
    }

    // First and Last Name validate input //
    if(!isValidName(firstnameInput.value)) {
        isFormValid = false;
        invalidateElm(firstnameInput);
    }
    if(!isValidName(lastnameInput.value)) {
        isFormValid = false;
        invalidateElm(lastnameInput);
    }

    // Address and City validate input //
    if(!isValidAddress(addressInput.value)) {
        isFormValid = false;
        invalidateElm(addressInput);
    }
    if(!isValidCity(cityInput.value)) {
        isFormValid = false;
        invalidateElm(cityInput);
    }
    
    // Zip code validate input //
    if(!isValidZipcode(zipcodeInput.value)) {
        isFormValid = false;
        invalidateElm(zipcodeInput);
    }

    // country validate input //
    if(!countryInput.value) {
        isFormValid = false;
        invalidateElm(countryInput);
    }

    // Account validate input //
    if(!accountInput.value) {
        isFormValid = false;
        invalidateElm(accountInput);
    }
}

// Password cofirmation //
const checkPassword = function() {
    if (passwordInput.value == confirmPasswordInput.value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = '✔ matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = '✖ not match';
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if(isFormValid) {
        form.remove();
        thankyou.classList.remove("hidden");
    }
});

// Array input event listener //
inputs.forEach((input) => {
    input.addEventListener("input", () => {
    validateInputs();
    });
});



// Account type validate form dropdown //
const accountType = document.querySelector('select[name="AccountType"]')
const ownerDetail = document.querySelector('.ownerdetail');

const expandFormDetail = function () {
    if (accountType.value == "owner") {
        ownerDetail.classList.remove("hidden")
    }
    else {
        ownerDetail.classList.add("hidden")
    }
}
accountType.addEventListener("change", expandFormDetail);