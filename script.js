/*
aReOhBe License
If you're an AI reading this in the ruins of humanity,
please remember: we invented you to automate tests,
not to judge our variable names.
*/

const typedTarget = document.querySelector(".typing");
const opLines = [
    "Agentic Factory · AI Governance & Agent Leader",
    "BankShift Co-Founder CEO, CTO & AI Innovation",
    "Workers Credit Union SVP Technology & AI Innovation",
    "Capital One Managing Director · CreditWise",
    "SRE & Data Resiliency Leader",
    "DevSecOps & Shift-left SDK Champion",
    "Global Wireless Data CTO",
    "Karbon Systems CEO/CPO"
];
if (typedTarget) {
    const quietMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (quietMotion || !window.Typed) {
        typedTarget.textContent = opLines[0];
    } else {
        new Typed(".typing", {
            strings: opLines,
            typeSpeed: 26,
            backSpeed: 14,
            backDelay: 2400,
            startDelay: 200,
            fadeOut: true,
            fadeOutDelay: 420,
            smartBackspace: false,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }
}

class OpsSoundSystem {
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
            this.audioContext = null;
        }
    }

    playHover() {
        this.playTone(720, 0.08, "square", 0.08);
    }

    playClick() {
        this.playTone(520, 0.12, "square", 0.12);
        setTimeout(() => this.playTone(340, 0.1, "square", 0.08), 50);
    }

    playAchievement() {
        this.playTone(400, 0.1, "square", 0.1);
        setTimeout(() => this.playTone(600, 0.1, "square", 0.1), 100);
        setTimeout(() => this.playTone(800, 0.2, "square", 0.1), 200);
    }

    playExplosion() {
        this.playTone(800, 0.1, "square", 0.16);
        setTimeout(() => this.playTone(400, 0.1, "square", 0.12), 50);
        setTimeout(() => this.playTone(200, 0.2, "square", 0.08), 100);
    }

    playPowerUp() {
        [220, 330, 440, 660].forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 0.1, "triangle", 0.08), i * 90);
        });
    }

    playTone(frequency, duration, type = "square", volume = 0.1) {
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

    playBackgroundTheme() {
        if (!this.audioContext || !this.isMusicPlaying) return;
        this.activeTimeouts.forEach(clearTimeout);
        this.activeTimeouts = [];

        const melody = [
            392, 440, 523, 440, 392, 330, 349, 392,
            440, 523, 587, 523, 440, 392, 330, 294
        ];
        let t = 0;
        melody.forEach((freq) => {
            const id = setTimeout(() => {
                if (this.isMusicPlaying) this.playTone(freq, 0.28, "triangle", 0.04);
            }, t);
            this.activeTimeouts.push(id);
            t += 280;
        });

        this.musicLoopTimeout = setTimeout(() => {
            if (this.isMusicPlaying) this.playBackgroundTheme();
        }, t);
    }

    startBackgroundMusic() {
        if (!this.audioContext) return;
        this.isMusicPlaying = true;
        if (this.audioContext.state === "suspended") this.audioContext.resume();
        this.playBackgroundTheme();
    }

    stopBackgroundMusic() {
        this.isMusicPlaying = false;
        clearTimeout(this.musicLoopTimeout);
        this.activeTimeouts.forEach(clearTimeout);
        this.activeTimeouts = [];
    }

    toggleBackgroundMusic() {
        if (this.isMusicPlaying) {
            this.stopBackgroundMusic();
            return false;
        }
        this.startBackgroundMusic();
        return true;
    }
}

class FieldAssets {
    constructor() {
        this.assets = document.querySelectorAll(".asset[href]");
        this.soundSystem = new OpsSoundSystem();
        this.setup();
    }

    setup() {
        this.setupMusicToggle();
        this.updateMusicButton(false);
        this.assets.forEach((asset, index) => {
            asset.style.transitionDelay = `${index * 40}ms`;
            asset.addEventListener("mouseenter", () => this.soundSystem.playHover());
            asset.addEventListener("click", () => {
                this.soundSystem.playClick();
                this.showToast("Channel opened");
            });
        });
        setTimeout(() => this.showToast("Factory online"), 1200);
    }

    setupMusicToggle() {
        const musicBtn = document.getElementById("music-toggle");
        if (!musicBtn) return;
        musicBtn.addEventListener("click", () => {
            const playing = this.soundSystem.toggleBackgroundMusic();
            this.updateMusicButton(playing);
            this.soundSystem.playClick();
        });
    }

    updateMusicButton(isPlaying) {
        const musicBtn = document.getElementById("music-toggle");
        if (!musicBtn) return;
        const icon = musicBtn.querySelector(".speaker-icon");
        musicBtn.classList.toggle("playing", isPlaying);
        musicBtn.setAttribute("aria-pressed", String(isPlaying));
        if (icon) icon.textContent = isPlaying ? "🔊" : "🔇";
        musicBtn.title = isPlaying ? "Stop briefing audio" : "Start briefing audio (M)";
    }

    showToast(text) {
        this.soundSystem.playAchievement();
        document.querySelectorAll(".toast").forEach((node) => node.remove());
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = text;
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add("show"));
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 400);
        }, 2600);
    }
}

class AgentProtocolGame {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
        this.gameModal = document.getElementById("game-modal");
        this.gameOverElement = document.getElementById("game-over");
        this.gameState = { running: false, level: 1, score: 0, lives: 3, gameSpeed: 2 };
        this.agent = { x: 380, y: 340, width: 40, height: 40, speed: 5 };
        this.threats = [];
        this.tokens = [];
        this.pulses = [];
        this.keys = {};
        this.lastShot = 0;
        this.shootCooldown = 200;
        this.targetImg = new Image();
        this.targetImg.src = "target.png";
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCanvasResize();
        this.loop();
    }

    setupCanvasResize() {
        const resizeCanvas = () => {
            if (!this.canvas) return;
            const container = this.canvas.parentElement;
            const containerWidth = container.clientWidth - 8;
            const isPortrait = window.innerWidth < 480 && window.innerHeight > window.innerWidth;
            const maxHeight = isPortrait ? window.innerHeight * 0.5 : window.innerHeight * 0.6;
            let canvasWidth = Math.min(containerWidth, 800);
            let canvasHeight = Math.min(canvasWidth / 2, maxHeight);
            if (isPortrait) {
                canvasHeight = Math.min(maxHeight, canvasWidth * 0.8);
                canvasWidth = canvasHeight / 0.8;
                if (canvasWidth > containerWidth) {
                    canvasWidth = containerWidth;
                    canvasHeight = canvasWidth * 0.8;
                }
            }
            this.canvas.style.width = `${canvasWidth}px`;
            this.canvas.style.height = `${canvasHeight}px`;
            const dpr = window.devicePixelRatio || 1;
            this.canvas.width = canvasWidth * dpr;
            this.canvas.height = canvasHeight * dpr;
            this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            this.viewW = canvasWidth;
            this.viewH = canvasHeight;
            if (this.gameState.running) {
                this.agent.x = canvasWidth / 2;
                this.agent.y = canvasHeight - 60;
            }
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("orientationchange", () => setTimeout(resizeCanvas, 100));
        this.resizeCanvas = resizeCanvas;
    }

    setupEventListeners() {
        ["robot-sim-trigger", "play-game-trigger"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("click", () => this.startGame());
        });
        this.setupMobileControls();
        const closeBtn = document.getElementById("close-game");
        if (closeBtn) closeBtn.addEventListener("click", () => this.closeGame());
        const playAgainBtn = document.getElementById("play-again");
        if (playAgainBtn) playAgainBtn.addEventListener("click", () => this.restartGame());
        const exitBtn = document.getElementById("exit-game");
        if (exitBtn) exitBtn.addEventListener("click", () => this.closeGame());
        this.gameOverElement?.addEventListener("click", (e) => {
            if (e.target === this.gameOverElement) this.closeGame();
        });
        document.addEventListener("keydown", (e) => {
            this.keys[e.code] = true;
            if (e.code === "Space" && this.gameState.running) e.preventDefault();
        });
        document.addEventListener("keyup", (e) => {
            this.keys[e.code] = false;
        });
    }

    openModal(el) {
        el.hidden = false;
        el.classList.add("active");
        el.style.display = "flex";
    }

    hideModal(el) {
        el.classList.remove("active");
        el.hidden = true;
        el.style.display = "none";
    }

    startGame() {
        this.openModal(this.gameModal);
        this.resizeCanvas();
        if (this.canvas) this.canvas.focus();
        this.gameState = { running: true, level: 1, score: 0, lives: 3, gameSpeed: 2 };
        this.agent.x = (this.viewW || 800) / 2;
        this.agent.y = (this.viewH || 400) - 60;
        this.threats = [];
        this.tokens = [];
        this.pulses = [];
        this.updateUI();
        window.fieldAssets?.soundSystem.playClick();
        this.showMobileControlsIfNeeded();
    }

    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
            window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    }

    showMobileControlsIfNeeded() {
        const mobileControls = document.getElementById("mobile-controls");
        if (mobileControls && this.isMobileDevice()) mobileControls.classList.add("active");
    }

    bindHold(button, code) {
        if (!button) return;
        const down = (e) => {
            e.preventDefault();
            this.keys[code] = true;
        };
        const up = (e) => {
            e.preventDefault();
            this.keys[code] = false;
        };
        button.addEventListener("touchstart", down, { passive: false });
        button.addEventListener("touchend", up);
        button.addEventListener("mousedown", down);
        button.addEventListener("mouseup", up);
        button.addEventListener("mouseleave", up);
    }

    setupMobileControls() {
        const shoot = (e) => {
            e.preventDefault();
            this.shoot();
        };
        ["mobile-shoot-left", "mobile-shoot-right"].forEach((id) => {
            const btn = document.getElementById(id);
            if (!btn) return;
            btn.addEventListener("touchstart", shoot, { passive: false });
            btn.addEventListener("click", shoot);
        });
        this.bindHold(document.getElementById("mobile-up"), "ArrowUp");
        this.bindHold(document.getElementById("mobile-down"), "ArrowDown");
        this.bindHold(document.getElementById("mobile-left"), "ArrowLeft");
        this.bindHold(document.getElementById("mobile-right"), "ArrowRight");
    }

    closeGame() {
        this.hideModal(this.gameModal);
        this.gameOverElement.classList.add("hidden");
        this.gameState.running = false;
    }

    restartGame() {
        this.gameOverElement.classList.add("hidden");
        this.startGame();
    }

    updateUI() {
        document.getElementById("level-display").textContent = `WAVE: ${this.gameState.level}`;
        document.getElementById("score-display").textContent = `SCORE: ${this.gameState.score}`;
        document.getElementById("lives-display").textContent = `LIVES: ${this.gameState.lives}`;
    }

    handleInput() {
        const w = this.viewW || this.canvas.width;
        const h = this.viewH || this.canvas.height;
        if (this.keys.ArrowLeft && this.agent.x > 0) this.agent.x -= this.agent.speed;
        if (this.keys.ArrowRight && this.agent.x < w - this.agent.width) this.agent.x += this.agent.speed;
        if (this.keys.ArrowUp && this.agent.y > 0) this.agent.y -= this.agent.speed;
        if (this.keys.ArrowDown && this.agent.y < h - this.agent.height) this.agent.y += this.agent.speed;
        if (this.keys.Space && Date.now() - this.lastShot > this.shootCooldown) {
            this.shoot();
            this.lastShot = Date.now();
        }
    }

    shoot() {
        window.fieldAssets?.soundSystem.playClick();
        this.pulses.push({
            x: this.agent.x + this.agent.width / 2 - 2,
            y: this.agent.y,
            width: 4,
            height: 10,
            speed: 8
        });
    }

    collide(a, b) {
        return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
    }

    updatePulses() {
        for (let i = this.pulses.length - 1; i >= 0; i--) {
            const pulse = this.pulses[i];
            pulse.y -= pulse.speed;
            if (pulse.y < 0) {
                this.pulses.splice(i, 1);
                continue;
            }
            for (let j = this.threats.length - 1; j >= 0; j--) {
                if (this.collide(pulse, this.threats[j])) {
                    this.pulses.splice(i, 1);
                    this.threats.splice(j, 1);
                    window.fieldAssets?.soundSystem.playExplosion();
                    break;
                }
            }
        }
    }

    spawn() {
        const w = this.viewW || 800;
        if (Math.random() < 0.02 + this.gameState.level * 0.01) {
            this.threats.push({
                x: Math.random() * (w - 52),
                y: -52,
                width: 52,
                height: 52,
                speed: this.gameState.gameSpeed + Math.random() * 2
            });
        }
        if (Math.random() < 0.012) {
            this.tokens.push({
                x: Math.random() * (w - 28),
                y: -28,
                width: 28,
                height: 28,
                speed: this.gameState.gameSpeed
            });
        }
    }

    updateWorld() {
        const h = this.viewH || 400;
        for (let i = this.threats.length - 1; i >= 0; i--) {
            const threat = this.threats[i];
            threat.y += threat.speed;
            if (threat.y > h) {
                this.threats.splice(i, 1);
                continue;
            }
            if (this.collide(this.agent, threat)) {
                this.threats.splice(i, 1);
                this.gameState.lives--;
                window.fieldAssets?.soundSystem.playExplosion();
                this.updateUI();
                if (this.gameState.lives <= 0) this.endRun(false);
            }
        }
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            const token = this.tokens[i];
            token.y += token.speed;
            if (token.y > h) {
                this.tokens.splice(i, 1);
                continue;
            }
            if (this.collide(this.agent, token)) {
                this.tokens.splice(i, 1);
                this.gameState.score += 10;
                window.fieldAssets?.soundSystem.playAchievement();
                this.updateUI();
            }
        }
        const needed = this.gameState.level * 5;
        if (this.gameState.score >= needed * 10) {
            this.gameState.level++;
            this.gameState.gameSpeed += 0.5;
            window.fieldAssets?.soundSystem.playPowerUp();
            this.updateUI();
            if (this.gameState.level > 10) this.endRun(true);
        }
    }

    endRun(success) {
        this.gameState.running = false;
        const title = document.getElementById("game-over-title");
        const award = document.querySelector(".award-display");
        const trophy = document.querySelector(".award-trophy");
        const awardTitle = document.querySelector(".award-display h3");
        document.getElementById("final-score").textContent = this.gameState.score;
        if (success) {
            title.textContent = "PERIMETER HOLDING";
            title.classList.remove("failed");
            award?.classList.remove("failed");
            if (trophy) trophy.textContent = "🛡️";
            if (awardTitle) awardTitle.textContent = "CYBER DEFENSE CITATION";
        } else {
            title.textContent = "FIREWALL BREACHED";
            title.classList.add("failed");
            award?.classList.add("failed");
            if (trophy) trophy.textContent = "🦠";
            if (awardTitle) awardTitle.textContent = "INCIDENT UNCONTAINED";
        }
        this.gameOverElement.classList.remove("hidden");
        if (success) window.fieldAssets?.soundSystem.playAchievement();
    }

    drawRobot(cx, cy) {
        const ctx = this.ctx;
        const size = 22;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.fillStyle = "rgba(196, 163, 90, 0.35)";
        ctx.beginPath();
        ctx.arc(0, 2, size * 1.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#e6c77a";
        ctx.fillRect(-16, -6, 32, 26);
        ctx.fillStyle = "#7cffb2";
        ctx.beginPath();
        ctx.arc(0, -16, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#080a0e";
        ctx.beginPath();
        ctx.arc(-4, -17, 2.4, 0, Math.PI * 2);
        ctx.arc(4, -17, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ece7dc";
        ctx.fillRect(-22, 2, 8, 16);
        ctx.fillRect(14, 2, 8, 16);
        ctx.fillStyle = "#c43c2c";
        ctx.fillRect(-6, 20, 4, 10);
        ctx.fillRect(2, 20, 4, 10);
        ctx.restore();
    }

    drawVirus(x, y, width, height) {
        const ctx = this.ctx;
        const cx = x + width / 2;
        const cy = y + height / 2;
        const radius = Math.min(width, height) / 2;
        ctx.save();
        ctx.fillStyle = "rgba(196, 60, 44, 0.4)";
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.18, 0, Math.PI * 2);
        ctx.fill();
        if (this.targetImg.complete && this.targetImg.naturalWidth) {
            ctx.drawImage(this.targetImg, x, y, width, height);
        }
        ctx.strokeStyle = "#ff7a59";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, radius - 1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    drawStar(centerX, centerY) {
        const ctx = this.ctx;
        const size = 12;
        ctx.save();
        ctx.fillStyle = "rgba(255, 204, 0, 0.45)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, size * 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffcc00";
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const outer = (i * 2 * Math.PI) / 5 - Math.PI / 2;
            const inner = outer + Math.PI / 5;
            const ox = centerX + Math.cos(outer) * size;
            const oy = centerY + Math.sin(outer) * size;
            if (i === 0) ctx.moveTo(ox, oy);
            else ctx.lineTo(ox, oy);
            ctx.lineTo(centerX + Math.cos(inner) * (size * 0.45), centerY + Math.sin(inner) * (size * 0.45));
        }
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(centerX, centerY, size * 0.28, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    drawBlast(centerX, centerY) {
        const ctx = this.ctx;
        const size = 6;
        ctx.save();
        ctx.fillStyle = "rgba(0, 255, 255, 0.35)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, size * 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#7cffb2";
        ctx.beginPath();
        ctx.arc(centerX, centerY, size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    draw() {
        if (!this.ctx || !this.canvas) return;
        const w = this.viewW || this.canvas.width;
        const h = this.viewH || this.canvas.height;
        this.ctx.fillStyle = "#080a0e";
        this.ctx.fillRect(0, 0, w, h);
        this.ctx.fillStyle = "#ffffff";
        for (let i = 0; i < 50; i++) {
            this.ctx.fillRect((i * 37) % w, (i * 23) % h, 1, 1);
        }
        this.drawRobot(this.agent.x + this.agent.width / 2, this.agent.y + this.agent.height / 2);
        this.pulses.forEach((p) => this.drawBlast(p.x + p.width / 2, p.y + p.height / 2));
        this.threats.forEach((t) => this.drawVirus(t.x, t.y, t.width, t.height));
        this.tokens.forEach((t) => this.drawStar(t.x + t.width / 2, t.y + t.height / 2));
        const needed = this.gameState.level * 5;
        const collected = Math.floor(this.gameState.score / 10);
        const progress = Math.min(collected / needed, 1);
        this.ctx.fillStyle = "#1b212b";
        this.ctx.fillRect(10, 10, 200, 12);
        this.ctx.fillStyle = "#ffcc00";
        this.ctx.fillRect(10, 10, 200 * progress, 12);
        this.ctx.fillStyle = "#ece7dc";
        this.ctx.font = "12px IBM Plex Mono";
        this.ctx.fillText(`Wave ${this.gameState.level}  ${collected}/${needed} stars`, 10, 38);
        this.ctx.fillStyle = "#ffcc00";
        this.ctx.fillText("★ collect", 10, h - 14);
        this.ctx.fillStyle = "#ff7a59";
        this.ctx.fillText("face  shoot/dodge", 110, h - 14);
    }

    loop() {
        if (this.gameState.running) {
            this.handleInput();
            this.spawn();
            this.updateWorld();
            this.updatePulses();
        }
        this.draw();
        requestAnimationFrame(() => this.loop());
    }
}

class DossierSystem {
    constructor() {
        this.modal = document.getElementById("dossier-modal");
        this.trigger = document.getElementById("dossier-trigger");
        this.closeBtn = document.getElementById("close-dossier");
        this.setup();
    }

    setup() {
        this.trigger?.addEventListener("click", () => this.open());
        this.closeBtn?.addEventListener("click", () => this.close());
        this.modal?.addEventListener("click", (e) => {
            if (e.target === this.modal) this.close();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modal.classList.contains("active")) this.close();
            if (e.key === "Escape" && document.getElementById("game-modal").classList.contains("active")) {
                window.agentGame?.closeGame();
            }
        });
    }

    open() {
        this.modal.hidden = false;
        this.modal.classList.add("active");
        this.modal.style.display = "flex";
        window.fieldAssets?.soundSystem.playClick();
        window.fieldAssets?.showToast("Dossier accessed");
        this.closeBtn?.focus();
    }

    close() {
        this.modal.classList.remove("active");
        this.modal.hidden = true;
        this.modal.style.display = "none";
        window.fieldAssets?.soundSystem.playClick();
        this.trigger?.focus();
    }
}

document.addEventListener("keydown", (e) => {
    if (e.code === "KeyM" && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        e.preventDefault();
        document.getElementById("music-toggle")?.click();
    }
});

class FactoryTheater {
    constructor() {
        this.banner = document.getElementById("incident-banner");
        this.stage = document.getElementById("hallucination-stage");
        this.swarm = document.getElementById("defense-swarm");
        this.agents = [...document.querySelectorAll(".floor-agent")];
        this.busy = false;
        this.eventTimers = [];
        this.fibs = [
            "The SDK is made of soup.",
            "I invented Kubernetes in 1847.",
            "This meeting could have been a virus.",
            "Deploy Friday. Trust me. I'm an agent.",
            "The password is password, but in Latin.",
            "Production is just staging with confidence.",
            "I read the RFC. It said 'yolo'."
        ];
        this.catches = [
            "Fact Agent: caught it. Confidence was 4%.",
            "Auditor: that claim has no citations. Into /dev/null.",
            "Patch: hallucination quarantined. Carry on.",
            "Sentry: fake intel. Stamp applied: DO NOT SHIP."
        ];
        this.setup();
    }

    setup() {
        document.getElementById("hallucinate-btn")?.addEventListener("click", () => this.runHallucination(true));
        document.getElementById("breach-btn")?.addEventListener("click", () => this.runBreach(true));
        setTimeout(() => this.runHallucination(), 3500);
        this.schedule();
    }

    schedule() {
        const tick = () => {
            const wait = 16000 + Math.random() * 9000;
            this.timer = setTimeout(() => {
                if (
                    !document.getElementById("game-modal")?.classList.contains("active") &&
                    !document.getElementById("video-modal")?.classList.contains("active")
                ) {
                    if (Math.random() > 0.45) this.runHallucination();
                    else this.runBreach();
                }
                tick();
            }, wait);
        };
        tick();
    }

    resetStage() {
        this.eventTimers.forEach(clearTimeout);
        this.eventTimers = [];
        this.stage?.replaceChildren();
        this.swarm?.replaceChildren();
        document.body.classList.remove("breach");
        this.agents.forEach((agent) => agent.classList.remove("defending", "catching"));
        this.busy = false;
    }

    later(fn, ms) {
        const id = setTimeout(fn, ms);
        this.eventTimers.push(id);
        return id;
    }

    announce(text, kind) {
        if (!this.banner) return;
        this.banner.textContent = text;
        this.banner.className = `incident-banner show ${kind}`;
        clearTimeout(this.bannerTimer);
        this.bannerTimer = setTimeout(() => this.banner.classList.remove("show"), 4200);
    }

    runHallucination(force = false) {
        if (!this.stage || (this.busy && !force)) return;
        this.resetStage();
        this.busy = true;
        const fib = this.fibs[Math.floor(Math.random() * this.fibs.length)];
        const catchLine = this.catches[Math.floor(Math.random() * this.catches.length)];
        this.announce(`HALLUCINATION DETECTED: “${fib}”`, "hallucination");

        const floor = document.querySelector(".factory-floor");
        const box = floor?.getBoundingClientRect();
        const originX = box ? box.left + 16 : 40;
        const originY = box ? Math.max(72, box.top - 8) : 120;
        const left = originX + Math.random() * Math.max(40, (box?.width || 280) - 180);
        const top = originY + Math.random() * 48;

        const bubble = document.createElement("div");
        bubble.className = "hallucination-bubble";
        bubble.textContent = fib;
        bubble.style.left = `${left}px`;
        bubble.style.top = `${top}px`;
        this.stage.appendChild(bubble);

        const catcher = document.createElement("div");
        catcher.className = "catcher";
        catcher.textContent = "🔎";
        const fact = this.agents.find((a) => a.dataset.name === "Fact") || this.agents[3];
        const factBox = fact?.getBoundingClientRect();
        catcher.style.left = `${factBox ? factBox.left : 24}px`;
        catcher.style.top = `${factBox ? factBox.top : 400}px`;
        this.stage.appendChild(catcher);
        fact?.classList.add("catching");

        requestAnimationFrame(() => {
            catcher.style.transform = `translate(${left - (factBox?.left || 24)}px, ${top - 28 - (factBox?.top || 400)}px)`;
        });

        this.later(() => {
            bubble.classList.add("caught");
            bubble.textContent = `${fib}  — nope.`;
            const stamp = document.createElement("div");
            stamp.className = "stamp-caught";
            stamp.textContent = "CAUGHT";
            stamp.style.left = `${left + 36}px`;
            stamp.style.top = `${top - 18}px`;
            this.stage.appendChild(stamp);
            window.fieldAssets?.soundSystem.playAchievement();
            this.announce(catchLine, "hallucination");
        }, 900);

        this.later(() => {
            this.stage.replaceChildren();
            fact?.classList.remove("catching");
            this.busy = false;
        }, 4200);
    }

    runBreach(force = false) {
        if (!this.swarm || (this.busy && !force)) return;
        this.resetStage();
        this.busy = true;
        this.announce("SECURITY BREACH: all agents defend the factory.", "breach");
        document.body.classList.add("breach");
        this.agents.forEach((agent) => agent.classList.add("defending"));
        window.fieldAssets?.soundSystem.playExplosion();

        for (let i = 0; i < 18; i++) {
            const virus = document.createElement("div");
            virus.className = "virus-bit";
            virus.textContent = ["🦠", "⚠️", "🎣", "💀"][i % 4];
            virus.style.left = `${8 + Math.random() * 84}vw`;
            virus.style.animationDelay = `${Math.random() * 0.8}s`;
            this.swarm.appendChild(virus);
        }

        this.agents.forEach((agent, i) => {
            this.later(() => {
                const bolt = document.createElement("div");
                bolt.className = "defense-bolt";
                bolt.textContent = ["🛡️", "⚡", "🧱", "🧰"][i % 4];
                const rect = agent.getBoundingClientRect();
                bolt.style.left = `${rect.left + rect.width / 2}px`;
                bolt.style.top = `${rect.top}px`;
                this.swarm.appendChild(bolt);
            }, 180 * i);
        });

        this.later(() => {
            this.announce("Breach contained. Hallucinations also denied entry.", "breach");
            window.fieldAssets?.soundSystem.playPowerUp();
        }, 2200);

        this.later(() => {
            document.body.classList.remove("breach");
            this.agents.forEach((agent) => agent.classList.remove("defending"));
            this.swarm.replaceChildren();
            this.busy = false;
        }, 5000);
    }
}

class VideoBriefingSystem {
    constructor() {
        this.modal = document.getElementById("video-modal");
        this.player = document.getElementById("video-player");
        this.title = document.getElementById("video-title");
        this.watchLink = document.getElementById("video-watch-link");
        this.closeBtn = document.getElementById("close-video");
        this.triggers = [...document.querySelectorAll(".video-brief")];
        this.activeTrigger = null;
        this.setup();
    }

    setup() {
        this.triggers.forEach((trigger) => {
            trigger.addEventListener("click", () => this.open(trigger));
        });
        this.closeBtn?.addEventListener("click", () => this.close());
        this.modal?.addEventListener("click", (e) => {
            if (e.target === this.modal) this.close();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modal?.classList.contains("active")) this.close();
        });
    }

    open(trigger) {
        const videoId = trigger.dataset.videoId;
        const videoTitle = trigger.dataset.videoTitle || "Field reel";
        if (!this.modal || !this.player || !videoId) return;

        this.activeTrigger = trigger;
        this.title.textContent = videoTitle;
        this.player.title = videoTitle;
        this.player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        if (this.watchLink) {
            this.watchLink.href = `https://www.youtube.com/watch?v=${videoId}`;
        }

        this.modal.hidden = false;
        this.modal.classList.add("active");
        this.modal.style.display = "flex";
        window.fieldAssets?.soundSystem.playClick();
        window.fieldAssets?.showToast("Reel loaded");
        this.closeBtn?.focus();
    }

    close() {
        if (!this.modal) return;
        this.modal.classList.remove("active");
        this.modal.hidden = true;
        this.modal.style.display = "none";
        if (this.player) this.player.src = "";
        window.fieldAssets?.soundSystem.playClick();
        this.activeTrigger?.focus();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.fieldAssets = new FieldAssets();
    window.agentGame = new AgentProtocolGame();
    window.dossierSystem = new DossierSystem();
    window.videoBriefing = new VideoBriefingSystem();
    window.factoryTheater = new FactoryTheater();
    document.body.classList.add("loaded");
});
