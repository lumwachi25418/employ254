function searchProfiles() {
    // Declare variables
    var input, filter, container, profile, name, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.getElementById('profileContainer');
    profile = container.getElementsByClassName('container');

    // Loop through all profile containers, and hide those who don't match the search query
    for (i = 0; i < profile.length; i++) {
        name = profile[i].getElementsByTagName("h1")[0];
        txtValue = name.textContent || name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            profile[i].style.display = "";
        } else {
            profile[i].style.display = "none";
        }
    }
}