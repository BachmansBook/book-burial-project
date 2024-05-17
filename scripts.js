document.addEventListener("DOMContentLoaded", function() {
    // Example JavaScript functionality
    // Add any necessary event listeners and interactive functionalities here

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Contact form submission
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Simple form validation
        if (name && email && message) {
            alert("Thank you for your message, " + name + "!");
            this.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Placeholder for any other JavaScript functionality
});
