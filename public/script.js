// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Music Player Functionality
class MusicPlayer {
    constructor() {
        this.currentTrack = 0;
        this.isPlaying = false;
        this.audio = null;
        this.tracks = [
            {
                title: "Lonely Black Hearts",
                artist: "Stars and the Underground",
                duration: "4:15",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder
            },
            {
                title: "Nosferatu Upon Tyne",
                artist: "Stars and the Underground",
                duration: "4:32",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder
            },
            {
                title: "Guardians of the Night",
                artist: "Stars and the Underground",
                duration: "4:28",
                src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder
            }
        ];
        this.init();
    }

    init() {
        this.createPlayer();
        this.bindEvents();
    }

    createPlayer() {
        // Create floating music player
        const playerHTML = `
            <div class="music-player" id="musicPlayer">
                <div class="player-content">
                    <div class="track-info">
                        <h4 class="track-title">${this.tracks[this.currentTrack].title}</h4>
                        <p class="track-artist">${this.tracks[this.currentTrack].artist}</p>
                    </div>
                    <div class="player-controls">
                        <button class="control-btn" id="prevBtn">
                            <i class="fas fa-step-backward"></i>
                        </button>
                        <button class="control-btn play-btn" id="playBtn">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="control-btn" id="nextBtn">
                            <i class="fas fa-step-forward"></i>
                        </button>
                    </div>
                    <div class="player-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                        <div class="time-info">
                            <span class="current-time" id="currentTime">0:00</span>
                            <span class="total-time" id="totalTime">${this.tracks[this.currentTrack].duration}</span>
                        </div>
                    </div>
                </div>
                <button class="player-toggle" id="playerToggle">
                    <i class="fas fa-music"></i>
                </button>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', playerHTML);
        this.addPlayerStyles();
    }

    addPlayerStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .music-player {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(10, 10, 10, 0.95);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 107, 107, 0.3);
                border-radius: 15px;
                padding: 1rem;
                min-width: 300px;
                z-index: 1000;
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.3s ease;
            }

            .music-player.show {
                transform: translateY(0);
                opacity: 1;
            }

            .player-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .track-info {
                flex: 1;
                min-width: 0;
            }

            .track-title {
                font-size: 0.9rem;
                color: #fff;
                margin: 0 0 0.25rem 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .track-artist {
                font-size: 0.8rem;
                color: #b0b0b0;
                margin: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .player-controls {
                display: flex;
                gap: 0.5rem;
                align-items: center;
            }

            .control-btn {
                background: transparent;
                border: 1px solid rgba(255, 107, 107, 0.3);
                color: #fff;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .control-btn:hover {
                background: #ff6b6b;
                border-color: #ff6b6b;
            }

            .play-btn {
                width: 40px;
                height: 40px;
                background: #ff6b6b;
                border-color: #ff6b6b;
            }

            .player-progress {
                position: absolute;
                bottom: -5px;
                left: 0;
                right: 0;
                padding: 0 1rem;
            }

            .progress-bar {
                width: 100%;
                height: 3px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                overflow: hidden;
                margin-bottom: 0.5rem;
            }

            .progress-fill {
                height: 100%;
                background: #ff6b6b;
                width: 0%;
                transition: width 0.1s ease;
            }

            .time-info {
                display: flex;
                justify-content: space-between;
                font-size: 0.7rem;
                color: #b0b0b0;
            }

            .player-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                border: none;
                border-radius: 50%;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 1001;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            }

            .player-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
            }

            .player-toggle.hidden {
                opacity: 0;
                pointer-events: none;
            }

            @media (max-width: 768px) {
                .music-player {
                    bottom: 80px;
                    right: 10px;
                    left: 10px;
                    min-width: auto;
                }
            }
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        const playBtn = document.getElementById('playBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const playerToggle = document.getElementById('playerToggle');
        const musicPlayer = document.getElementById('musicPlayer');

        playBtn.addEventListener('click', () => this.togglePlay());
        prevBtn.addEventListener('click', () => this.previousTrack());
        nextBtn.addEventListener('click', () => this.nextTrack());
        playerToggle.addEventListener('click', () => this.togglePlayer());

        // Add play button events to album cards
        document.querySelectorAll('.play-button').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.currentTrack = index;
                this.updatePlayer();
                this.togglePlayer();
                this.togglePlay();
            });
        });
    }

    togglePlay() {
        const playBtn = document.getElementById('playBtn');
        const icon = playBtn.querySelector('i');

        if (this.isPlaying) {
            this.pause();
            icon.className = 'fas fa-play';
        } else {
            this.play();
            icon.className = 'fas fa-pause';
        }
    }

    play() {
        // In a real implementation, you would load actual audio files
        this.isPlaying = true;
        this.startProgress();
        showNotification('Now playing: ' + this.tracks[this.currentTrack].title, 'success');
    }

    pause() {
        this.isPlaying = false;
        this.stopProgress();
        showNotification('Paused', 'info');
    }

    previousTrack() {
        this.currentTrack = (this.currentTrack - 1 + this.tracks.length) % this.tracks.length;
        this.updatePlayer();
        if (this.isPlaying) {
            this.play();
        }
    }

    nextTrack() {
        this.currentTrack = (this.currentTrack + 1) % this.tracks.length;
        this.updatePlayer();
        if (this.isPlaying) {
            this.play();
        }
    }

    updatePlayer() {
        const trackTitle = document.querySelector('.track-title');
        const trackArtist = document.querySelector('.track-artist');
        const totalTime = document.getElementById('totalTime');

        trackTitle.textContent = this.tracks[this.currentTrack].title;
        trackArtist.textContent = this.tracks[this.currentTrack].artist;
        totalTime.textContent = this.tracks[this.currentTrack].duration;
    }

    togglePlayer() {
        const musicPlayer = document.getElementById('musicPlayer');
        const playerToggle = document.getElementById('playerToggle');

        musicPlayer.classList.toggle('show');
        playerToggle.classList.toggle('hidden');
    }

    startProgress() {
        this.progressInterval = setInterval(() => {
            const progressFill = document.getElementById('progressFill');
            const currentTime = document.getElementById('currentTime');
            
            // Simulate progress (in real implementation, use actual audio duration)
            const progress = Math.random() * 100;
            progressFill.style.width = progress + '%';
            
            // Simulate time (in real implementation, use actual current time)
            const minutes = Math.floor(Math.random() * 4);
            const seconds = Math.floor(Math.random() * 60);
            currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopProgress() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }
    }
}

// Initialize music player
let musicPlayer;
document.addEventListener('DOMContentLoaded', () => {
    musicPlayer = new MusicPlayer();
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
    const animateElements = document.querySelectorAll('.album-card, .show-card, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: 'Inter', sans-serif;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add hover effects to album cards
document.addEventListener('DOMContentLoaded', () => {
    const albumCards = document.querySelectorAll('.album-card');
    
    albumCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click effects to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
