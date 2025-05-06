// Initialize Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll with options
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
        offset: 80, // Offset for fixed header
        easing: 'easeInOutCubic',
        updateURL: false
    });

    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 100,
        delay: 100
    });

    // Add scroll animation triggers
    document.addEventListener('aos:in', ({ detail }) => {
        // Custom animation behavior when elements come into view
        if (detail.classList.contains('skill-category')) {
            const progressBars = detail.querySelectorAll('.progress');
            progressBars.forEach(progress => {
                const width = progress.style.width;
                progress.style.width = '0';
                
                setTimeout(() => {
                    progress.style.width = width;
                }, 300);
            });
        }
    });

    // Add scroll listener to animate header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Custom entrance animation for hero section
    const heroElements = document.querySelectorAll('.hero-content *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 100 + (index * 100));
    });

    // Add animated cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'animated-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
        setTimeout(() => {
            cursor.classList.remove('cursor-click');
        }, 500);
    });
}); 