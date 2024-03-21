 
 const storedProfile = localStorage.getItem('userProfile');

 if (storedProfile) {

     window.location.href = `profile.html`;
 } else {

     window.location.href = 'sign_up.html';
 }