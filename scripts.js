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
});
