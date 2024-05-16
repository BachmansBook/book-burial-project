// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Example of interactive element functionality
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple form validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Example of form submission (AJAX request)
        const xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                alert("Your message has been sent successfully!");
                form.reset();
            } else if (xhr.readyState === XMLHttpRequest.DONE) {
                alert("There was an error sending your message. Please try again.");
            }
        };

        xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
    });

    // Example of dynamic content loading
    const projectsSection = document.getElementById("projects");
    const projectsData = [
        { title: "Project 1", description: "Description for Project 1" },
        { title: "Project 2", description: "Description for Project 2" },
        { title: "Project 3", description: "Description for Project 3" }
    ];

    projectsData.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsSection.appendChild(projectDiv);
    });

    // Example of a simple animation
    const homeSection = document.querySelector(".home");
    homeSection.style.opacity = 0;
    window.addEventListener("load", function() {
        homeSection.style.transition = "opacity 1s";
        homeSection.style.opacity = 1;
    });
});
