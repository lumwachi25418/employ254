 // Check if the user's profile is stored in local storage
 const storedProfile = localStorage.getItem('userProfile');

 if (storedProfile) {
     // Redirect to the profile page
     window.location.href = storedProfile;
 } else {
     // If no profile is stored, redirect to the sign-up page or any other desired page
     window.location.href = 'sign_up.html'; // Change 'sign_up.html' to your desired page
 }