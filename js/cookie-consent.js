const storageType = localStorage;

const consentPropertyName = 'cookie_consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    if(shouldShowPopup()){
        const consent = confirm('Agree to the terms and condition of the site?');
            if (consent){
                saveToStorage();
            }
    }
}
