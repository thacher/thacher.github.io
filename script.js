// Enhanced Gaming JavaScript with Interactive Effects

// Typing animation with gaming-themed strings
var typed = new Typed(".typing", {
    strings: [
        "AI Engineer", 
        "Digital Creator", 
        "Tech Innovator", 
        "Code Wizard", 
        "Problem Solver", 
        "Future Builder",
        "Human",
        "Father",
        "Founder",
        "Nerd"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    cursorChar: ' █',
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '█'
});

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.container = document.querySelector('.particles');
        this.init();
    }

    init() {
        // Create initial particles
        for (let i = 0; i < 20; i++) {
            this.createParticle();
        }
        
        // Add new particles periodically
        setInterval(() => {
            if (this.particles.length < 30) {
                this.createParticle();
            }
        }, 2000);
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and properties
        const startX = Math.random() * window.innerWidth;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 5 + 5;
        
        particle.style.left = startX + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = duration + 's';
        
        // Random color
        const colors = ['#00ff88', '#0080ff', '#ff0080', '#ffff00'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        this.container.appendChild(particle);
        this.particles.push(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                this.particles = this.particles.filter(p => p !== particle);
            }
        }, duration * 1000);
    }
}

// Gaming UI Interactions
class GamingUI {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonInteractions();
        this.setupHealthBarAnimation();
        this.setupAchievementSystem();
    }

    setupButtonInteractions() {
        const buttons = document.querySelectorAll('.action-button');
        
        buttons.forEach(button => {
            // Hover effects
            button.addEventListener('mouseenter', () => {
                this.addGlowEffect(button);
            });

            // Click effects
            button.addEventListener('click', (e) => {
                this.createClickEffect(e.target);
                this.showAchievement('Link Accessed!');
            });

            // Mouse leave
            button.addEventListener('mouseleave', () => {
                this.removeGlowEffect(button);
            });
        });
    }

    setupHealthBarAnimation() {
        const healthBar = document.querySelector('.health-fill');
        const healthText = document.querySelector('.health-text');
        
        // Simulate health changes
        setInterval(() => {
            const currentHealth = Math.random() * 20 + 80; // 80-100%
            healthBar.style.width = currentHealth + '%';
            healthText.textContent = `HP: ${Math.round(currentHealth)}%`;
            
            // Color change based on health
            if (currentHealth < 30) {
                healthBar.style.background = 'linear-gradient(90deg, #ff0000, #ff0000)';
            } else if (currentHealth < 60) {
                healthBar.style.background = 'linear-gradient(90deg, #ff0000, #ffff00)';
            } else {
                healthBar.style.background = 'linear-gradient(90deg, #ff0000, #ffff00, #00ff00)';
            }
        }, 5000);
    }

    setupAchievementSystem() {
        // Show achievement on page load
        setTimeout(() => {
            this.showAchievement('Profile Loaded!');
        }, 2000);

        // Random achievements
        const achievements = [
            'Code Master!',
            'Digital Explorer!',
            'Tech Wizard!',
            'Innovation Leader!',
            'Future Builder!'
        ];

        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 10 seconds
                const achievement = achievements[Math.floor(Math.random() * achievements.length)];
                this.showAchievement(achievement);
            }
        }, 10000);
    }

    createClickEffect(element) {
        const clickEffect = document.createElement('div');
        clickEffect.style.position = 'absolute';
        clickEffect.style.top = '50%';
        clickEffect.style.left = '50%';
        clickEffect.style.transform = 'translate(-50%, -50%)';
        clickEffect.style.width = '20px';
        clickEffect.style.height = '20px';
        clickEffect.style.border = '2px solid #00ff88';
        clickEffect.style.borderRadius = '50%';
        clickEffect.style.pointerEvents = 'none';
        clickEffect.style.zIndex = '1000';
        clickEffect.style.animation = 'soundWave 0.5s ease-out';
        
        element.style.position = 'relative';
        element.appendChild(clickEffect);
        
        setTimeout(() => {
            if (clickEffect.parentNode) {
                clickEffect.parentNode.removeChild(clickEffect);
            }
        }, 500);
    }

    addGlowEffect(element) {
        element.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.8)';
        element.style.transform = 'scale(1.02)';
    }

    removeGlowEffect(element) {
        element.style.boxShadow = '';
        element.style.transform = '';
    }

    showAchievement(text) {
        // Create achievement notification
        const achievement = document.createElement('div');
        achievement.className = 'achievement-notification';
        achievement.innerHTML = `
            <div class="achievement-content">
                <i class="fas fa-trophy"></i>
                <span>${text}</span>
            </div>
        `;
        
        // Style the achievement
        achievement.style.position = 'fixed';
        achievement.style.top = '20px';
        achievement.style.right = '-300px';
        achievement.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e)';
        achievement.style.color = '#000';
        achievement.style.padding = '15px 25px';
        achievement.style.borderRadius = '25px';
        achievement.style.fontFamily = "'Press Start 2P', monospace";
        achievement.style.fontSize = '12px';
        achievement.style.zIndex = '10000';
        achievement.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
        achievement.style.transition = 'right 0.5s ease';
        achievement.style.display = 'flex';
        achievement.style.alignItems = 'center';
        achievement.style.gap = '10px';
        
        document.body.appendChild(achievement);
        
        // Animate in
        setTimeout(() => {
            achievement.style.right = '20px';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            achievement.style.right = '-300px';
            setTimeout(() => {
                if (achievement.parentNode) {
                    achievement.parentNode.removeChild(achievement);
                }
            }, 500);
        }, 3000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem();
    
    // Initialize gaming UI
    new GamingUI();
    
    // Add loading screen effect
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loading-text">LOADING...</div>';
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after 3 seconds
    setTimeout(() => {
        if (loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
        }
    }, 3000);
    
    // Add CRT effect to main container
    const gameContainer = document.querySelector('.game-container');
    if (gameContainer) {
        gameContainer.classList.add('crt-effect');
    }
});

// Add keyboard shortcuts for gaming feel
document.addEventListener('keydown', (e) => {
    // Space bar for random effect
    if (e.code === 'Space') {
        e.preventDefault();
        const buttons = document.querySelectorAll('.action-button');
        const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
        randomButton.click();
    }
    
    // Enter for achievement
    if (e.code === 'Enter') {
        e.preventDefault();
        const gamingUI = new GamingUI();
        gamingUI.showAchievement('Keyboard Master!');
    }
});
