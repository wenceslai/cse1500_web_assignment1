let form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    // e.preventDefault();

    let formData = new FormData(form);

    let email = formData.get('email');
    if(!/\w+@\w+.\w+/.test(email)) e.preventDefault();


});