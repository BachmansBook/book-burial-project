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
    alert(`Thank you, ${name}. Your message has been sent!`);

    // Optionally, reset the form
    contactForm.reset();
});

// Interactive Timeline (if needed)
// You can add any interactive timeline functionality here if you decide to implement it.
