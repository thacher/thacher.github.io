// Space AI Command Station - Interactive Space Objects

// Space AI typing animation
var typed = new Typed(".typing", {
    strings: [
        "AI Engineer", 
        "Space AI Commander", 
        "Neural Network Pilot", 
        "Deep Learning Navigator", 
        "Computer Vision Explorer", 
        "NLP Space Specialist",
        "MLOps Mission Control",
        "AI Systems Architect",
        "Algorithm Space Engineer",
        "Data Science Commander",
        "AI Product Launch Director",
        "Technical Space Founder",
        "Machine Learning Astronaut",
        "AI Mission Specialist"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    cursorChar: ' █',
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '█'
});

// Space Objects Interaction System
class SpaceObjectsSystem {
    constructor() {
        this.objects = document.querySelectorAll('.space-object');
        this.init();
    }

    init() {
        this.setupObjectInteractions();
        this.createSpaceEffects();
        this.setupAchievementSystem();
    }

    setupObjectInteractions() {
        this.objects.forEach((object, index) => {
            // Add staggered animation delay
            object.style.animationDelay = `${index * 0.2}s`;
            
            // Hover effects
            object.addEventListener('mouseenter', () => {
                this.createHoverEffect(object);
                this.playSpaceSound();
            });

            // Click effects
            object.addEventListener('click', (e) => {
                const link = object.getAttribute('data-link');
                if (link) {
                    this.createClickEffect(object);
                    this.showAchievement('Space Object Activated!');
                    setTimeout(() => {
                        window.open(link, '_blank', 'noopener,noreferrer');
                    }, 300);
                }
            });

            // Mouse leave
            object.addEventListener('mouseleave', () => {
                this.removeHoverEffect(object);
            });
        });
    }

    createSpaceEffects() {
        // Create floating space debris
        this.createSpaceDebris();
        
        // Create energy pulses
        this.createEnergyPulses();
        
        // Create shield effects
        this.createShieldEffects();
    }

    createSpaceDebris() {
        const debrisContainer = document.createElement('div');
        debrisContainer.className = 'space-debris';
        debrisContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        document.body.appendChild(debrisContainer);

        for (let i = 0; i < 15; i++) {
            const debris = document.createElement('div');
            debris.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: #00ffff;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: debrisFloat ${Math.random() * 10 + 10}s linear infinite;
                opacity: ${Math.random() * 0.5 + 0.3};
            `;
            debrisContainer.appendChild(debris);
        }

        // Add debris animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes debrisFloat {
                0% { transform: translateY(100vh) translateX(0px) rotate(0deg); }
                100% { transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    createEnergyPulses() {
        setInterval(() => {
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                width: 4px;
                height: 4px;
                background: #00ffff;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1000;
                animation: energyPulse 2s ease-out forwards;
            `;
            document.body.appendChild(pulse);

            setTimeout(() => {
                if (pulse.parentNode) {
                    pulse.parentNode.removeChild(pulse);
                }
            }, 2000);
        }, 3000);

        // Add energy pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes energyPulse {
                0% { width: 4px; height: 4px; opacity: 1; }
                100% { width: 200px; height: 200px; opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    createShieldEffects() {
        const shieldBar = document.querySelector('.shield-fill');
        if (shieldBar) {
            setInterval(() => {
                const currentShield = Math.random() * 20 + 80; // 80-100%
                shieldBar.style.width = currentShield + '%';
                
                // Color change based on shield level
                if (currentShield < 30) {
                    shieldBar.style.background = 'linear-gradient(90deg, #ff0000, #ff0000)';
                } else if (currentShield < 60) {
                    shieldBar.style.background = 'linear-gradient(90deg, #ff0000, #ffff00)';
                } else {
                    shieldBar.style.background = 'linear-gradient(90deg, #00ff00, #ffff00, #00ff00)';
                }
            }, 5000);
        }
    }

    createHoverEffect(object) {
        object.style.transform = 'translateY(-15px) scale(1.1)';
        object.style.boxShadow = '0 0 40px rgba(0, 255, 255, 0.8)';
        
        // Create energy rings
        const ring = document.createElement('div');
        ring.className = 'energy-ring';
        ring.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            border: 2px solid #00ffff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: energyRing 0.5s ease-out forwards;
            pointer-events: none;
        `;
        object.appendChild(ring);

        setTimeout(() => {
            if (ring.parentNode) {
                ring.parentNode.removeChild(ring);
            }
        }, 500);
    }

    removeHoverEffect(object) {
        object.style.transform = '';
        object.style.boxShadow = '';
    }

    createClickEffect(object) {
        const explosion = document.createElement('div');
        explosion.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #00ffff, transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: spaceExplosion 0.6s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        object.appendChild(explosion);

        setTimeout(() => {
            if (explosion.parentNode) {
                explosion.parentNode.removeChild(explosion);
            }
        }, 600);
    }

    playSpaceSound() {
        // Create audio context for space sound effects
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    setupAchievementSystem() {
        // Show achievement on page load
        setTimeout(() => {
            this.showAchievement('Space Station Online!');
        }, 2000);

        // Random achievements
        const achievements = [
            'Space Object Discovered!',
            'AI System Activated!',
            'Mission Control Ready!',
            'Space Debris Cleared!',
            'Energy Pulse Detected!'
        ];

        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 10 seconds
                const achievement = achievements[Math.floor(Math.random() * achievements.length)];
                this.showAchievement(achievement);
            }
        }, 10000);
    }

    showAchievement(text) {
        // Create achievement notification
        const achievement = document.createElement('div');
        achievement.className = 'space-achievement';
        achievement.innerHTML = `
            <div class="achievement-content">
                <i class="fas fa-star"></i>
                <span>${text}</span>
            </div>
        `;
        
        // Style the achievement
        achievement.style.cssText = `
            position: fixed;
            top: 20px;
            right: -300px;
            background: linear-gradient(45deg, #ffcc00, #ffff00);
            color: #000;
            padding: 15px 25px;
            border-radius: 25px;
            font-family: 'Press Start 2P', monospace;
            font-size: 12px;
            z-index: 10000;
            box-shadow: 0 0 20px rgba(255, 204, 0, 0.5);
            transition: right 0.5s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
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
    // Initialize space objects system
    new SpaceObjectsSystem();
    
    // Add loading screen effect
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'space-loading-screen';
    loadingScreen.innerHTML = '<div class="loading-text">INITIALIZING SPACE STATION...</div>';
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeOut 1s ease-out 2s forwards;
    `;
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after 3 seconds
    setTimeout(() => {
        if (loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
        }
    }, 3000);
    
    // Add space effects to main container
    const spaceStation = document.querySelector('.space-station');
    if (spaceStation) {
        spaceStation.classList.add('space-effects');
    }
});

// Add keyboard shortcuts for space feel
document.addEventListener('keydown', (e) => {
    // Space bar for random space object activation
    if (e.code === 'Space') {
        e.preventDefault();
        const objects = document.querySelectorAll('.space-object');
        const randomObject = objects[Math.floor(Math.random() * objects.length)];
        randomObject.click();
    }
    
    // Enter for achievement
    if (e.code === 'Enter') {
        e.preventDefault();
        const spaceSystem = new SpaceObjectsSystem();
        spaceSystem.showAchievement('Space Commander!');
    }
});

// Add space explosion animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spaceExplosion {
        0% { width: 10px; height: 10px; opacity: 1; }
        100% { width: 100px; height: 100px; opacity: 0; }
    }
    
    @keyframes energyRing {
        0% { width: 20px; height: 20px; opacity: 1; }
        100% { width: 100px; height: 100px; opacity: 0; }
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; visibility: hidden; }
    }
`;
document.head.appendChild(style);