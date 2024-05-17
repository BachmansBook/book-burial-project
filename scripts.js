// script.js

// Countdown Timer
document.addEventListener('DOMContentLoaded', (event) => {
    const countdownElement = document.getElementById('countdown-timer');
    const targetDate = new Date('October 1, 2025 00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "The event has started!";
        }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Extract form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Perform form submission (you can replace this with actual form submission logic)
        // For example, you could send the data to a server via AJAX:
        // fetch('submit_form.php', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     alert(`Thank you, ${name}. Your message has been sent!`);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert('There was a problem submitting your message. Please try again later.');
        // });

        // Placeholder: Alert to indicate form submission
        alert(`Thank you, ${name}. Your message has been sent!`);

        // Optionally, reset the form
        contactForm.reset();
    });
});

// Interactive Timeline (Example functionality)
// You can add any interactive timeline functionality here if needed.
// For example, you might want to allow users to click on events to see more details:

document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-container .event');
    events.forEach(event => {
        event.addEventListener('click', () => {
            // Expand or show more details about the event
            alert(`Details about the event: ${event.querySelector('h3').textContent}`);
        });
    });
});

// Video Auto-Play Handling
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.setAttribute('autoplay', true);
        videoElement.setAttribute('controls', true);
    }
});

// Additional UI Enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a smooth scroll effect for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
