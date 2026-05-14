// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections for fade-in animation
    document.querySelectorAll('section > .container, .project-card, .skill-item, .timeline-item, .presentation-card').forEach(el => {
        observer.observe(el);
    });

    // Initialize hero canvas animation
    initHeroCanvas();

    // Smooth scroll for nav links
    initSmoothScroll();

    // Initialize skill bars animation
    initSkillBars();

    // Restart handwritten signature animation on load
    initSignatureVideo();

    // Initialize side DNA jump navigation
    initJumpNav();

    // Timeline detail modal
    initTimelineZoom();
});

function initSignatureVideo() {
    const signatureVideo = document.querySelector('.signature-video');
    if (!signatureVideo) return;

    signatureVideo.currentTime = 0;
    const playPromise = signatureVideo.play();
    if (playPromise) {
        playPromise.catch(() => {
            signatureVideo.controls = false;
        });
    }
}

function initJumpNav() {
    const jumpNav = document.querySelector('.jump-nav');
    const toggle = document.querySelector('.jump-toggle');
    const jumpLinks = document.querySelectorAll('.jump-link');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = Array.from(jumpLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!jumpNav || !toggle || !jumpLinks.length || !sections.length) return;

    toggle.addEventListener('click', () => {
        const isCollapsed = jumpNav.classList.toggle('is-collapsed');
        toggle.setAttribute('aria-expanded', String(!isCollapsed));
        toggle.setAttribute('aria-label', isCollapsed ? 'Expand jump navigation' : 'Collapse jump navigation');
    });

    const setActiveLink = (sectionId) => {
        jumpLinks.forEach(link => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${sectionId}`);
        });
        navLinks.forEach(link => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${sectionId}`);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
            setActiveLink(visible.target.id);
        }
    }, {
        root: null,
        threshold: [0.3, 0.55, 0.8]
    });

    sections.forEach(section => observer.observe(section));
    setActiveLink(sections[0].id);
}

function initTimelineZoom() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (!timelineItems.length) return;

    const modal = document.createElement('div');
    modal.id = 'timelineModal';
    modal.className = 'timeline-modal';
    modal.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true" aria-label="Timeline detail">
            <button class="modal-close" type="button" aria-label="Close timeline detail">&times;</button>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalBody = modal.querySelector('.modal-body');
    const closeButton = modal.querySelector('.modal-close');

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    timelineItems.forEach(item => {
        const zoomButton = item.querySelector('.timeline-zoom');
        if (!zoomButton) return;

        zoomButton.addEventListener('click', () => {
            const clone = item.cloneNode(true);
            const clonedButton = clone.querySelector('.timeline-zoom');
            if (clonedButton) clonedButton.remove();
            modalBody.innerHTML = '';
            modalBody.appendChild(clone);
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
}

// Hero canvas background animation - Neural network + DNA helix + datasets
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId;
    let time = 0;

    // Neural network particles
    const neurons = [];
    const neuronCount = 120;

    class Neuron {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 1.2;
            this.vy = (Math.random() - 0.5) * 1.2;
            this.radius = Math.random() * 4 + 1.5;
            this.opacity = Math.random() * 0.7 + 0.2;
            this.originalOpacity = this.opacity;
            this.pulseSpeed = Math.random() * 0.02 + 0.005;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Advanced pulse effect
            this.opacity = this.originalOpacity + Math.sin(time * this.pulseSpeed + this.x * 0.001) * 0.3;
        }

        draw() {
            ctx.fillStyle = `rgba(183, 110, 121, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

            // Glow effect
            ctx.strokeStyle = `rgba(183, 110, 121, ${this.opacity * 0.34})`;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius + 4, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    // Initialize neurons
    for (let i = 0; i < neuronCount; i++) {
        neurons.push(new Neuron());
    }

    // Draw neural connections with variable opacity
    const drawNeuralConnections = () => {
        const connectionDistance = 250;
        for (let i = 0; i < neurons.length; i++) {
            for (let j = i + 1; j < neurons.length; j++) {
                const dx = neurons[i].x - neurons[j].x;
                const dy = neurons[i].y - neurons[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.25;
                    ctx.strokeStyle = `rgba(183, 110, 121, ${opacity})`;
                    ctx.lineWidth = 1 + (1 - distance / connectionDistance) * 1.5;
                    ctx.beginPath();
                    ctx.moveTo(neurons[i].x, neurons[i].y);
                    ctx.lineTo(neurons[j].x, neurons[j].y);
                    ctx.stroke();
                }
            }
        }
    };

    // Draw DNA helix - enhanced with more detail
    const drawDNAHelix = () => {
        const helixX = canvas.width * 0.85;
        const helixStart = -100 + time * 2.5;
        const helixEnd = canvas.height + 200;
        const radius = 40;

        // Main helix strands
        for (let y = helixStart; y < helixEnd; y += 4) {
            const x1 = helixX + Math.sin((y + time * 0.03) * 0.05) * radius;
            const x2 = helixX - Math.sin((y + time * 0.03) * 0.05) * radius;

            ctx.strokeStyle = `rgba(183, 110, 121, ${0.45 + Math.sin((y + time * 0.03) * 0.05) * 0.22})`;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(helixX, y);
            ctx.stroke();

            ctx.strokeStyle = `rgba(216, 166, 63, ${0.38 - Math.sin((y + time * 0.03) * 0.05) * 0.18})`;
            ctx.beginPath();
            ctx.moveTo(x2, y);
            ctx.lineTo(helixX, y);
            ctx.stroke();
        }

        // DNA base pairs connections
        for (let y = helixStart; y < helixEnd; y += 15) {
            const x1 = helixX + Math.sin((y + time * 0.03) * 0.05) * radius;
            const x2 = helixX - Math.sin((y + time * 0.03) * 0.05) * radius;

            ctx.strokeStyle = `rgba(42, 34, 36, 0.35)`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            ctx.stroke();
        }
    };

    // Draw multiple dataset streams
    const drawDataPoints = () => {
        // Multiple data streams at different heights
        for (let stream = 0; stream < 3; stream++) {
            const streamY = canvas.height * (0.2 + stream * 0.25);
            const pointsPerStream = 20;

            for (let i = 0; i < pointsPerStream; i++) {
                const x = (canvas.width * 0.1 + Math.sin(time * 0.003 + i + stream) * 80) + i * 35;
                const y = streamY + Math.cos(time * 0.004 + i * 1.2 + stream) * 60;
                const size = Math.sin(time * 0.005 + i + stream) * 3 + 4;
                const color = stream === 0 ? [183, 110, 121] : stream === 1 ? [216, 166, 63] : [42, 34, 36];

                ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.4 + Math.sin(time * 0.005 + i) * 0.3})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();

                // Data point glow
                ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(x, y, size + 2, 0, Math.PI * 2);
                ctx.stroke();

                // Connect to neighbors
                if (i < pointsPerStream - 1) {
                    const nextX = (canvas.width * 0.1 + Math.sin(time * 0.003 + i + 1 + stream) * 80) + (i + 1) * 35;
                    const nextY = streamY + Math.cos(time * 0.004 + (i + 1) * 1.2 + stream) * 60;

                    ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.15)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(nextX, nextY);
                    ctx.stroke();
                }
            }
        }
    };

    // Draw floating info particles
    const drawFloatingText = () => {
        const labels = ['DATA', 'GENOME', 'BIOTECH', 'NEURAL', 'OMICS'];
        const fontSize = 12;
        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = 'center';

        labels.forEach((label, idx) => {
            const x = canvas.width * (0.15 + idx * 0.15);
            const y = canvas.height * (0.15 + Math.sin(time * 0.002 + idx) * 0.1);
            const opacity = 0.2 + Math.sin(time * 0.004 + idx) * 0.15;

            ctx.fillStyle = `rgba(183, 110, 121, ${opacity})`;
            ctx.fillText(label, x, y);
        });
    };

    const animate = () => {
        // Soft background persistence
        ctx.fillStyle = 'rgba(255, 250, 243, 0.12)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        time++;

        drawDataPoints();
        drawFloatingText();
        drawDNAHelix();

        neurons.forEach(neuron => {
            neuron.update();
            neuron.draw();
        });

        drawNeuralConnections();
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate skill bars on scroll
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentWidth = entry.target.style.width;
                entry.target.style.width = '0%';
                entry.target.style.transition = 'width 1.5s ease-out';

                setTimeout(() => {
                    entry.target.style.width = currentWidth;
                }, 100);

                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.site-nav');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 250, 243, 0.96)';
    } else {
        navbar.style.background = 'rgba(255, 250, 243, 0.9)';
    }
});
