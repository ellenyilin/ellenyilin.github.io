// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Dice animation and interaction
document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('dice');
    const profileCard = document.querySelector('.profile-card');
    
    if (dice && profileCard) {
        // Reset dice animation on page load
        dice.style.animation = 'none';
        dice.offsetHeight; // Trigger reflow
        dice.style.animation = 'diceRoll 3s ease-out forwards';
        
        // Add click to roll dice
        profileCard.addEventListener('click', () => {
            rollDice();
        });
        
        // Add hover effect
        profileCard.addEventListener('mouseenter', () => {
            if (!dice.classList.contains('rolling')) {
                dice.style.animation = 'diceHover 0.6s ease-in-out';
            }
        });
    }
});

function rollDice() {
    const dice = document.getElementById('dice');
    if (!dice) return;
    
    // Add rolling class to prevent hover during roll
    dice.classList.add('rolling');
    
    // Generate random rotations
    const randomX = Math.floor(Math.random() * 6) * 90 + Math.random() * 360;
    const randomY = Math.floor(Math.random() * 6) * 90 + Math.random() * 360;
    const randomZ = Math.floor(Math.random() * 6) * 90 + Math.random() * 360;
    
    // Apply rolling animation
    dice.style.animation = 'none';
    dice.offsetHeight; // Trigger reflow
    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;
    dice.style.transition = 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Remove rolling class after animation
    setTimeout(() => {
        dice.classList.remove('rolling');
        dice.style.transition = '';
    }, 2000);
}

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-title, .about-text, .contact-info');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add reveal class styles
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-title,
    .about-text,
    .contact-info {
        opacity: 0;
        transform: translateY(30px);
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);
