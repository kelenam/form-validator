const form: any = document.getElementById('form');
const username: any = document.getElementById('username');
const email: any = document.getElementById('email');
const password: any = document.getElementById('password');
const password2: any = document.getElementById('password2');

/*--- UTILITY FUNCTIONS ---*/
// Show input error message
function showError(input: any, message: string): void {
    const formControl: any = input.parentElement;
    const small: any = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

// Show success outline
function showSuccess(input: any): void {
    const formControl: any = input.parentElement;
    formControl.className = 'form-control success';
}

// Get field name and uppercase
function uppercaseFieldName(input: any): string {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/*--- VALIDATION FUNCTIONS ---*/ 
// Check for valid Email
function checkEmail(input: any) {
    // This Regex checks to make sure the email is valid
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid')
    }
}
 
// Check required 
function checkRequired(...fields: any): void { 
    fields.forEach((field: any) => {
        if (field.value.trim() === '') {
            showError(field, `${uppercaseFieldName(field)} is required`);
        } else {
            showSuccess(field);
        }
    });
}

// Check input length
function checkLength(field: any, min: number, max: number): void { 
    if (field.value.length < min) {
         showError(field, `${uppercaseFieldName(field)} must be more than ${min} characters`)
    } else if (field.value.length > max) {
        showError(field, `${uppercaseFieldName(field)} must be less than ${max} characters`)
    } else {
        showSuccess(field);
    }
}

// Check passwords match
function checkPasswordsMatch(input1: any, input2: any): void {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match")
    }
}

/*---- EVENT LISTENERS -----*/
// Resets form on refresh
form.addEventListener('onload', form.reset());

// Handles form submission
form.addEventListener('submit', function(e: any): void {
    e.preventDefault();

    checkRequired(
        username,
        email,
        password,
        password2
    );
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
}); 