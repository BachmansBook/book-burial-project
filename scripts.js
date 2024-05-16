document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    // Timeline data
    const timelineData = [
        { year: 2024, event: 'Project Start' },
        { year: 2025, event: 'Book Burial Ceremony' },
        { year: 2125, event: 'Book Reveal' }
    ];

    // Populate timeline
    const timelineContainer = document.getElementById('timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `<strong>${item.year}</strong>: ${item.event}`;
        timelineContainer.appendChild(timelineItem);
    });

    // FAQ data
    const faqData = [
        { question: 'What is the CI Book Project?', answer: 'The CI Book Project is a century-long initiative to bury a book in Central Park, New York, to be revealed in 100 years.' },
        { question: 'How can I participate?', answer: 'You can participate by contributing to the project through donations, volunteering, or sharing your stories.' }
    ];

    // Populate FAQ
    const faqContainer = document.getElementById('faq-container');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `<h3>${item.question}</h3><p>${item.answer}</p>`;
        faqContainer.appendChild(faqItem);
    });

    // Live updates data
    const updatesData = [
        { date: '2024-01-01', update: 'Project officially started.' },
        { date: '2025-09-18', update: 'Book Burial Ceremony held.' }
    ];

    // Populate live updates
    const updatesContainer = document.getElementById('updates-container');
    updatesData.forEach(item => {
        const updateItem = document.createElement('div');
        updateItem.className = 'update-item';
        updateItem.innerHTML = `<h3>${item.date}</h3><p>${item.update}</p>`;
        updatesContainer.appendChild(updateItem);
    });

    // Countdown functionality
    const countdownElement = document.getElementById('countdown-timer');
    const targetDate = new Date('2025-09-18T00:00:00');
    const updateCountdown = () => {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    setInterval(updateCountdown, 1000);

    // Form submission functionality
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy load images
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        images.forEach(image => {
            observer.observe(image);
        });
    };
    lazyLoadImages();

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerText = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.background = '#007bff';
    darkModeToggle.style.color = '#fff';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.cursor = 'pointer';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Add class for dark mode styles
    const darkModeStyles = document.createElement('style');
    darkModeStyles.innerHTML = `
        .dark-mode {
            background-color: #121212;
            color: #f5f5f5;
        }
        .dark-mode header, .dark-mode footer, .dark-mode nav ul {
            background-color: #333;
        }
        .dark-mode section {
            background-color: #1a1a1a;
        }
    `;
    document.head.appendChild(darkModeStyles);
});
