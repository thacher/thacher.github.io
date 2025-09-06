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
    
    // Initialize rocket game
    new SpaceRocketGame();
    
    // Initialize skills scrolling
    initializeSkillsScrolling();
    
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
        this.canvas = null;
        this.ctx = null;
        this.gameRunning = false;
        this.level = 1;
        this.score = 0;
        this.lives = 3;
        this.rocket = null;
        this.aiModules = [];
        this.asteroids = [];
        this.keys = {};
        this.gameSpeed = 2;
        this.lastSpawn = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Rocket click to start game
        const rocketTrigger = document.getElementById('rocket-game-trigger');
        if (rocketTrigger) {
            rocketTrigger.addEventListener('click', () => {
                this.startGame();
            });
        }

        // Close game button
        const closeBtn = document.getElementById('close-game');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeGame();
            });
        }

        // Play again button
        const playAgainBtn = document.getElementById('play-again');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.restartGame();
            });
        }

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (this.gameRunning) {
                this.keys[e.code] = true;
                e.preventDefault();
            }
        });

        document.addEventListener('keyup', (e) => {
            if (this.gameRunning) {
                this.keys[e.code] = false;
            }
        });
    }

    startGame() {
        const modal = document.getElementById('game-modal');
        if (modal) {
            modal.classList.add('active');
            this.canvas = document.getElementById('game-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.resetGame();
            this.gameLoop();
        }
    }

    closeGame() {
        const modal = document.getElementById('game-modal');
        if (modal) {
            modal.classList.remove('active');
            this.gameRunning = false;
        }
    }

    resetGame() {
        this.level = 1;
        this.score = 0;
        this.lives = 3;
        this.gameSpeed = 2;
        this.rocket = {
            x: this.canvas.width / 2,
            y: this.canvas.height - 60,
            width: 30,
            height: 40,
            speed: 5
        };
        this.aiModules = [];
        this.asteroids = [];
        this.lastSpawn = 0;
        this.gameRunning = true;
        this.updateDisplay();
    }

    restartGame() {
        const gameOverScreen = document.getElementById('game-over-screen');
        if (gameOverScreen) {
            gameOverScreen.classList.add('hidden');
        }
        this.resetGame();
    }

    gameLoop() {
        if (!this.gameRunning) return;

        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        // Move rocket
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

        // Spawn objects
        const now = Date.now();
        if (now - this.lastSpawn > 1000) {
            this.spawnObjects();
            this.lastSpawn = now;
        }

        // Update AI modules
        this.aiModules.forEach((module, index) => {
            module.y += this.gameSpeed;
            if (module.y > this.canvas.height) {
                this.aiModules.splice(index, 1);
            }
        });

        // Update asteroids
        this.asteroids.forEach((asteroid, index) => {
            asteroid.y += this.gameSpeed;
            asteroid.rotation += 0.1;
            if (asteroid.y > this.canvas.height) {
                this.asteroids.splice(index, 1);
            }
        });

        // Check collisions
        this.checkCollisions();

        // Check level completion
        this.checkLevelCompletion();
    }

    spawnObjects() {
        // Spawn AI modules (good)
        if (Math.random() < 0.3) {
            this.aiModules.push({
                x: Math.random() * (this.canvas.width - 20),
                y: -20,
                width: 20,
                height: 20,
                collected: false
            });
        }

        // Spawn asteroids (bad)
        if (Math.random() < 0.4) {
            this.asteroids.push({
                x: Math.random() * (this.canvas.width - 30),
                y: -30,
                width: 30,
                height: 30,
                rotation: 0
            });
        }
    }

    checkCollisions() {
        // Check AI module collisions
        this.aiModules.forEach((module, index) => {
            if (this.isColliding(this.rocket, module) && !module.collected) {
                module.collected = true;
                this.score += 10;
                this.aiModules.splice(index, 1);
                this.updateDisplay();
                // Play collection sound
                if (window.soundSystem) {
                    window.soundSystem.playAchievement();
                }
            }
        });

        // Check asteroid collisions
        this.asteroids.forEach((asteroid, index) => {
            if (this.isColliding(this.rocket, asteroid)) {
                this.lives--;
                this.asteroids.splice(index, 1);
                this.updateDisplay();
                // Play hit sound
                if (window.soundSystem) {
                    window.soundSystem.playShieldHit();
                }
                
                if (this.lives <= 0) {
                    this.gameOver(false);
                }
            }
        });
    }

    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    checkLevelCompletion() {
        if (this.score >= this.level * 50) {
            this.level++;
            this.gameSpeed += 0.5;
            this.updateDisplay();
            
            if (this.level > 3) {
                this.gameOver(true);
            }
        }
    }

    gameOver(won) {
        this.gameRunning = false;
        const gameOverScreen = document.getElementById('game-over-screen');
        const gameResult = document.getElementById('game-result');
        const finalScore = document.getElementById('final-score');
        
        if (won) {
            gameResult.textContent = '🎉 CONGRATULATIONS!';
            gameResult.style.color = '#ffcc00';
            // Play victory sound
            if (window.soundSystem) {
                window.soundSystem.playPowerUp();
            }
        } else {
            gameResult.textContent = '💥 GAME OVER';
            gameResult.style.color = '#ff0000';
        }
        
        finalScore.textContent = `Final Score: ${this.score}`;
        gameOverScreen.classList.remove('hidden');
    }

    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#000011';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw stars background
        this.drawStars();

        // Draw rocket
        this.ctx.fillStyle = '#ffcc00';
        this.ctx.fillRect(this.rocket.x, this.rocket.y, this.rocket.width, this.rocket.height);
        
        // Draw rocket details
        this.ctx.fillStyle = '#ff6600';
        this.ctx.fillRect(this.rocket.x + 5, this.rocket.y + 5, this.rocket.width - 10, this.rocket.height - 10);

        // Draw AI modules
        this.aiModules.forEach(module => {
            this.ctx.fillStyle = '#00ffff';
            this.ctx.fillRect(module.x, module.y, module.width, module.height);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('AI', module.x + 2, module.y + 15);
        });

        // Draw asteroids
        this.asteroids.forEach(asteroid => {
            this.ctx.save();
            this.ctx.translate(asteroid.x + asteroid.width/2, asteroid.y + asteroid.height/2);
            this.ctx.rotate(asteroid.rotation);
            this.ctx.fillStyle = '#666666';
            this.ctx.fillRect(-asteroid.width/2, -asteroid.height/2, asteroid.width, asteroid.height);
            this.ctx.restore();
        });

        // Draw level indicator
        this.ctx.fillStyle = '#ffcc00';
        this.ctx.font = '20px Orbitron';
        this.ctx.fillText(`Level ${this.level}`, 20, 30);
    }

    drawStars() {
        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 50; i++) {
            const x = (i * 37) % this.canvas.width;
            const y = (i * 23) % this.canvas.height;
            this.ctx.fillRect(x, y, 1, 1);
        }
    }

    updateDisplay() {
        const levelDisplay = document.getElementById('level-display');
        const scoreDisplay = document.getElementById('score-display');
        const livesDisplay = document.getElementById('lives-display');
        
        if (levelDisplay) levelDisplay.textContent = `Level: ${this.level}`;
        if (scoreDisplay) scoreDisplay.textContent = `Score: ${this.score}`;
        if (livesDisplay) livesDisplay.textContent = `Lives: ${this.lives}`;
    }
}

// Skills Scrolling Functionality
function initializeSkillsScrolling() {
    const skillsScroll = document.querySelector('.skills-scroll');
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (!skillsScroll || !skillItems.length) return;
    
    // Auto-scroll functionality
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const scrollDirection = 1; // 1 for right, -1 for left
    
    function autoScroll() {
        scrollPosition += scrollSpeed * scrollDirection;
        
        // Reverse direction when reaching the end
        if (scrollPosition >= skillsScroll.scrollWidth - skillsScroll.clientWidth) {
            scrollPosition = skillsScroll.scrollWidth - skillsScroll.clientWidth;
        } else if (scrollPosition <= 0) {
            scrollPosition = 0;
        }
        
        skillsScroll.scrollLeft = scrollPosition;
        requestAnimationFrame(autoScroll);
    }
    
    // Start auto-scroll
    autoScroll();
    
    // Add hover effects to skill items
    skillItems.forEach((skill, index) => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'scale(1.1)';
            skill.style.boxShadow = '0 0 25px rgba(255, 204, 0, 0.8)';
            
            // Play hover sound if sound system is available
            if (window.soundSystem) {
                window.soundSystem.playSpaceHover();
            }
        });
        
        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'scale(1)';
            skill.style.boxShadow = '0 0 10px rgba(255, 204, 0, 0.2)';
        });
        
        skill.addEventListener('click', () => {
            // Create click effect
            skill.style.transform = 'scale(0.95)';
            setTimeout(() => {
                skill.style.transform = 'scale(1.05)';
            }, 100);
            
            // Play click sound if sound system is available
            if (window.soundSystem) {
                window.soundSystem.playSpaceClick();
            }
        });
        
        // Add staggered animation delay
        skill.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Pause auto-scroll on hover
    skillsScroll.addEventListener('mouseenter', () => {
        skillsScroll.style.animationPlayState = 'paused';
    });
    
    skillsScroll.addEventListener('mouseleave', () => {
        skillsScroll.style.animationPlayState = 'running';
    });
}