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

// Simple flip animation with drop effect
document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.querySelector('.profile-image-container');
    
    if (profileContainer) {
        // Reset animation on page load
        profileContainer.style.animation = 'none';
        profileContainer.offsetHeight; // Trigger reflow
        profileContainer.style.animation = 'simpleDrop 2s ease-out forwards';
        
        // After animation completes, ensure proper positioning
        setTimeout(() => {
            profileContainer.style.transform = 'translateY(0)';
        }, 2000);
    }
});

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

// ========== Loading Screen ==========
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ========== Dark Mode Toggle ==========
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(0.9) rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
});

// ========== Ripple Cursor Effect ==========
document.addEventListener('DOMContentLoaded', () => {
    const rippleContainer = document.getElementById('ripple-container');
    
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor follow
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Create ripple effect on click
    document.addEventListener('click', (e) => {
        createRipple(e.clientX, e.clientY);
    });
    
    // Create ripple on scroll (throttled)
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (Math.abs(window.scrollY - lastScrollY) > 50) {
                const x = window.innerWidth / 2;
                const y = window.scrollY + window.innerHeight / 2;
                createRipple(x, y, true);
                lastScrollY = window.scrollY;
            }
        }, 100);
    });
    
    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, select');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
    
    // Create ripple function
    function createRipple(x, y, isScroll = false) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Different style for scroll ripples
        if (isScroll) {
            ripple.style.borderColor = document.body.classList.contains('dark-mode') 
                ? 'rgba(14, 165, 233, 0.3)' 
                : 'rgba(5, 150, 105, 0.3)';
        }
        
        rippleContainer.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }
    
    // Hide custom cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});

// ========== Project Modal System ==========
const projectData = {
    lyft: {
        title: "Lyft Traffic Analysis",
        badge: "01 · INSIGHT",
        role: "Problem Identification",
        context: "My role in this project focused on recognizing where the transport system was underperforming and making those problems visible. By applying my analytical background, I identified recurring patterns in Lyft's market performance across New York City.",
        challenge: "When total demand surges, Lyft consistently loses share to Uber, indicating that Lyft's driver supply is insufficient during peak hours. Between 15:00–18:00, total trip volume reaches its highest levels, and Lyft's market share falls to its lowest point (~23%).",
        approach: [
            "Analyzed market performance across all NYC boroughs (Manhattan, Bronx, Brooklyn, Queens, Staten Island)",
            "Applied spatial-temporal analysis to identify demand-supply misalignment patterns",
            "Distinguished structurally different demand–supply patterns through analytical methods",
            "Special case discovery: Staten Island shows opposite pattern - Lyft gains share when demand increases"
        ],
        outcome: "The analysis revealed a clear contrast between temporal and spatial performance. While vehicle allocation is generally effective over time, spatial analysis shows that demand in Manhattan consistently outpaces available supply. This reframing defined the problem space and set the stage for exploring how such mismatches could be addressed through design and strategic solutions."
    },
    vr: {
        title: "Healthy HCI: VR Ergonomics Study",
        badge: "02 · EXPERIMENT",
        role: "Solution Exploration Through Controlled Experiments",
        context: "VR interaction hasn't been widely adopted partly because repeated use is physically and mentally exhausting. This study investigates comfort-oriented interaction paths and spatial regions to reduce workload and potential health risks.",
        challenge: "When a system-level issue is identified, I explore possible interventions through controlled experiments to quantify workload and fatigue in VR target selection tasks and translate findings into actionable UI placement guidelines.",
        approach: [
            "Designed experimental protocol with 12 participants (~3 hours each, 36 total study hours)",
            "Independent variables: Distance (0.45m / 0.60m / 0.75m), Region (multiple angle regions: -60° to +60°)",
            "Dependent variables: NASA-TLX, Borg CR10 rating, Subjective comfort notes",
            "Statistical analysis (ANOVA) to identify comfort patterns"
        ],
        insights: [
            "<strong>Insight 1 - Keep targets within FOV:</strong> Turning head was most uncomfortable; targets out of view add mental pressure",
            "<strong>Insight 2 - Prefer lower and slightly right regions:</strong> Lower-central regions show consistently lower exertion",
            "<strong>Insight 3 - Vary interaction regions:</strong> Region alternation reduces fatigue accumulation by spreading physical demand"
        ],
        outcome: "Distance had significant effect on perceived workload (ANOVA, p < .001). Region placement significantly affected mental/physical demand (p < .01). The outcome is a set of design-ready guidelines for VR UI placement that reduce fatigue and support inclusive VR experiences."
    },
    berkeley: {
        title: "Berkeley Rock & Roar: Spatial Design",
        badge: "03 · DESIGN",
        role: "Design Solutions",
        context: "Located in Cesar Chavez Park, Berkeley, this project explores how spatial design can mediate recurring human–wildlife interaction along the waterfront. Seasonal seal presence introduces a recurring human–wildlife conflict at the site.",
        challenge: "The design responds by subtly regulating proximity through spatial organization, discouraging close encounters while maintaining openness and coexistence.",
        approach: [
            "Translated abstract system insights into concrete spatial decisions under real-world constraints",
            "Field observations abstracted into spatial rules guiding circulation, openness, and program distribution",
            "Organized site into two spatially integrated but behaviorally differentiated zones",
            "Employed modular stone and wood elements that subtly regulate movement and distance"
        ],
        designElements: [
            "<strong>Spatial Experience:</strong> Human circulation system + Wildlife habitat system working in harmony",
            "<strong>Mediated Visual Access:</strong> Controlled sightlines maintaining awareness without intrusion",
            "<strong>Adaptive System:</strong> Modular elements can be reconfigured based on environmental conditions",
            "<strong>Vertical Relationship:</strong> Sectional strategy for behavioral mediation"
        ],
        outcome: "These elements function as an adaptive system, capable of being reconfigured in response to environmental conditions while maintaining openness and coexistence between human visitors and wildlife."
    },
    cartabio: {
        title: "CartaBio Immune Database",
        badge: "04 · BUILD",
        role: "Implementation & System Improvement",
        context: "As projects move from concept to execution, design intentions often break down without supporting systems. This project focuses on building data infrastructure to support consistent data ingestion, validation, and reuse.",
        challenge: "Fragmented public scRNA-seq sources distributed across dozens of platforms with inconsistent formats. Inconsistent annotation standards where cell types and states defined differently across datasets. Lack of reusable abstractions requiring repeated manual interpretation for downstream analysis.",
        approach: [
            "Designed systematic data pipeline transforming fragmented sources into structured, queryable database",
            "Integrated data pipeline with quality control (deduplication, metadata standardization)",
            "Implemented RAPIDS (CuDF) CUDA acceleration for batch processing",
            "Built cell type annotation process with cloud computing architecture",
            "Established consistent data ingestion, validation, and reuse systems"
        ],
        metrics: [
            "<strong>600K+ datasets processed:</strong> Comprehensive coverage of immune cell data",
            "<strong>80% → 94% data integrity:</strong> Significant quality improvement through validation pipeline",
            "<strong>3 weeks → 3 days:</strong> 7x speedup in processing 40K+ datasets using CUDA optimization",
            "<strong>AWS S3 deployment:</strong> Built structured database with 300M+ records"
        ],
        outcome: "Successfully transformed fragmented research data into a reusable system. The systematic pipeline now enables consistent downstream analysis without repeated manual interpretation, significantly accelerating research workflows."
    },
    sensetime: {
        title: "SenseTime AI Chatbox A/B Testing",
        badge: "05 · VALIDATE",
        role: "Evaluation for Business Goals",
        context: "During my internship at SenseTime, I proposed and validated a new interaction pattern in a conversational AI shopping flow to reduce early exits and increase first-step retention.",
        challenge: "In an AI-driven recommendation dialogue, product images were auto-popped early in the conversation. While informative, this design often disrupted exploration and led to immediate drop-off.",
        hypothesis: "Delaying product exposure through progressive disclosure will increase the rate of users who make an initial click/interaction rather than exiting immediately. It would give users sense of exploration.",
        solution: "Instead of showing product images automatically, product cards are revealed only after the user takes an additional interaction step, encouraging exploration and giving users a stronger sense of control.",
        results: [
            "<strong>Primary metric improved:</strong> First-step retention ↑17%",
            "<strong>Improved exploration behavior:</strong> Users engaged longer before seeing product content",
            "<strong>Early funnel strengthened:</strong> Reduced 'bounce at first message' behavior"
        ],
        outcome: "The A/B test validated the progressive disclosure hypothesis. By giving users more agency in the exploration process, we successfully reduced early drop-off and improved retention in the critical first interaction step."
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectData[projectId];
    
    if (!project) return;
    
    let content = `
        <div class="modal-header">
            <div class="project-badge">${project.badge}</div>
            <h2>${project.title}</h2>
            <p style="font-size: 1.1rem; opacity: 0.8; margin-top: 0.5rem;"><strong>My Role:</strong> ${project.role}</p>
        </div>
    `;
    
    // Context
    if (project.context) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-info-circle"></i> Context</h3>
                <p>${project.context}</p>
            </div>
        `;
    }
    
    // Challenge
    if (project.challenge) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Challenge</h3>
                <div class="highlight-box">
                    <p>${project.challenge}</p>
                </div>
            </div>
        `;
    }
    
    // Hypothesis (for SenseTime)
    if (project.hypothesis) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-lightbulb"></i> Hypothesis</h3>
                <p>${project.hypothesis}</p>
            </div>
        `;
    }
    
    // Solution (for SenseTime)
    if (project.solution) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-tools"></i> Proposed Solution</h3>
                <p>${project.solution}</p>
            </div>
        `;
    }
    
    // Approach
    if (project.approach) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-tasks"></i> Approach</h3>
                <ul>
                    ${project.approach.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Insights (for VR)
    if (project.insights) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-brain"></i> Key Insights</h3>
                <ul>
                    ${project.insights.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Design Elements (for Berkeley)
    if (project.designElements) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-drafting-compass"></i> Design Elements</h3>
                <ul>
                    ${project.designElements.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Metrics (for CartaBio)
    if (project.metrics) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-chart-bar"></i> Key Metrics</h3>
                <ul>
                    ${project.metrics.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Results (for SenseTime)
    if (project.results) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-trophy"></i> Key Results from A/B Testing</h3>
                <ul>
                    ${project.results.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Outcome
    if (project.outcome) {
        content += `
            <div class="modal-section">
                <h3><i class="fas fa-check-circle"></i> Outcome</h3>
                <div class="highlight-box">
                    <p>${project.outcome}</p>
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========== Sunglasses Dark Mode Toggle ==========
document.addEventListener('DOMContentLoaded', () => {
    const sunglasses = document.getElementById('sunglasses');
    const profileContainer = document.querySelector('.profile-image-container');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!sunglasses || !profileContainer) return;
    
    let isDragging = false;
    let isWorn = false;
    let startX, startY;
    let offsetX = 0, offsetY = 0;
    
    // Get face/eye position (relative to profile container)
    const getEyePosition = () => {
        const rect = profileContainer.getBoundingClientRect();
        return {
            x: rect.width / 2,
            y: rect.height * 0.42, // Eye position at ~42% from top
            rect: rect
        };
    };
    
    // Check if sunglasses are near the face
    const isNearFace = (x, y) => {
        const eyePos = getEyePosition();
        const distance = Math.sqrt(
            Math.pow(x - eyePos.x, 2) + 
            Math.pow(y - eyePos.y, 2)
        );
        return distance < 80; // Snap zone radius
    };
    
    // Start dragging
    const startDrag = (e) => {
        if (isWorn && e.target === sunglasses) {
            // If worn, single click removes it
            return;
        }
        
        isDragging = true;
        sunglasses.classList.add('dragging');
        
        const touch = e.touches ? e.touches[0] : e;
        const rect = sunglasses.getBoundingClientRect();
        const containerRect = profileContainer.getBoundingClientRect();
        
        startX = touch.clientX - rect.left;
        startY = touch.clientY - rect.top;
        
        e.preventDefault();
    };
    
    // During drag
    const onDrag = (e) => {
        if (!isDragging) return;
        
        const touch = e.touches ? e.touches[0] : e;
        const containerRect = profileContainer.getBoundingClientRect();
        
        // Calculate position relative to container
        offsetX = touch.clientX - containerRect.left - startX;
        offsetY = touch.clientY - containerRect.top - startY;
        
        sunglasses.style.left = offsetX + 'px';
        sunglasses.style.top = offsetY + 'px';
        sunglasses.style.right = 'auto';
        
        // Check if near face for snap hint
        if (isNearFace(offsetX, offsetY)) {
            profileContainer.classList.add('snap-ready');
        } else {
            profileContainer.classList.remove('snap-ready');
        }
        
        e.preventDefault();
    };
    
    // End drag
    const endDrag = (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        sunglasses.classList.remove('dragging');
        profileContainer.classList.remove('snap-ready');
        
        // Check if should snap to face
        if (isNearFace(offsetX, offsetY)) {
            // Snap to face and activate dark mode
            sunglasses.classList.add('worn');
            isWorn = true;
            
            // Smooth transition to dark mode
            setTimeout(() => {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }, 200);
            
        } else {
            // Return to original position if not near face
            sunglasses.style.left = '';
            sunglasses.style.top = '';
            sunglasses.style.right = '-80px';
        }
    };
    
    // Click on worn sunglasses to remove
    const toggleSunglasses = (e) => {
        if (!isWorn) return;
        
        // Remove sunglasses
        sunglasses.classList.remove('worn');
        isWorn = false;
        
        // Return to original position
        sunglasses.style.left = '';
        sunglasses.style.top = '';
        sunglasses.style.right = '-80px';
        
        // Switch back to light mode
        setTimeout(() => {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }, 200);
    };
    
    // Mouse events
    sunglasses.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    
    // Touch events (mobile)
    sunglasses.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('touchend', endDrag);
    
    // Click to remove when worn
    sunglasses.addEventListener('click', toggleSunglasses);
    
    // Sync with existing theme toggle button
    if (themeToggle) {
        const originalToggle = themeToggle.onclick;
        themeToggle.onclick = (e) => {
            // If sunglasses are worn, remove them when toggling
            if (isWorn) {
                sunglasses.classList.remove('worn');
                isWorn = false;
                sunglasses.style.left = '';
                sunglasses.style.top = '';
                sunglasses.style.right = '-80px';
            }
            
            // Call original toggle
            body.classList.toggle('dark-mode');
            const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            
            // Add animation effect
            themeToggle.style.transform = 'scale(0.9) rotate(180deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        };
    }
});
