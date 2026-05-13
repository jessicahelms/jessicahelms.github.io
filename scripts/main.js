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
});

// Hero canvas background animation - Neural network + DNA helix
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
    const neuronCount = 80;

    class Neuron {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 3 + 2;
            this.opacity = Math.random() * 0.6 + 0.3;
            this.originalOpacity = this.opacity;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Pulse effect
            this.opacity = this.originalOpacity + Math.sin(time * 0.01 + this.x) * 0.2;
        }

        draw() {
            ctx.fillStyle = `rgba(23, 162, 184, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

            // Glow effect
            ctx.strokeStyle = `rgba(23, 162, 184, ${this.opacity * 0.3})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius + 3, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    // Initialize neurons
    for (let i = 0; i < neuronCount; i++) {
        neurons.push(new Neuron());
    }

    // Draw neural connections
    const drawNeuralConnections = () => {
        for (let i = 0; i < neurons.length; i++) {
            for (let j = i + 1; j < neurons.length; j++) {
                const dx = neurons[i].x - neurons[j].x;
                const dy = neurons[i].y - neurons[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const opacity = (1 - distance / 200) * 0.15;
                    ctx.strokeStyle = `rgba(23, 162, 184, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(neurons[i].x, neurons[i].y);
                    ctx.lineTo(neurons[j].x, neurons[j].y);
                    ctx.stroke();
                }
            }
        }
    };

    // Draw DNA helix
    const drawDNAHelix = () => {
        const helixX = canvas.width * 0.85;
        const helixStart = -100 + time * 2;
        const helixEnd = canvas.height + 200;
        const radius = 30;

        ctx.strokeStyle = 'rgba(231, 76, 60, 0.4)';
        ctx.lineWidth = 2;

        for (let y = helixStart; y < helixEnd; y += 5) {
            const x1 = helixX + Math.sin((y + time) * 0.05) * radius;
            const x2 = helixX + Math.cos((y + time) * 0.05) * radius;

            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(helixX, y);
            ctx.stroke();

            ctx.strokeStyle = `rgba(231, 76, 60, ${0.4 + Math.sin((y + time) * 0.05) * 0.2})`;
        }

        // DNA base pairs
        for (let y = helixStart; y < helixEnd; y += 20) {
            const x1 = helixX + Math.sin((y + time) * 0.05) * radius;
            const x2 = helixX + Math.cos((y + time) * 0.05) * radius;

            ctx.strokeStyle = 'rgba(231, 76, 60, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            ctx.stroke();
        }
    };

    // Draw data visualization points
    const drawDataPoints = () => {
        for (let i = 0; i < 15; i++) {
            const x = (canvas.width * 0.2 + Math.sin(time * 0.003 + i) * 60) + i * 40;
            const y = (canvas.height * 0.3 + Math.cos(time * 0.003 + i * 1.5) * 80);
            const size = Math.sin(time * 0.005 + i) * 3 + 5;

            ctx.fillStyle = `rgba(26, 58, 82, ${0.3 + Math.sin(time * 0.004 + i) * 0.2})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Connect to neighbors
            if (i < 14) {
                const nextX = (canvas.width * 0.2 + Math.sin(time * 0.003 + i + 1) * 60) + (i + 1) * 40;
                const nextY = (canvas.height * 0.3 + Math.cos(time * 0.003 + (i + 1) * 1.5) * 80);

                ctx.strokeStyle = `rgba(26, 58, 82, 0.1)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(nextX, nextY);
                ctx.stroke();
            }
        }
    };

    const animate = () => {
        // Dark background with slight fade
        ctx.fillStyle = 'rgba(15, 30, 46, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        time++;

        drawDataPoints();
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
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 58, 82, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 58, 82, 0.95)';
    }
});
