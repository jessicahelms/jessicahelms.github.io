// Interactive elements and hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Platform card hover effects
    initPlatformCardHovers();

    // Technique badge animations
    initTechniqueBadgeAnimations();

    // Project showcase hover effects
    initProjectShowcaseHovers();

    // Add scroll reveal to all major sections
    initScrollReveal();

    // Timeline stagger animation
    initTimelineStagger();
});

// Platform card hover effect
function initPlatformCardHovers() {
    const platformCards = document.querySelectorAll('.platform-card');

    platformCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            platformCards.forEach((c, i) => {
                if (i !== index) {
                    c.style.opacity = '0.6';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            platformCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });
}

// Technique badge click animations
function initTechniqueBadgeAnimations() {
    const badges = document.querySelectorAll('.technique-badge');

    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
        badge.classList.add('badge-animate');

        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });

        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Add CSS animation for badges
const style = document.createElement('style');
style.textContent = `
    @keyframes badgeSlideIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .badge-animate {
        animation: badgeSlideIn 0.5s ease-out forwards;
    }

    .technique-badge {
        transition: all 0.3s ease;
    }

    .platform-chip {
        transition: all 0.3s ease;
    }

    .project-showcase {
        transition: all 0.3s ease;
    }

    .tool-card {
        transition: all 0.3s ease;
    }

    .tool-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .skill-item {
        transition: all 0.3s ease;
    }

    .skill-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(style);

// Project showcase hover effects
function initProjectShowcaseHovers() {
    const showcases = document.querySelectorAll('.project-showcase');

    showcases.forEach(showcase => {
        const icon = showcase.querySelector('.project-icon');

        showcase.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });

        showcase.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Scroll reveal animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.project-card, .timeline-item, .presentation-card, .tool-card');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
                entry.target.style.animationDelay = `${index * 0.1}s`;
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        revealObserver.observe(el);
    });
}

// Timeline stagger animation
function initTimelineStagger() {
    const timelineItems = document.querySelectorAll('.timeline-item, .edu-item');

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animationDelay = `${index * 0.15}s`;
        timelineObserver.observe(item);
    });
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'rgba(255, 255, 255, 0.8)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#17a2b8';
            link.style.fontWeight = '600';
        }
    });
});

// Add tooltips to skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const skillLabel = this.querySelector('.skill-label').textContent;
        // Tooltip already shows on hover via CSS
        this.style.boxShadow = '0 8px 24px rgba(23, 162, 184, 0.2)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Parallax effect on hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
        }
    });
}

// Counter animation for stats (if added in future)
function animateCounter(element, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Fade in elements on load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// Contact link interactions
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        const icon = this.querySelector('.contact-icon');
        icon.style.transform = 'scale(1.2)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        const icon = this.querySelector('.contact-icon');
        icon.style.transform = 'scale(1)';
    });
});

// Smooth scroll on page load if hash exists
window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
