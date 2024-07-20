const form = document.getElementById('contactForm');
const fields = ['name', 'email', 'phone', 'message'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorElement = document.getElementById(`${field}Error`);
        
        if (!input.checkValidity()) {
            isValid = false;
            errorElement.textContent = input.validationMessage;
            input.setAttribute('aria-invalid', 'true');
        } else {
            errorElement.textContent = '';
            input.removeAttribute('aria-invalid');
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

fields.forEach(field => {
    const input = document.getElementById(field);
    input.addEventListener('input', () => {
        const errorElement = document.getElementById(`${field}Error`);
        if (input.checkValidity()) {
            errorElement.textContent = '';
            input.removeAttribute('aria-invalid');
        }
    });
});