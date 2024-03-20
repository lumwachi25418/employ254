function validateForm() {
    var username = document.querySelector('.sign_in input[type="text"]').value.trim();
    var password = document.querySelector('.sign_in input[type="password"]').value.trim();

    // Check if username and password are empty
    if (username === '' || password === '') {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Replace the condition with your actual authentication logic
    if (username === "correct_username" && password === "correct_password") {
        alert("Login successful!");
        return true; // Allow form submission
    } else {
        alert("Incorrect username or password. Please try again.");
        return false; // Prevent form submission
    }
}

// Function to handle password reset
function resetPassword() {
    var username = document.querySelector('.sign_in input[type="text"]').value.trim();

    // Check if username is empty
    if (username === '') {
        alert("Please fill in your username to reset password.");
        return false; // Prevent form submission
    }

    // Replace the condition with your actual logic to reset password
    // Here, we're just alerting that the password reset link has been sent
    alert("Password reset link has been sent to your email.");
    return true; // Allow form submission
}

// Add event listeners for form submission
document.querySelector('.btn button:first-of-type').addEventListener('click', validateForm);
document.querySelector('.btn button:last-of-type').addEventListener('click', resetPassword);
