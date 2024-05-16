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
        { question: 'What is the CI Book Project?', answer: 'It is a project dedicated to the Central Park Book Burial.' },
        { question: 'When will the book be revealed?', answer: 'The book will be revealed in 2125.' }
    ];

    const faqContainer = document.getElementById('faq-container');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `<strong>${item.question}</strong><p>${item.answer}</p>`;
        faqContainer.appendChild(faqItem);
    });

    // Live updates functionality
    const updatesData = [
        { date: '2024-01-01', update: 'Project officially started.' },
        { date: '2025-09-18', update: 'Book Burial Ceremony held.' }
    ];

    const updatesContainer = document.getElementById('updates-container');
    updatesData.forEach(item => {
        const updateItem = document.createElement('div');
        updateItem.className = 'update-item';
        updateItem.innerHTML = `<strong>${item.date}</strong>: ${item.update}`;
        updatesContainer.appendChild(updateItem);
    });

    // Countdown functionality
    const countdown = document.getElementById('countdown');
    const targetDate = new Date('2025-09-18T00:00:00');
    const updateCountdown = () => {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    setInterval(updateCountdown, 1000);

    // Form submission functionality
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
