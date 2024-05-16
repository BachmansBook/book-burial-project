document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive elements
    const interactiveTimeline = document.querySelector('#timeline');
    const faqAccordion = document.querySelectorAll('.faq-item');
    const map = L.map('map').setView([40.7829, -73.9654], 13); // Location of Central Park

    // Load and display interactive timeline
    fetch('timeline.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const node = document.createElement('div');
                node.className = 'timeline-event';
                node.textContent = `${item.date}: ${item.event}`;
                interactiveTimeline.appendChild(node);
            });
        });

    // FAQ accordion functionality
    faqAccordion.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    // Map setup with Leaflet.js
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for the book burial location
    const marker = L.marker([40.7829, -73.9654]).addTo(map);
    marker.bindPopup('Book Burial Site').openPopup();

    // Setup event handlers for live updates and media
    document.querySelector('#live-updates-button').addEventListener('click', function() {
        fetch('live-updates.json')
            .then(response => response.json())
            .then(updates => {
                updates.forEach(update => {
                    const updateNode = document.createElement('p');
                    updateNode.textContent = update.message;
                    document.querySelector('#live-updates').appendChild(updateNode);
                });
            });
    });

    // Accessibility features
    document.querySelector('#accessibility-toggle').addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });

    // Sponsor logos display
    const sponsorsDiv = document.querySelector('#sponsors');
    fetch('sponsors.json')
        .then(response => response.json())
        .then(sponsors => {
            sponsors.forEach(sponsor => {
                const img = document.createElement('img');
                img.src = sponsor.logo;
                img.alt = sponsor.name + ' logo';
                sponsorsDiv.appendChild(img);
            });
        });
});
