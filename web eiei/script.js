// Smooth scrolling for links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('data-target'); // Get the target ID from data attribute
        const targetElement = document.getElementById(targetId); // Get the target element

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Element with ID '${targetId}' not found.`);
        }
    });
});
