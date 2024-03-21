document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search input');
    const profileContainers = document.querySelectorAll('.container');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();

        profileContainers.forEach(container => {
            const profileName = container.querySelector('p').textContent.trim().toLowerCase();
            if (profileName.includes(searchTerm)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    });
});
