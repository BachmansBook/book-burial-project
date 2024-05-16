document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');
  
    // Timeline functionality
    const timelineData = [
        { year: 2024, event: 'Project Start' },
        { year: 2025, event: 'Book Burial Ceremony' },
        { year: 2125, event: 'Book Reveal' }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `<strong>${item.year}</strong>: ${item.event}`;
        timelineContainer.appendChild(timelineItem);
    });

    // Form submission functionality
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Countdown functionality
    const countdown = document.getElementById('countdown');
    const countdownDate = new Date('September 18, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdown.innerHTML = 'The event has started!';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Language switcher functionality
    const languageSwitcher = document.getElementById('language-switcher');
    languageSwitcher.addEventListener('change', function(event) {
        alert('Language changed to ' + event.target.value);
    });
});
