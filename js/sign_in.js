function validateForm() {
    var username = document.querySelector('.sign_in input[type="text"]').value.trim();
    var password = document.querySelector('.sign_in input[type="password"]').value.trim();


    if (username === '' || password === '') {
        alert("Please fill in all fields.");
        return false; 
    }

    
    if (username === "correct_username" && password === "correct_password") {
        alert("Login successful!");
        localStorage.setItem(username," ")
        localStorage.getItem(username," ")
        return true;
    } else {
        alert("Incorrect username or password. Please try again.");
        return false; 
    }
}


function resetPassword() {
    var username = document.querySelector('.sign_in input[type="text"]').value.trim();

    
    if (username === '') {
        alert("Please fill in your username to reset password.");
        return false;
    }

    
    alert("Password reset link has been sent to your email.");
    return true;
}


document.querySelector('.btn button:first-of-type').addEventListener('click', validateForm);
document.querySelector('.btn button:last-of-type').addEventListener('click', resetPassword);
