var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
/*--- UTILITY FUNCTIONS ---*/
// Show input error message
function showError(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
// Show success outline
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Get field name and uppercase
function uppercaseFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
/*--- VALIDATION FUNCTIONS ---*/
// Check for valid Email
function checkEmail(input) {
    // This Regex checks to make sure the email is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid');
    }
}
// Check required 
function checkRequired() {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    fields.forEach(function (field) {
        if (field.value.trim() === '') {
            showError(field, uppercaseFieldName(field) + " is required");
        }
        else {
            showSuccess(field);
        }
    });
}
// Check input length
function checkLength(field, min, max) {
    if (field.value.length < min) {
        showError(field, uppercaseFieldName(field) + " must be more than " + min + " characters");
    }
    else if (field.value.length > max) {
        showError(field, uppercaseFieldName(field) + " must be less than " + max + " characters");
    }
    else {
        showSuccess(field);
    }
}
// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}
/*---- EVENT LISTENERS -----*/
// Resets form on refresh
form.addEventListener('onload', form.reset());
// Handles submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired(username, email, password, password2);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});
