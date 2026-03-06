const form = document.getElementById('authForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // 1. Username Validation
    if (username.value.length < 5) {
        showError('userError', 'Access key must be at least 5 characters');
        username.classList.add('input-error');
        isValid = false;
    } else if (username.value.toLowerCase() === 'admin') {
        showError('userError', 'Restricted identifier');
        isValid = false;
    } else {
        hideError('userError');
        username.classList.remove('input-error');
    }

    // 2. Password Validation (Check for number)
    const hasNumber = /\d/.test(password.value);
    if (password.value.length < 8 || !hasNumber) {
        showError('passError', 'Security phrase requires 8+ chars and 1 number');
        password.classList.add('input-error');
        isValid = false;
    } else {
        hideError('passError');
        password.classList.remove('input-error');
    }

    if (isValid) {
        alert("Access Granted. Initializing system...");
        form.reset();
    }
});

function showError(id, message) {
    const el = document.getElementById(id);
    el.innerText = message;
    el.style.display = 'block';
}

function hideError(id) {
    document.getElementById(id).style.display = 'none';
}