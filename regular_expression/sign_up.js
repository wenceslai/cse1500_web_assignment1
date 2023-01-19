let form = document.querySelector('form');

let inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('blur', checkInput);
});


let textarea = document.querySelector('textarea');
textarea.addEventListener('blur', checkInput);


form.addEventListener("submit", (e) => {
    inputs.forEach((input) => {
        if(!checkInput({target: input})) {
            e.preventDefault();
        }
    });

    if(!checkInput({target: textarea})) e.preventDefault(); 
});


function checkInput(e) {
    if(validate(e.target.name, e.target.value)) {
        e.target.style = "border: 1px solid var(--good)"
        // console.log('setting good' + e.target.name);
        return true;
    } else {
        e.target.style = "border: 1px solid var(--bad)"
        console.log('setting bad');
        return false;
    }
}


function validate(name, value) {
    switch(name) {
        case 'email':
            return /\w+@\w+.\w+/.test(value);
        case 'username':
            return /[A-Z]\w{4,11}[\d\W]/.test(value);
        case 'password':
            return /\w{12,}/.test(value);
        case 'name':
            return /[A-Za-z]+/.test(value);
        case 'country':
            return value !== '';
        case 'zipcode':
            return /\d{4}[A-Z]{2}/.test(value);
        case 'language':
            return value !== '';
        case 'gender':
            return value !== '';
        default:
            return true;
    }
}