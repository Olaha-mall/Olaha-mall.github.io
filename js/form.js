
// Input requirement contact form //
const form = document.querySelector('form');
const thankyou = document.querySelector('.thank-you');
const purposeInput = document.querySelector('select[name="contactpurposes"]');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const contactmethodInput = document.querySelector('select[name="contactmethod"]');
const contactdayInput = document.querySelector('select[name="contactday"]');
const messagesInput = document.querySelector('textarea[name="messages"]');


// Name validation Regex //
const isValidName = (name) => {
    const re = /^(\b\S+\b\s?){3,}$/;
    return re.test(String(name).toLowerCase());
};

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

// Messages validation Regex (50-500)words //
const isValidMessage = (messages) => {
    const re = /^(\b\S+\b\s?){50,500}$/;
    return re.test(String(messages).toLowerCase());
};



// Array for inputs //
const inputs = [
//  contact form input //
    purposeInput, 
    nameInput, 
    emailInput, 
    phoneInput, 
    contactmethodInput, 
    contactdayInput, 
    messagesInput
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
    // contact form //
    resetElm(purposeInput);
    resetElm(nameInput);
    resetElm(emailInput);
    resetElm(phoneInput);
    resetElm(contactmethodInput);
    resetElm(contactdayInput);
    resetElm(messagesInput);


    // Purpose validate input //
    if(!purposeInput.value) {
        isFormValid = false;
        invalidateElm(purposeInput);
    }

    // Name validate input //
    if(!isValidName(nameInput.value)) {
        isFormValid = false;
        invalidateElm(nameInput);
    }
    
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

    // Contact method validate input // 
    if(!contactmethodInput.value) {
        isFormValid = false;
        invalidateElm(contactmethodInput);
    }

    // Contact day validate input //
    if(!contactdayInput.value) {
        isFormValid = false;
        invalidateElm(contactdayInput);
    }

    // Messages validate input //
    if(!isValidMessage(messagesInput.value)) {
        isFormValid = false;
        invalidateElm(messagesInput);
    }

};

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

// Words counts validation //
function countWords(self) {
    var spaces = self.value.match(/\S+/g);
    var words = spaces ? spaces.length : 0;

    document.getElementById("count-words").innerHTML = words + "/500 words"
};

// Reset Form //
function resetform() {
    document.getElementById("form").reset();
    document.getElementById("count-words").reset();
};
