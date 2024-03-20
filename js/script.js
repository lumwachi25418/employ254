// Function to handle job search
function searchJobs() {
    // Get the search query entered by the user
    var searchQuery = document.querySelector('.search input').value.trim().toLowerCase();

    // Retrieve job information from local storage
    var jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Filter jobs based on search query
    var filteredJobs = jobs.filter(function(job) {
        return job.title.toLowerCase().includes(searchQuery) || job.description.toLowerCase().includes(searchQuery);
    });

    // Display filtered jobs
    displayJobs(filteredJobs);
}

// Function to display jobs
function displayJobs(jobs) {
    var jobsContainer = document.querySelector('.jobs');
    jobsContainer.innerHTML = ''; // Clear previous job listings

    // Loop through filtered jobs and display them
    jobs.forEach(function(job) {
        var jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h3 class="title">${job.title}</h3>
            <p class="description">${job.description}</p>
        `;
        jobsContainer.appendChild(jobElement);
    });
}

// Add event listener for the search button
document.querySelector('.search button').addEventListener('click', searchJobs);

// Call searchJobs function on page load to display all jobs initially
window.addEventListener('load', function() {
    searchJobs();
});

