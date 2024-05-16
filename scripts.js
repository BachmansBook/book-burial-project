Sure, here's the complete JavaScript code again:

### JavaScript Functionality
```javascript
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

    // FAQ functionality
    const faqData = [
        { question: 'What is the CI Book Project?', answer: 'The CI Book Project is a time capsule project dedicated to burying a book in Central Park to be revealed in 100 years.' },
        { question: 'How can I participate?', answer: 'You can participate by following our updates and attending the book burial ceremony.' }
    ];

    const faqContainer = document.getElementById('faq-container');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `<strong>${item.question}</strong><p>${item.answer}</p>`;
        faqContainer.appendChild(faqItem);
    });

    // Live Updates functionality
    const updatesData = [
        { date: '2024-01-01', update: 'Project officially launched.' },
        { date: '2024-06-01', update: 'Book selection process begins.' }
    ];

    const updatesContainer = document.getElementById('updates-container');
    updatesData.forEach(item => {
        const updateItem = document.createElement('div');
        updateItem.className = 'update-item';
        updateItem.innerHTML = `<strong>${item.date}</strong><p>${item.update}</p>`;
        updatesContainer.appendChild(updateItem);
    });

    // Contact form functionality
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Countdown functionality
    const countdownTimer = document.getElementById('countdown-timer');
    const revealDate = new Date('2125-01-01').getTime();
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = revealDate - now;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownTimer.innerHTML = 'The book has been revealed!';
        }
    }, 1000);
});
```

This script includes functionalities for the interactive timeline, FAQ section, live updates, contact form submission, and countdown timer.
