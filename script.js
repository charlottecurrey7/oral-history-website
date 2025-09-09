// Smooth scrolling for navigation links
function smoothScroll(targetId) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    const offset = 80; // Account for fixed nav
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(244, 160, 156, 0.15)';
    } else {
        nav.style.boxShadow = '0 2px 15px rgba(244, 160, 156, 0.1)';
    }
});

// Duplicate marquee content for seamless scrolling
document.addEventListener('DOMContentLoaded', function() {
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        marqueeContent.innerHTML += marqueeContent.innerHTML;
    }
    
    // Optional: Add fade-in animation for sections as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('.about-card, .step, .testimonial');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Form handling
    const form = document.getElementById('contact-form');
    if (form) {
        // For Formspree, the form will submit normally
        // This is just for adding custom validation or effects
        form.addEventListener('submit', function(e) {
            const button = form.querySelector('.submit-button');
            button.textContent = 'Sending...';
            button.style.opacity = '0.7';
            button.disabled = true;
        });
        
        // Add floating label effect (optional enhancement)
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
});

// Mobile menu toggle (for future implementation if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}