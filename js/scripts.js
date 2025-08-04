// Login Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const errorElement = document.getElementById('login-error');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            errorElement.textContent = '';

            // Reset input styles
            emailInput.classList.remove('is-invalid');
            passwordInput.classList.remove('is-invalid');

            // Validate email
            const email = emailInput.value.trim();
            if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                errorElement.textContent = 'Please enter a valid email address (e.g., user@domain.com).';
                emailInput.classList.add('is-invalid');
                isValid = false;
            }

            // Validate password
            const password = passwordInput.value;
            if (password.length < 8) {
                errorElement.textContent = 'Password must be at least 8 characters long.';
                passwordInput.classList.add('is-invalid');
                isValid = false;
            }

            // If both fields are valid, redirect to Profile page
            if (isValid) {
                // Simulate successful login
                alert('Login successful!');
                loginForm.reset();
                window.location.href = 'profile.html'; // Redirect to Profile page
            }
        });
    }

    // Register Form Validation
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const errorElement = document.getElementById('register-error');

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            errorElement.textContent = '';

            // Reset input styles
            nameInput.classList.remove('is-invalid');
            emailInput.classList.remove('is-invalid');
            passwordInput.classList.remove('is-invalid');
            confirmPasswordInput.classList.remove('is-invalid');

            // Validate name
            const name = nameInput.value.trim();
            if (name.length < 2) {
                errorElement.textContent = 'Name must be at least 2 characters long.';
                nameInput.classList.add('is-invalid');
                isValid = false;
            }

            // Validate email
            const email = emailInput.value.trim();
            if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                errorElement.textContent = 'Please enter a valid email address (e.g., user@domain.com).';
                emailInput.classList.add('is-invalid');
                isValid = false;
            }

            // Validate password
            const password = passwordInput.value;
            if (password.length < 8) {
                errorElement.textContent = 'Password must be at least 8 characters long.';
                passwordInput.classList.add('is-invalid');
                isValid = false;
            }

            // Validate confirm password
            const passwordConfirm = confirmPasswordInput.value;
            if (password !== passwordConfirm) {
                errorElement.textContent = 'Passwords do not match.';
                confirmPasswordInput.classList.add('is-invalid');
                isValid = false;
            }

            // If all fields are valid, redirect to Login page
            if (isValid) {
                // Simulate successful registration
                alert('Registration successful! Please log in.');
                registerForm.reset();
                window.location.href = 'login.html'; // Redirect to Login page
            }
        });
    }
});