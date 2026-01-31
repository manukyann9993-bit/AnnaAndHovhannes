// Wedding countdown timer
// Target date: April 26, 2026

function updateCountdown() {
    // Set the target date (April 26, 2026 at 00:00:00)
    const weddingDate = new Date('2026-04-26T00:00:00').getTime();

    // Get current time
    const now = new Date().getTime();

    // Calculate the difference
    const difference = weddingDate - now;

    // If the wedding date has passed
    if (difference < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        // Optional: Change the title to show the wedding has happened
        document.querySelector('.countdown-title').textContent = 'Հարսանիքը տեղի է ունեցել!';
        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format numbers to always show 2 digits
    const formatNumber = (num) => num.toString().padStart(2, '0');

    // Update the countdown display
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
}

// Update countdown immediately on page load
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Add smooth scroll behavior and touch-friendly interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add entrance animation trigger
    const content = document.querySelector('.content');
    setTimeout(() => {
        content.style.opacity = '1';
    }, 100);

    // Add touch feedback for mobile
    const timeBoxes = document.querySelectorAll('.time-box');
    timeBoxes.forEach(box => {
        box.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.95)';
        });

        box.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// Rotate background gradient slightly for dynamic effect (optional)
let gradientAngle = 135;
function animateGradient() {
    gradientAngle = (gradientAngle + 0.1) % 360;
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.background = `linear-gradient(
            ${gradientAngle}deg,
            rgba(102, 126, 234, 0.7) 0%,
            rgba(118, 75, 162, 0.7) 100%
        )`;
    }
}
// Uncomment the line below if you want the gradient to slowly rotate
// setInterval(animateGradient, 50);
