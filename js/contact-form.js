// adding a country code for a contact form
const userPhone = document.querySelector("#user-phone");

window.intlTelInput(userPhone, {
    initialCountry: "ua",
    strictMode: true,
    utilsScript: "/intl-tel-input/js/utils.js?1723068208252"
});

// contact form validation
const inputs = document.querySelectorAll(".input");
const checkbox = document.querySelector("#agriment");
const invalidCheckbox = document.querySelector(".agriment-check");
const errorMsgs = document.querySelectorAll(".input-error");
const form = document.querySelector("#popup-contact-form");

// check inputs for emptiness
function checkInputs() {
    let allValid = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() == 0) {
            errorMsgs[i].textContent = "Error";
            inputs[i].classList.add("error-input");
            allValid = false;
        } else {
            errorMsgs[i].textContent = null;
            inputs[i].classList.remove("error-input");
        }
    }
    return allValid;
}

// checkbox validation
function checkCheckbox() {
    if (!checkbox.checked) {
        invalidCheckbox.classList.add("error-check");
        return false;
    } else {
        invalidCheckbox.classList.remove("error-check");
        return true;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputsValid = checkInputs();
    const checkboxValid = checkCheckbox();

    if (inputsValid && checkboxValid) {
        form.submit();
    }
});
