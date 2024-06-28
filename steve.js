function showResetPassword() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.reset-container').style.display = 'block';
}

function showLogin() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.reset-container').style.display = 'none';
}

function hideInputs(container) {
    const inputs = container.querySelectorAll('input');
    const buttons = container.querySelectorAll('button');
    inputs.forEach(input => input.style.display = 'none');
    buttons.forEach(button => button.style.display = 'none');
}

function login() {
    const loginContainer = document.querySelector('.login-container');
    hideInputs(loginContainer);
    alert('Login functionality not implemented.');
}

function resetPassword() {
    const resetContainer = document.querySelector('.reset-container');
    hideInputs(resetContainer);
    alert('Reset password functionality not implemented.');
}
