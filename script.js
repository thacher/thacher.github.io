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

// 8-Bit Gaming Sound System
class GamingSoundSystem {
    constructor() {
        this.audioContext = null;
        this.isMusicPlaying = false;
        this.musicLoopTimeout = null;
        this.activeTimeouts = [];
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    // 8-bit space sound effects
    playSpaceHover() {
        this.playTone(800, 0.1, 'square', 0.1);
    }

    playSpaceClick() {
        this.playTone(600, 0.15, 'square', 0.15);
        setTimeout(() => this.playTone(400, 0.1, 'square', 0.1), 50);
    }

    playAchievement() {
        // Ascending 8-bit achievement sound
        this.playTone(400, 0.1, 'square', 0.1);
        setTimeout(() => this.playTone(600, 0.1, 'square', 0.1), 100);
        setTimeout(() => this.playTone(800, 0.2, 'square', 0.1), 200);
    }

    playShieldHit() {
        this.playTone(200, 0.2, 'sawtooth', 0.1);
    }

    playSpaceExplosion() {
        // Descending explosion sound
        this.playTone(800, 0.1, 'square', 0.2);
        setTimeout(() => this.playTone(400, 0.1, 'square', 0.15), 50);
        setTimeout(() => this.playTone(200, 0.2, 'square', 0.1), 100);
    }

    playPowerUp() {
        // Rising power-up sound
        this.playTone(200, 0.1, 'triangle', 0.1);
        setTimeout(() => this.playTone(400, 0.1, 'triangle', 0.1), 100);
        setTimeout(() => this.playTone(600, 0.1, 'triangle', 0.1), 200);
        setTimeout(() => this.playTone(800, 0.2, 'triangle', 0.1), 300);
    }

    playTone(frequency, duration, type = 'square', volume = 0.1) {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Adventure RPG theme inspired by classic exploration games
    playBackgroundTheme() {
        if (!this.audioContext || !this.isMusicPlaying) return;
        
        // Clear any existing timeouts
        this.activeTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
        this.activeTimeouts = [];
        
        // Main adventure melody (inspired by exploration themes)
        const adventureMelody = [
            { freq: 392, duration: 0.5 },  // G4 - Heroic start
            { freq: 440, duration: 0.25 }, // A4
            { freq: 523, duration: 0.5 },  // C5
            { freq: 440, duration: 0.25 }, // A4
            { freq: 392, duration: 0.5 },  // G4
            { freq: 330, duration: 0.5 },  // E4
            { freq: 349, duration: 0.25 }, // F4
            { freq: 392, duration: 0.5 },  // G4
            { freq: 440, duration: 0.25 }, // A4
            { freq: 523, duration: 0.5 },  // C5
            { freq: 587, duration: 0.25 }, // D5
            { freq: 523, duration: 0.25 }, // C5
            { freq: 440, duration: 0.5 },  // A4
            { freq: 392, duration: 0.5 },  // G4
            { freq: 330, duration: 0.5 },  // E4
            { freq: 294, duration: 0.5 }   // D4 - Resolution
        ];

        // Secondary melody for variation
        const secondaryMelody = [
            { freq: 523, duration: 0.5 },  // C5
            { freq: 587, duration: 0.25 }, // D5
            { freq: 659, duration: 0.5 },  // E5
            { freq: 587, duration: 0.25 }, // D5
            { freq: 523, duration: 0.5 },  // C5
            { freq: 440, duration: 0.5 },  // A4
            { freq: 392, duration: 0.25 }, // G4
            { freq: 440, duration: 0.5 },  // A4
            { freq: 523, duration: 0.5 },  // C5
            { freq: 587, duration: 0.25 }, // D5
            { freq: 659, duration: 0.5 },  // E5
            { freq: 698, duration: 0.25 }, // F5
            { freq: 659, duration: 0.5 },  // E5
            { freq: 587, duration: 0.5 }, // D5
            { freq: 523, duration: 0.5 },  // C5
            { freq: 440, duration: 0.5 }   // A4
        ];

        // Bass line for foundation
        const adventureBass = [
            { freq: 98, duration: 1.0 },  // G2
            { freq: 110, duration: 1.0 }, // A2
            { freq: 131, duration: 1.0 }, // C3
            { freq: 110, duration: 1.0 }, // A2
            { freq: 98, duration: 1.0 },  // G2
            { freq: 82, duration: 1.0 },  // E2
            { freq: 87, duration: 1.0 },  // F2
            { freq: 98, duration: 1.0 }   // G2
        ];

        // Harmony chords
        const harmonyChords = [
            { freq: 196, duration: 1.0 }, // G3
            { freq: 220, duration: 1.0 }, // A3
            { freq: 262, duration: 1.0 }, // C4
            { freq: 220, duration: 1.0 }, // A3
            { freq: 196, duration: 1.0 }, // G3
            { freq: 165, duration: 1.0 }, // E3
            { freq: 175, duration: 1.0 }, // F3
            { freq: 196, duration: 1.0 }  // G3
        ];

        let currentTime = 0;

        // Play main adventure melody
        adventureMelody.forEach((note, index) => {
            const timeoutId = setTimeout(() => {
                if (this.isMusicPlaying) {
                    this.playTone(note.freq, note.duration, 'triangle', 0.05);
                }
            }, currentTime * 1000);
            this.activeTimeouts.push(timeoutId);
            currentTime += note.duration;
        });

        // Play secondary melody
        secondaryMelody.forEach((note, index) => {
            const timeoutId = setTimeout(() => {
                if (this.isMusicPlaying) {
                    this.playTone(note.freq, note.duration, 'triangle', 0.04);
                }
            }, currentTime * 1000);
            this.activeTimeouts.push(timeoutId);
            currentTime += note.duration;
        });

        // Play bass line throughout
        let bassTime = 0;
        const fullBassPattern = [...adventureBass, ...adventureBass];
        fullBassPattern.forEach((note, index) => {
            const timeoutId = setTimeout(() => {
                if (this.isMusicPlaying) {
                    this.playTone(note.freq, note.duration, 'sawtooth', 0.03);
                }
            }, bassTime * 1000);
            this.activeTimeouts.push(timeoutId);
            bassTime += note.duration;
        });

        // Play harmony chords
        let harmonyTime = 0;
        const fullHarmonyPattern = [...harmonyChords, ...harmonyChords];
        fullHarmonyPattern.forEach((note, index) => {
            const timeoutId = setTimeout(() => {
                if (this.isMusicPlaying) {
                    this.playTone(note.freq, note.duration, 'square', 0.02);
                }
            }, harmonyTime * 1000);
            this.activeTimeouts.push(timeoutId);
            harmonyTime += note.duration;
        });

        // Add adventure-style percussion
        for (let i = 0; i < 32; i++) {
            const timeoutId = setTimeout(() => {
                if (this.isMusicPlaying) {
                    this.playTone(150 + (i % 3) * 25, 0.1, 'square', 0.01);
                }
            }, i * 0.5 * 1000);
            this.activeTimeouts.push(timeoutId);
        }

        // Loop the theme if music is still playing
        this.musicLoopTimeout = setTimeout(() => {
            if (this.isMusicPlaying) {
                this.playBackgroundTheme();
            }
        }, currentTime * 1000);
    }

    // Start background music
    startBackgroundMusic() {
        if (!this.audioContext) return;
        
        this.isMusicPlaying = true;
        
        // Resume audio context if suspended
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        // Start the theme
        setTimeout(() => {
            if (this.isMusicPlaying) {
                this.playBackgroundTheme();
            }
        }, 1000);
    }

    // Stop background music
    stopBackgroundMusic() {
        this.isMusicPlaying = false;
        if (this.musicLoopTimeout) {
            clearTimeout(this.musicLoopTimeout);
            this.musicLoopTimeout = null;
        }
        
        // Clear any pending setTimeout calls by storing their IDs
        if (this.activeTimeouts) {
            this.activeTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
            this.activeTimeouts = [];
        }
    }

    // Toggle background music
    toggleBackgroundMusic() {
        if (this.isMusicPlaying) {
            this.stopBackgroundMusic();
            return false;
        } else {
            this.startBackgroundMusic();
            return true;
        }
    }
}

// Space Objects Interaction System
class SpaceObjectsSystem {
    constructor() {
        this.objects = document.querySelectorAll('.space-object');
        this.soundSystem = new GamingSoundSystem();
        this.init();
    }

    init() {
        this.setupObjectInteractions();
        this.createSpaceEffects();
        this.setupAchievementSystem();
        this.setupMusicToggle();
        this.startBackgroundMusic();
    }

    startBackgroundMusic() {
        // Don't auto-start music - let user control it
        // Music will only start when user clicks the speaker button
        this.updateMusicButton(false);
    }

    setupMusicToggle() {
        const musicBtn = document.getElementById('music-toggle');
        if (musicBtn) {
            musicBtn.addEventListener('click', () => {
                const isPlaying = this.soundSystem.toggleBackgroundMusic();
                this.updateMusicButton(isPlaying);
                this.soundSystem.playSpaceClick();
            });
        }
    }

    updateMusicButton(isPlaying) {
        const musicBtn = document.getElementById('music-toggle');
        if (musicBtn) {
            const speakerIcon = musicBtn.querySelector('.speaker-icon');
            if (speakerIcon) {
                if (isPlaying) {
                    musicBtn.classList.add('playing');
                    speakerIcon.textContent = '🔊';
                    musicBtn.title = 'Stop Background Music';
                } else {
                    musicBtn.classList.remove('playing');
                    speakerIcon.textContent = '🔇';
                    musicBtn.title = 'Start Background Music';
                }
            }
        }
    }

    setupObjectInteractions() {
        this.objects.forEach((object, index) => {
            // Add staggered animation delay
            object.style.animationDelay = `${index * 0.2}s`;
            
            // Hover effects
            object.addEventListener('mouseenter', () => {
                this.createHoverEffect(object);
                this.soundSystem.playSpaceHover();
            });

            // Click effects
            object.addEventListener('click', (e) => {
                const link = object.getAttribute('data-link');
                if (link) {
                    this.createClickEffect(object);
                    this.soundSystem.playSpaceClick();
                    this.soundSystem.playSpaceExplosion();
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
        
        // Energy pulses disabled - was causing center pulsing circle
        // this.createEnergyPulses();
        
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
                    this.soundSystem.playShieldHit();
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


    setupAchievementSystem() {
        // Show achievement on page load - only once
        setTimeout(() => {
            this.showAchievement('Space Station Online!');
        }, 2000);
    }

    showAchievement(text) {
        // Play achievement sound
        this.soundSystem.playAchievement();
        
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
    // M key to toggle music
    if (e.code === 'KeyM') {
        e.preventDefault();
        const musicBtn = document.getElementById('music-toggle');
        if (musicBtn) {
            musicBtn.click();
        }
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

// Space Rocket Game
class SpaceRocketGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.gameModal = document.getElementById('game-modal');
        this.gameOverElement = document.getElementById('game-over');
        
        console.log('Game constructor - Canvas:', this.canvas, 'Modal:', this.gameModal);
        
        this.gameState = {
            running: false,
            level: 1,
            score: 0,
            lives: 3,
            gameSpeed: 2
        };
        
        this.rocket = {
            x: this.canvas.width / 2,
            y: this.canvas.height - 60,
            width: 40,
            height: 40,
            speed: 5
        };
        
        this.asteroids = [];
        this.stars = [];
        this.keys = {};
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.gameLoop();
    }
    
    setupEventListeners() {
        // Rocket click to start game
        const rocketElement = document.getElementById('rocket-game-trigger');
        console.log('Rocket element found:', rocketElement);
        
        if (rocketElement) {
            rocketElement.addEventListener('click', () => {
                console.log('Rocket clicked! Starting game...');
                this.startGame();
            });
        } else {
            console.error('Rocket element not found!');
        }
        
        // Close game
        const closeBtn = document.getElementById('close-game');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeGame();
            });
        } else {
            console.error('Close button not found!');
        }
        
        // Play again
        const playAgainBtn = document.getElementById('play-again');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.restartGame();
            });
        } else {
            console.error('Play again button not found!');
        }
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    startGame() {
        console.log('Starting game...', this.gameModal);
        console.log('Game modal element:', this.gameModal);
        console.log('Game modal classes before:', this.gameModal.className);
        
        this.gameModal.classList.add('active');
        console.log('Game modal classes after:', this.gameModal.className);
        
        // Force show modal for testing
        this.gameModal.style.display = 'flex';
        this.gameModal.style.zIndex = '9999';
        console.log('Modal display forced to flex');
        
        this.gameState.running = true;
        this.gameState.level = 1;
        this.gameState.score = 0;
        this.gameState.lives = 3;
        this.gameState.gameSpeed = 2;
        
        this.rocket.x = this.canvas.width / 2;
        this.rocket.y = this.canvas.height - 60;
        this.asteroids = [];
        this.stars = [];
        
        this.updateUI();
        // Get sound system from existing SpaceObjectsSystem
        const spaceSystem = window.spaceObjectsSystem;
        if (spaceSystem && spaceSystem.soundSystem) {
            spaceSystem.soundSystem.playSpaceClick();
        }
    }
    
    closeGame() {
        this.gameModal.classList.remove('active');
        this.gameOverElement.classList.add('hidden');
        this.gameState.running = false;
        console.log('Game closed');
    }
    
    restartGame() {
        this.gameOverElement.classList.add('hidden');
        this.startGame();
    }
    
    updateUI() {
        document.getElementById('level-display').textContent = `LEVEL: ${this.gameState.level}`;
        document.getElementById('score-display').textContent = `SCORE: ${this.gameState.score}`;
        document.getElementById('lives-display').textContent = `LIVES: ${this.gameState.lives}`;
    }
    
    handleInput() {
        if (this.keys['ArrowLeft'] && this.rocket.x > 0) {
            this.rocket.x -= this.rocket.speed;
        }
        if (this.keys['ArrowRight'] && this.rocket.x < this.canvas.width - this.rocket.width) {
            this.rocket.x += this.rocket.speed;
        }
        if (this.keys['ArrowUp'] && this.rocket.y > 0) {
            this.rocket.y -= this.rocket.speed;
        }
        if (this.keys['ArrowDown'] && this.rocket.y < this.canvas.height - this.rocket.height) {
            this.rocket.y += this.rocket.speed;
        }
    }
    
    spawnAsteroids() {
        if (Math.random() < 0.02 + (this.gameState.level * 0.01)) {
            this.asteroids.push({
                x: Math.random() * (this.canvas.width - 30),
                y: -30,
                width: 30,
                height: 30,
                speed: this.gameState.gameSpeed + Math.random() * 2
            });
        }
    }
    
    spawnStars() {
        if (Math.random() < 0.01) {
            this.stars.push({
                x: Math.random() * (this.canvas.width - 20),
                y: -20,
                width: 20,
                height: 20,
                speed: this.gameState.gameSpeed
            });
        }
    }
    
    updateAsteroids() {
        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const asteroid = this.asteroids[i];
            asteroid.y += asteroid.speed;
            
            // Remove asteroids that are off screen
            if (asteroid.y > this.canvas.height) {
                this.asteroids.splice(i, 1);
                continue;
            }
            
            // Check collision with rocket
            if (this.checkCollision(this.rocket, asteroid)) {
                this.asteroids.splice(i, 1);
                this.gameState.lives--;
                // Get sound system from existing SpaceObjectsSystem
                const spaceSystem = window.spaceObjectsSystem;
                if (spaceSystem && spaceSystem.soundSystem) {
                    spaceSystem.soundSystem.playSpaceExplosion();
                }
                this.updateUI();
                
                if (this.gameState.lives <= 0) {
                    this.gameOver();
                }
            }
        }
    }
    
    updateStars() {
        for (let i = this.stars.length - 1; i >= 0; i--) {
            const star = this.stars[i];
            star.y += star.speed;
            
            // Remove stars that are off screen
            if (star.y > this.canvas.height) {
                this.stars.splice(i, 1);
                continue;
            }
            
            // Check collision with rocket
            if (this.checkCollision(this.rocket, star)) {
                this.stars.splice(i, 1);
                this.gameState.score += 10;
                // Get sound system from existing SpaceObjectsSystem
                const spaceSystem = window.spaceObjectsSystem;
                if (spaceSystem && spaceSystem.soundSystem) {
                    spaceSystem.soundSystem.playAchievement();
                }
                this.updateUI();
            }
        }
    }
    
    checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    checkLevelComplete() {
        const starsNeeded = this.gameState.level * 5;
        if (this.gameState.score >= starsNeeded * 10) {
            this.gameState.level++;
            this.gameState.gameSpeed += 0.5;
            // Get sound system from existing SpaceObjectsSystem
            const spaceSystem = window.spaceObjectsSystem;
            if (spaceSystem && spaceSystem.soundSystem) {
                spaceSystem.soundSystem.playPowerUp();
            }
            this.updateUI();
            
            if (this.gameState.level > 10) {
                this.gameComplete();
            }
        }
    }
    
    gameComplete() {
        this.gameState.running = false;
        document.getElementById('game-over-title').textContent = 'MISSION COMPLETE!';
        document.getElementById('final-score').textContent = this.gameState.score;
        this.gameOverElement.classList.remove('hidden');
        // Get sound system from existing SpaceObjectsSystem
        const spaceSystem = window.spaceObjectsSystem;
        if (spaceSystem && spaceSystem.soundSystem) {
            spaceSystem.soundSystem.playAchievement();
        }
    }
    
    gameOver() {
        this.gameState.running = false;
        document.getElementById('game-over-title').textContent = 'MISSION FAILED!';
        document.getElementById('final-score').textContent = this.gameState.score;
        this.gameOverElement.classList.remove('hidden');
    }
    
    draw() {
        if (!this.ctx || !this.canvas) return;
        
        // Clear canvas
        this.ctx.fillStyle = '#000011';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw stars background
        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 50; i++) {
            const x = (i * 37) % this.canvas.width;
            const y = (i * 23) % this.canvas.height;
            this.ctx.fillRect(x, y, 1, 1);
        }
        
        // Draw rocket
        this.ctx.fillStyle = '#ffcc00';
        this.ctx.fillRect(this.rocket.x, this.rocket.y, this.rocket.width, this.rocket.height);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fillRect(this.rocket.x + 5, this.rocket.y + 5, 30, 30);
        
        // Draw asteroids
        this.ctx.fillStyle = '#666666';
        this.asteroids.forEach(asteroid => {
            this.ctx.fillRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);
        });
        
        // Draw stars
        this.ctx.fillStyle = '#ffff00';
        this.stars.forEach(star => {
            this.ctx.fillRect(star.x, star.y, star.width, star.height);
        });
        
        // Draw level progress
        const starsNeeded = this.gameState.level * 5;
        const starsCollected = Math.floor(this.gameState.score / 10);
        const progress = Math.min(starsCollected / starsNeeded, 1);
        
        this.ctx.fillStyle = '#333333';
        this.ctx.fillRect(10, 10, 200, 20);
        this.ctx.fillStyle = '#ffcc00';
        this.ctx.fillRect(10, 10, 200 * progress, 20);
        
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = '12px Orbitron';
        this.ctx.fillText(`Level ${this.gameState.level} Progress: ${starsCollected}/${starsNeeded}`, 10, 35);
    }
    
    gameLoop() {
        if (this.gameState.running) {
            this.handleInput();
            this.spawnAsteroids();
            this.spawnStars();
            this.updateAsteroids();
            this.updateStars();
            this.checkLevelComplete();
        }
        
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.spaceObjectsSystem = new SpaceObjectsSystem();
    
    // Initialize game
    window.spaceRocketGame = new SpaceRocketGame();
    
    // Loading screen effect
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
    
    // CRT effect
    const style = document.createElement('style');
    style.textContent = `
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%);
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 1000;
            animation: scanlines 0.1s linear infinite;
        }
        
        @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
        }
    `;
    document.head.appendChild(style);
});