document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the navigation menu with a smoother transition
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside (for better UX)
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }

            // Close menu on mobile after clicking a link
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
            }
        });
    });
});
