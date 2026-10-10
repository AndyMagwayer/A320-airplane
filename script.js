/**
 * Pixel Agents - Virtual AI Dev Office Engine
 * Complete interactive canvas simulation with pathfinding, animated pixel characters,
 * realistic dev workflows, sound effects, and office hubs.
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIS (Web Audio API) ---
  class SoundManager {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && typeof AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    playTone(freq, type = 'square', duration = 0.08, vol = 0.05) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // audio context could be waiting for user interaction
      }
    }

    playKeyClick() {
      if (!this.enabled) return;
      const freq = 600 + Math.random() * 400;
      this.playTone(freq, 'triangle', 0.03, 0.02);
    }

    playSuccess() {
      if (!this.enabled) return;
      const notes = [440, 554, 659, 880];
      notes.forEach((f, idx) => {
        setTimeout(() => this.playTone(f, 'square', 0.1, 0.05), idx * 75);
      });
    }

    playAlert() {
      if (!this.enabled) return;
      this.playTone(320, 'sawtooth', 0.12, 0.05);
      setTimeout(() => this.playTone(480, 'sawtooth', 0.15, 0.05), 100);
    }

    playCoffee() {
      if (!this.enabled) return;
      for (let i = 0; i < 4; i++) {
        setTimeout(() => this.playTone(300 - i * 30, 'sine', 0.06, 0.03), i * 60);
      }
    }
  }

  const sound = new SoundManager();

  // --- GRID MAP CONSTANTS ---
  const TILE_SIZE = 32;
  const MAP_COLS = 32;
  const MAP_ROWS = 22;

  // Tile Types
  const TILE = {
    FLOOR_WOOD: 0,
    FLOOR_CARPET: 1,
    FLOOR_TILE: 2,
    WALL_SOLID: 3,
    DESK: 4,
    CHAIR: 5,
    SERVER: 6,
    COFFEE_BAR: 7,
    WHITEBOARD: 8,
    SOFA: 9,
    PLANT: 10,
    WATER_COOLER: 11
  };

  // --- MAP BUILDER ---
  function createOfficeMap() {
    const grid = Array.from({ length: MAP_ROWS }, () => Array(MAP_COLS).fill(TILE.FLOOR_WOOD));
    const solid = Array.from({ length: MAP_ROWS }, () => Array(MAP_COLS).fill(false));

    // Outer Walls
    for (let c = 0; c < MAP_COLS; c++) {
      grid[0][c] = TILE.WALL_SOLID;
      grid[MAP_ROWS - 1][c] = TILE.WALL_SOLID;
      solid[0][c] = true;
      solid[MAP_ROWS - 1][c] = true;
    }
    for (let r = 0; r < MAP_ROWS; r++) {
      grid[r][0] = TILE.WALL_SOLID;
      grid[r][MAP_COLS - 1] = TILE.WALL_SOLID;
      solid[r][0] = true;
      solid[r][MAP_COLS - 1] = true;
    }

    // Interior Divider Walls
    // Server Room (Top Left: cols 1..8, rows 1..7)
    for (let c = 1; c <= 8; c++) {
      grid[7][c] = TILE.WALL_SOLID;
      solid[7][c] = true;
    }
    for (let r = 1; r <= 7; r++) {
      grid[r][8] = TILE.WALL_SOLID;
      solid[r][8] = true;
    }
    // Server room door opening
    grid[7][4] = TILE.FLOOR_TILE;
    solid[7][4] = false;

    // Fill Server room floor with high-tech tiles
    for (let r = 1; r < 7; r++) {
      for (let c = 1; c < 8; c++) {
        grid[r][c] = TILE.FLOOR_TILE;
      }
    }

    // Place Server Racks
    for (let c = 2; c <= 6; c += 2) {
      grid[2][c] = TILE.SERVER;
      solid[2][c] = true;
      grid[3][c] = TILE.SERVER;
      solid[3][c] = true;
    }

    // Meeting Area Carpet (Top Right: cols 20..30, rows 1..9)
    for (let r = 1; r <= 9; r++) {
      for (let c = 20; c <= 30; c++) {
        grid[r][c] = TILE.FLOOR_CARPET;
      }
    }
    // Whiteboard at top of meeting room
    for (let c = 23; c <= 27; c++) {
      grid[1][c] = TILE.WHITEBOARD;
      solid[1][c] = true;
    }
    // Meeting table in center
    for (let r = 4; r <= 6; r++) {
      for (let c = 23; c <= 27; c++) {
        grid[r][c] = TILE.DESK;
        solid[r][c] = true;
      }
    }

    // Breakroom / Coffee Lounge (Bottom Left: cols 1..10, rows 14..20)
    for (let r = 14; r <= 20; r++) {
      for (let c = 1; c <= 10; c++) {
        grid[r][c] = TILE.FLOOR_TILE;
      }
    }
    // Coffee counter along bottom left
    for (let c = 2; c <= 6; c++) {
      grid[15][c] = TILE.COFFEE_BAR;
      solid[15][c] = true;
    }
    grid[15][7] = TILE.WATER_COOLER;
    solid[15][7] = true;

    // Sofa in lounge (Bottom Right)
    for (let c = 24; c <= 28; c++) {
      grid[18][c] = TILE.SOFA;
      solid[18][c] = true;
    }

    // Decorative Plants
    const plantLocations = [
      [1, 9], [1, 19], [13, 1], [13, 10], [14, 11], [20, 29], [1, 29]
    ];
    plantLocations.forEach(([r, c]) => {
      grid[r][c] = TILE.PLANT;
      solid[r][c] = true;
    });

    // Workstation Pods (Main Engineering Bay in center)
    // 6 distinct desk pairs
    const workstations = [
      // Desk 1: Frontend Lead
      { deskR: 10, deskC: 12, chairR: 11, chairC: 12, dir: 'up' },
      // Desk 2: Backend Architect
      { deskR: 10, deskC: 16, chairR: 11, chairC: 16, dir: 'up' },
      // Desk 3: DevOps Specialist
      { deskR: 14, deskC: 12, chairR: 13, chairC: 12, dir: 'down' },
      // Desk 4: QA & Security
      { deskR: 14, deskC: 16, chairR: 13, chairC: 16, dir: 'down' },
      // Desk 5: AI / ML Engineer
      { deskR: 10, deskC: 20, chairR: 11, chairC: 20, dir: 'up' },
      // Desk 6: Spare / Guest Engineer
      { deskR: 14, deskC: 20, chairR: 13, chairC: 20, dir: 'down' }
    ];

    workstations.forEach(ws => {
      grid[ws.deskR][ws.deskC] = TILE.DESK;
      solid[ws.deskR][ws.deskC] = true;
      grid[ws.chairR][ws.chairC] = TILE.CHAIR;
      // Chair is walkable by the agent occupying it
    });

    return { grid, solid, workstations };
  }

  // --- A* PATHFINDING ALGORITHM ---
  function findPath(startCol, startRow, targetCol, targetRow, solidGrid) {
    if (startCol === targetCol && startRow === targetRow) return [];

    // If target is solid, find nearest walkable neighbor
    let target = { c: targetCol, r: targetRow };
    if (solidGrid[target.r] && solidGrid[target.r][target.c]) {
      const neighbors = [
        { c: targetCol, r: targetRow + 1 },
        { c: targetCol, r: targetRow - 1 },
        { c: targetCol + 1, r: targetRow },
        { c: targetCol - 1, r: targetRow }
      ].filter(n => n.r >= 0 && n.r < MAP_ROWS && n.c >= 0 && n.c < MAP_COLS && !solidGrid[n.r][n.c]);
      if (neighbors.length > 0) {
        target = neighbors[0];
      } else {
        return [];
      }
    }

    const key = (c, r) => `${c},${r}`;
    const openSet = [{ c: startCol, r: startRow, g: 0, f: Math.abs(startCol - target.c) + Math.abs(startRow - target.r) }];
    const cameFrom = new Map();
    const gScore = new Map();
    gScore.set(key(startCol, startRow), 0);

    let iterations = 0;
    while (openSet.length > 0 && iterations < 800) {
      iterations++;
      openSet.sort((a, b) => a.f - b.f);
      const current = openSet.shift();

      if (current.c === target.c && current.r === target.r) {
        // Reconstruct path
        const path = [];
        let currKey = key(current.c, current.r);
        while (cameFrom.has(currKey)) {
          const prev = cameFrom.get(currKey);
          path.unshift({ c: current.c, r: current.r });
          currKey = key(prev.c, prev.r);
        }
        return path;
      }

      const neighbors = [
        { c: current.c, r: current.r - 1 },
        { c: current.c, r: current.r + 1 },
        { c: current.c - 1, r: current.r },
        { c: current.c + 1, r: current.r }
      ];

      for (const nb of neighbors) {
        if (nb.r < 0 || nb.r >= MAP_ROWS || nb.c < 0 || nb.c >= MAP_COLS) continue;
        if (solidGrid[nb.r][nb.c]) continue;

        const tentativeG = gScore.get(key(current.c, current.r)) + 1;
        const nbKey = key(nb.c, nb.r);

        if (!gScore.has(nbKey) || tentativeG < gScore.get(nbKey)) {
          cameFrom.set(nbKey, current);
          gScore.set(nbKey, tentativeG);
          const h = Math.abs(nb.c - target.c) + Math.abs(nb.r - target.r);
          const f = tentativeG + h;
          if (!openSet.some(item => item.c === nb.c && item.r === nb.r)) {
            openSet.push({ c: nb.c, r: nb.r, g: tentativeG, f });
          }
        }
      }
    }
    return [];
  }

  // --- AGENT CLASS ---
  class Agent {
    constructor(config) {
      this.id = config.id;
      this.name = config.name;
      this.role = config.role;
      this.avatar = config.avatar || '👾';
      this.color = config.color || '#9333ea';
      this.hairColor = config.hairColor || '#382b24';
      this.skinColor = config.skinColor || '#fcd34d';

      // Position in world pixels
      this.x = (config.col + 0.5) * TILE_SIZE;
      this.y = (config.row + 0.5) * TILE_SIZE;
      this.col = config.col;
      this.row = config.row;

      // Home workstation
      this.homeCol = config.col;
      this.homeRow = config.row;
      this.deskR = config.deskR;
      this.deskC = config.deskC;

      // State Machine
      // 'sitting', 'typing', 'walking', 'idle', 'coffee', 'thinking'
      this.state = 'sitting';
      this.direction = config.facing || 'up'; // 'down', 'up', 'left', 'right'

      // Animation counters
      this.animTick = Math.random() * 100;
      this.walkFrame = 0;
      this.typeFrame = 0;

      // Navigation
      this.path = [];
      this.targetDestination = null;
      this.speed = 1.6;

      // Work & Stats
      this.currentTask = null;
      this.taskProgress = 0;
      this.tasksCompleted = 0;
      this.locWritten = 0;
      this.coffeeCups = 0;
      this.thought = 'Monitoring codebase...';

      // Idle behavior timer
      this.idleTimer = 3 + Math.random() * 8;
    }

    say(text, duration = 3000) {
      this.thought = text;
      showSpeechBubble(this, text, duration);
    }

    navigateTo(targetCol, targetRow, onArrivalState = 'idle') {
      const path = findPath(this.col, this.row, targetCol, targetRow, office.solid);
      if (path.length > 0) {
        this.path = path;
        this.state = 'walking';
        this.onArrivalState = onArrivalState;
      }
    }

    update(dt) {
      this.animTick += dt;

      // 1. Navigation handling
      if (this.state === 'walking' && this.path.length > 0) {
        const nextNode = this.path[0];
        const targetX = (nextNode.c + 0.5) * TILE_SIZE;
        const targetY = (nextNode.r + 0.5) * TILE_SIZE;

        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const dist = Math.hypot(dx, dy);

        // Update direction
        if (Math.abs(dx) > Math.abs(dy)) {
          this.direction = dx > 0 ? 'right' : 'left';
        } else {
          this.direction = dy > 0 ? 'down' : 'up';
        }

        const step = this.speed * simSpeed * (dt * 60);
        if (dist <= step) {
          this.x = targetX;
          this.y = targetY;
          this.col = nextNode.c;
          this.row = nextNode.r;
          this.path.shift();

          if (this.path.length === 0) {
            // Arrived at destination
            this.state = this.onArrivalState || 'idle';
            if (this.state === 'sitting' || this.state === 'typing') {
              this.direction = this.row > this.deskR ? 'up' : 'down';
            }
          }
        } else {
          this.x += (dx / dist) * step;
          this.y += (dy / dist) * step;
          this.col = Math.floor(this.x / TILE_SIZE);
          this.row = Math.floor(this.y / TILE_SIZE);
          this.walkFrame = Math.floor((this.animTick * 8 * simSpeed) % 4);
        }
        return;
      }

      // 2. Typing / Working on task
      if (this.state === 'typing') {
        this.typeFrame = Math.floor((this.animTick * 12 * simSpeed) % 4);
        if (Math.random() < 0.08 * simSpeed) {
          sound.playKeyClick();
          const addedLOC = Math.floor(1 + Math.random() * 4);
          this.locWritten += addedLOC;
          stats.locTotal += addedLOC;
          updateTopStats();
        }

        // Progress task
        if (this.currentTask) {
          this.taskProgress += dt * 0.15 * simSpeed;
          if (this.taskProgress >= 1.0) {
            completeAgentTask(this);
          }
        }
        return;
      }

      // 3. Autonomous Idle wandering
      this.idleTimer -= dt * simSpeed;
      if (this.idleTimer <= 0 && this.state !== 'walking' && !this.currentTask) {
        this.idleTimer = 6 + Math.random() * 12;
        this.performRandomIdleAction();
      }
    }

    performRandomIdleAction() {
      const actions = ['coffee', 'stretch', 'water', 'meeting', 'back_to_desk'];
      const action = actions[Math.floor(Math.random() * actions.length)];

      if (action === 'coffee' && Math.random() < 0.4) {
        this.say('Time for a coffee refuel! ☕', 2500);
        this.navigateTo(4, 16, 'coffee');
        setTimeout(() => {
          if (this.state === 'coffee') {
            sound.playCoffee();
            this.coffeeCups++;
            stats.coffeeTotal++;
            updateTopStats();
            this.say('Ah, perfect roast! ⚡', 2500);
            setTimeout(() => this.navigateTo(this.homeCol, this.homeRow, 'sitting'), 3000);
          }
        }, 6000 / simSpeed);
      } else if (action === 'meeting' && Math.random() < 0.3) {
        this.say('Checking architecture diagram 📋', 2500);
        this.navigateTo(25, 3, 'thinking');
        setTimeout(() => {
          if (this.state === 'thinking') {
            this.say('Makes total sense! 👍', 2500);
            setTimeout(() => this.navigateTo(this.homeCol, this.homeRow, 'sitting'), 4000);
          }
        }, 6000 / simSpeed);
      } else if (action === 'water' && Math.random() < 0.3) {
        this.say('Hydration check 💧', 2000);
        this.navigateTo(7, 16, 'idle');
        setTimeout(() => this.navigateTo(this.homeCol, this.homeRow, 'sitting'), 4000);
      } else {
        // Return to desk
        if (this.col !== this.homeCol || this.row !== this.homeRow) {
          this.navigateTo(this.homeCol, this.homeRow, 'sitting');
        }
      }
    }
  }

  // --- INITIAL AGENT ROSTER ---
  const INITIAL_AGENTS = [
    {
      id: 'alex',
      name: 'Alex Byte',
      role: 'Frontend Lead',
      avatar: '🎨',
      color: '#9333ea',
      hairColor: '#eab308',
      skinColor: '#fcd34d',
      col: 12, row: 11, deskR: 10, deskC: 12, facing: 'up'
    },
    {
      id: 'elena',
      name: 'Elena Kernel',
      role: 'Backend Architect',
      avatar: '⚙️',
      color: '#2563eb',
      hairColor: '#451a03',
      skinColor: '#fed7aa',
      col: 16, row: 11, deskR: 10, deskC: 16, facing: 'up'
    },
    {
      id: 'sam',
      name: 'Sam Pipeline',
      role: 'DevOps Specialist',
      avatar: '🚀',
      color: '#ea580c',
      hairColor: '#1e293b',
      skinColor: '#fcd34d',
      col: 12, row: 13, deskR: 14, deskC: 12, facing: 'down'
    },
    {
      id: 'maya',
      name: 'Maya BugHunter',
      role: 'QA & Security',
      avatar: '🛡️',
      color: '#059669',
      hairColor: '#991b1b',
      skinColor: '#fde047',
      col: 16, row: 13, deskR: 14, deskC: 16, facing: 'down'
    },
    {
      id: 'zero',
      name: 'Zero Synth',
      role: 'AI / ML Engineer',
      avatar: '🧠',
      color: '#0284c7',
      hairColor: '#64748b',
      skinColor: '#fcd34d',
      col: 20, row: 11, deskR: 10, deskC: 20, facing: 'up'
    }
  ];

  // --- STATE ---
  let office = createOfficeMap();
  let agents = INITIAL_AGENTS.map(cfg => new Agent(cfg));
  let selectedAgent = null;
  let simSpeed = 1.0;
  let stats = {
    tasksTotal: 0,
    coffeeTotal: 0,
    locTotal: 0
  };

  // Camera & Viewport
  let camera = {
    x: (MAP_COLS * TILE_SIZE) / 2,
    y: (MAP_ROWS * TILE_SIZE) / 2,
    zoom: 1.25,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    camStartX: 0,
    camStartY: 0
  };

  // DOM Elements
  const canvas = document.getElementById('office-canvas');
  const ctx = canvas.getContext('2d');
  const viewport = document.getElementById('viewport-container');
  const bubblesLayer = document.getElementById('speech-bubbles-layer');
  const terminalStream = document.getElementById('terminal-stream');
  const agentsListEl = document.getElementById('agents-list');
  const agentSelect = document.getElementById('agent-select');

  // --- CANVAS RESIZING ---
  function resizeCanvas() {
    canvas.width = viewport.clientWidth * window.devicePixelRatio;
    canvas.height = viewport.clientHeight * window.devicePixelRatio;
    ctx.imageSmoothingEnabled = false; // Keep pixel art sharp!
  }
  window.addEventListener('resize', resizeCanvas);

  // --- DRAWING PROCEDURAL PIXEL TILES ---
  function drawMap(ctx) {
    for (let r = 0; r < MAP_ROWS; r++) {
      for (let c = 0; c < MAP_COLS; c++) {
        const tile = office.grid[r][c];
        const px = c * TILE_SIZE;
        const py = r * TILE_SIZE;

        switch (tile) {
          case TILE.FLOOR_WOOD:
            // Parquet wood slats
            ctx.fillStyle = (r + c) % 2 === 0 ? '#4a3728' : '#523e2d';
            ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = '#3d2d20';
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 0.5, py + 0.5, TILE_SIZE, TILE_SIZE);
            break;

          case TILE.FLOOR_CARPET:
            // Soft executive carpet with subtle speckle
            ctx.fillStyle = (r + c) % 2 === 0 ? '#2d334d' : '#292f47';
            ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = '#373e5c';
            ctx.fillRect(px + 8, py + 8, 4, 4);
            ctx.fillRect(px + 20, py + 20, 4, 4);
            break;

          case TILE.FLOOR_TILE:
            // Clean laboratory / kitchen tile
            ctx.fillStyle = (r + c) % 2 === 0 ? '#2e3440' : '#3b4252';
            ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = '#242933';
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 0.5, py + 0.5, TILE_SIZE, TILE_SIZE);
            break;

          case TILE.WALL_SOLID:
            // Retro brick / panel wall
            ctx.fillStyle = '#1e2030';
            ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = '#2d314d';
            ctx.fillRect(px + 2, py + 2, TILE_SIZE - 4, TILE_SIZE - 4);
            // Baseboard trim
            ctx.fillStyle = '#545c85';
            ctx.fillRect(px, py + TILE_SIZE - 4, TILE_SIZE, 4);
            break;

          case TILE.DESK:
            // Clean modern desk with dual glowing monitors
            ctx.fillStyle = '#3b2f2f';
            ctx.fillRect(px + 2, py + 4, TILE_SIZE - 4, TILE_SIZE - 8);
            ctx.fillStyle = '#5c4033';
            ctx.fillRect(px + 4, py + 6, TILE_SIZE - 8, TILE_SIZE - 12);
            // Monitor stand & screens
            ctx.fillStyle = '#111827';
            ctx.fillRect(px + 4, py + 4, 11, 8);
            ctx.fillRect(px + 17, py + 4, 11, 8);
            // Glowing screens (animated matrix code effect)
            const glow1 = (Math.sin(Date.now() * 0.005 + px) + 1) * 0.5;
            ctx.fillStyle = glow1 > 0.5 ? '#10b981' : '#059669';
            ctx.fillRect(px + 5, py + 5, 9, 6);
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(px + 18, py + 5, 9, 6);
            // Keyboard
            ctx.fillStyle = '#9ca3af';
            ctx.fillRect(px + 10, py + 16, 12, 4);
            break;

          case TILE.CHAIR:
            // Ergonomic office swivel chair
            ctx.fillStyle = '#1f2937';
            ctx.beginPath();
            ctx.arc(px + 16, py + 16, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#4b5563';
            ctx.beginPath();
            ctx.arc(px + 16, py + 16, 5, 0, Math.PI * 2);
            ctx.fill();
            break;

          case TILE.SERVER:
            // High-tech server rack cabinet with flashing LEDs
            ctx.fillStyle = '#111827';
            ctx.fillRect(px + 2, py + 2, TILE_SIZE - 4, TILE_SIZE - 4);
            ctx.fillStyle = '#1f2937';
            ctx.fillRect(px + 4, py + 4, TILE_SIZE - 8, TILE_SIZE - 8);
            // Blinking activity LEDs
            const t = Date.now() * 0.008;
            for (let led = 0; led < 3; led++) {
              const on = Math.sin(t + led * 2 + px) > 0;
              ctx.fillStyle = on ? (led === 0 ? '#10b981' : led === 1 ? '#38bdf8' : '#f59e0b') : '#374151';
              ctx.fillRect(px + 6 + led * 7, py + 8, 4, 3);
            }
            // Vents
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(px + 6, py + 16, TILE_SIZE - 12, 2);
            ctx.fillRect(px + 6, py + 20, TILE_SIZE - 12, 2);
            ctx.fillRect(px + 6, py + 24, TILE_SIZE - 12, 2);
            break;

          case TILE.COFFEE_BAR:
            // Stainless steel espresso machine on counter
            ctx.fillStyle = '#78716c';
            ctx.fillRect(px + 2, py + 6, TILE_SIZE - 4, TILE_SIZE - 10);
            ctx.fillStyle = '#a8a29e';
            ctx.fillRect(px + 6, py + 2, 20, 14);
            // Steam nozzle & dials
            ctx.fillStyle = '#ef4444';
            ctx.fillRect(px + 8, py + 6, 3, 3);
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(px + 13, py + 6, 3, 3);
            // Little mug
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(px + 18, py + 16, 6, 5);
            break;

          case TILE.WATER_COOLER:
            // Water bottle dispenser with bubbles
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(px + 16, py + 10, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#f1f5f9';
            ctx.fillRect(px + 10, py + 16, 12, 12);
            ctx.fillStyle = '#0284c7';
            ctx.fillRect(px + 14, py + 18, 4, 4);
            break;

          case TILE.WHITEBOARD:
            // Architecture whiteboard with colorful sticky notes
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(px + 2, py + 4, TILE_SIZE - 4, TILE_SIZE - 8);
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 2, py + 4, TILE_SIZE - 4, TILE_SIZE - 8);
            // Sticky notes (yellow, cyan, pink)
            ctx.fillStyle = '#facc15';
            ctx.fillRect(px + 5, py + 8, 5, 5);
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(px + 13, py + 8, 5, 5);
            ctx.fillStyle = '#f43f5e';
            ctx.fillRect(px + 21, py + 8, 5, 5);
            // Diagrams
            ctx.strokeStyle = '#475569';
            ctx.beginPath();
            ctx.moveTo(px + 6, py + 18);
            ctx.lineTo(px + 16, py + 18);
            ctx.lineTo(px + 24, py + 22);
            ctx.stroke();
            break;

          case TILE.SOFA:
            // Cozy leather lounge sofa
            ctx.fillStyle = '#854d0e';
            ctx.fillRect(px + 2, py + 6, TILE_SIZE - 4, TILE_SIZE - 12);
            ctx.fillStyle = '#a16207';
            ctx.fillRect(px + 4, py + 4, TILE_SIZE - 8, 6);
            break;

          case TILE.PLANT:
            // Potted office plant
            ctx.fillStyle = '#b45309';
            ctx.fillRect(px + 10, py + 18, 12, 10);
            ctx.fillStyle = '#15803d';
            ctx.beginPath();
            ctx.arc(px + 16, py + 14, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#22c55e';
            ctx.beginPath();
            ctx.arc(px + 14, py + 12, 4, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
      }
    }
  }

  // --- DRAWING ANIMATED PIXEL AGENT SPRITE ---
  function drawAgent(ctx, agent) {
    const x = Math.round(agent.x);
    const y = Math.round(agent.y);

    ctx.save();

    // Selection highlight ring
    if (selectedAgent === agent) {
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.arc(x, y + 2, 16, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Shadow under character
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse(x, y + 11, 9, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Walking leg bobbing
    let legOffset = 0;
    let bodyBob = 0;
    if (agent.state === 'walking') {
      bodyBob = agent.walkFrame % 2 === 0 ? -1 : 0;
      legOffset = (agent.walkFrame === 1 ? -2 : agent.walkFrame === 3 ? 2 : 0);
    }

    // Typing arm animation
    let typeArmOffset = 0;
    if (agent.state === 'typing') {
      typeArmOffset = (agent.typeFrame % 2 === 0 ? -1 : 1);
    }

    const by = y + bodyBob;

    // --- CHARACTER PIXEL BODY ---
    // 1. Legs / Pants (Dark jeans)
    ctx.fillStyle = '#1e293b';
    if (agent.direction === 'left' || agent.direction === 'right') {
      ctx.fillRect(x - 3, by + 5, 6, 7);
      if (agent.state === 'walking') {
        ctx.fillRect(x - 4 + legOffset, by + 9, 4, 3);
      }
    } else {
      ctx.fillRect(x - 5, by + 5 + (legOffset > 0 ? -1 : 0), 4, 7);
      ctx.fillRect(x + 1, by + 5 + (legOffset < 0 ? -1 : 0), 4, 7);
    }

    // 2. Torso / Outfit (Agent color hoodie/jacket)
    ctx.fillStyle = agent.color;
    ctx.fillRect(x - 6, by - 4, 12, 10);

    // Collar / Zipper detail
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(x - 1, by - 4, 2, 8);

    // Arms
    ctx.fillStyle = agent.color;
    if (agent.state === 'typing') {
      // Reaching out onto desk
      ctx.fillRect(x - 7, by - 1 + typeArmOffset, 4, 5);
      ctx.fillRect(x + 3, by - 1 - typeArmOffset, 4, 5);
      // Hands
      ctx.fillStyle = agent.skinColor;
      ctx.fillRect(x - 6, by + 3 + typeArmOffset, 3, 3);
      ctx.fillRect(x + 3, by + 3 - typeArmOffset, 3, 3);
    } else if (agent.state === 'coffee') {
      // Holding mug
      ctx.fillRect(x + 3, by - 2, 4, 5);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x + 4, by + 1, 5, 5); // Little white mug
      // Steam
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fillRect(x + 5, by - 3 - (agent.animTick % 3), 2, 2);
    } else {
      ctx.fillRect(x - 8, by - 2, 3, 7);
      ctx.fillRect(x + 5, by - 2, 3, 7);
      ctx.fillStyle = agent.skinColor;
      ctx.fillRect(x - 8, by + 4, 3, 3);
      ctx.fillRect(x + 5, by + 4, 3, 3);
    }

    // 3. Head & Face
    ctx.fillStyle = agent.skinColor;
    ctx.fillRect(x - 5, by - 13, 10, 9);

    // Eyes
    if (agent.direction === 'down' || agent.direction === 'left' || agent.direction === 'right') {
      ctx.fillStyle = '#111827';
      if (agent.direction === 'down') {
        ctx.fillRect(x - 3, by - 9, 2, 2);
        ctx.fillRect(x + 1, by - 9, 2, 2);
      } else if (agent.direction === 'left') {
        ctx.fillRect(x - 4, by - 9, 2, 2);
      } else if (agent.direction === 'right') {
        ctx.fillRect(x + 2, by - 9, 2, 2);
      }
    }

    // 4. Hair / Hat
    ctx.fillStyle = agent.hairColor;
    ctx.fillRect(x - 6, by - 16, 12, 5);
    if (agent.direction === 'down') {
      ctx.fillRect(x - 6, by - 13, 3, 4);
      ctx.fillRect(x + 3, by - 13, 3, 4);
    } else if (agent.direction === 'left') {
      ctx.fillRect(x + 2, by - 13, 4, 5);
    } else if (agent.direction === 'right') {
      ctx.fillRect(x - 6, by - 13, 4, 5);
    } else {
      // Facing up (back of head)
      ctx.fillRect(x - 6, by - 13, 12, 7);
    }

    // Overhead Status Indicators
    if (agent.state === 'typing') {
      // Code sparks
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(x - 8, by - 20, 2, 2);
      ctx.fillRect(x + 7, by - 21, 2, 2);
    } else if (agent.state === 'thinking') {
      // Lightbulb / question mark
      ctx.fillStyle = '#facc15';
      ctx.fillRect(x - 2, by - 24, 4, 5);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x - 1, by - 23, 2, 2);
    }

    ctx.restore();
  }

  // --- HTML SPEECH BUBBLES ---
  function showSpeechBubble(agent, text, duration = 3000) {
    const existing = document.getElementById(`bubble-${agent.id}`);
    if (existing) existing.remove();

    const bubble = document.createElement('div');
    bubble.id = `bubble-${agent.id}`;
    bubble.className = 'pixel-speech-bubble';
    bubble.textContent = text;
    bubblesLayer.appendChild(bubble);

    const removeTimeout = setTimeout(() => {
      bubble.remove();
    }, duration);

    bubble._agent = agent;
    bubble._timeout = removeTimeout;
  }

  function updateSpeechBubblesPosition() {
    const bubbles = bubblesLayer.querySelectorAll('.pixel-speech-bubble');
    bubbles.forEach(bubble => {
      const ag = bubble._agent;
      if (!ag) return;
      const screenPos = worldToScreen(ag.x, ag.y - 22);
      bubble.style.left = `${screenPos.x}px`;
      bubble.style.top = `${screenPos.y}px`;
    });
  }

  // --- COORDINATE PROJECTIONS ---
  function worldToScreen(wx, wy) {
    const viewW = viewport.clientWidth;
    const viewH = viewport.clientHeight;
    return {
      x: (wx - camera.x) * camera.zoom + viewW / 2,
      y: (wy - camera.y) * camera.zoom + viewH / 2
    };
  }

  function screenToWorld(sx, sy) {
    const viewW = viewport.clientWidth;
    const viewH = viewport.clientHeight;
    return {
      x: (sx - viewW / 2) / camera.zoom + camera.x,
      y: (sy - viewH / 2) / camera.zoom + camera.y
    };
  }

  // --- TERMINAL LOGGING ---
  function logTerminal(text, type = 'sys') {
    const line = document.createElement('div');
    line.className = `term-line ${type}`;
    line.textContent = text;
    terminalStream.appendChild(line);
    terminalStream.scrollTop = terminalStream.scrollHeight;
  }

  // --- TASK EXECUTION WORKFLOW ---
  const TASK_TEMPLATES = {
    'auth': {
      steps: [
        'git checkout -b feat/jwt-oauth-service',
        'Parsing auth middleware & security headers',
        'Implementing refresh token rotation in /api/auth.ts',
        'Hashing passwords with Argon2id + salt rounds',
        'Running vulnerability scan: 0 vulnerabilities found',
        'PR #142 approved & merged to main!'
      ],
      role: 'Backend Architect'
    },
    '3d': {
      steps: [
        'git checkout -b feat/webgl-shader-opt',
        'Inspecting Three.js draw calls and buffer geometries',
        'Optimizing vertex shaders & Level of Detail (LOD)',
        'Benchmarking render loop: 60 FPS locked',
        'Smoke test complete: zero dropped frames'
      ],
      role: 'Frontend Lead'
    },
    'k8s': {
      steps: [
        'git checkout -b infra/k8s-helm-deploy',
        'Configuring deployment.yaml & ingress controller',
        'Provisioning multi-zone cluster on Google Cloud',
        'Rolling out pods: 5/5 healthy, readiness probes OK',
        'Auto-scaler active: zero downtime migration'
      ],
      role: 'DevOps Specialist'
    },
    'test': {
      steps: [
        'git checkout -b test/e2e-suite-coverage',
        'Launching headless Chromium runner for Cypress tests',
        'Testing user login, session recovery, edge cases',
        'All 48 test suites passed! Code coverage: 96.4%',
        'Test report uploaded to CI artifacts'
      ],
      role: 'QA & Security'
    },
    'default': {
      steps: [
        'git checkout -b feat/core-system-improvement',
        'Analyzing AST & refactoring legacy modules',
        'Writing clean functional components & unit tests',
        'Running compiler and build bundle analysis',
        'All checks passed! Deployed to production'
      ],
      role: 'Frontend Lead'
    }
  };

  function assignTask(taskName, targetAgentId = 'auto') {
    let agent = null;

    if (targetAgentId === 'auto') {
      const lower = taskName.toLowerCase();
      // Match keyword to specialized agent
      if (lower.includes('auth') || lower.includes('database') || lower.includes('redis') || lower.includes('api')) {
        agent = agents.find(a => a.role.includes('Backend')) || agents[0];
      } else if (lower.includes('3d') || lower.includes('render') || lower.includes('ui') || lower.includes('front')) {
        agent = agents.find(a => a.role.includes('Frontend')) || agents[0];
      } else if (lower.includes('k8s') || lower.includes('deploy') || lower.includes('docker') || lower.includes('infra')) {
        agent = agents.find(a => a.role.includes('DevOps')) || agents[0];
      } else if (lower.includes('test') || lower.includes('security') || lower.includes('vulnerability') || lower.includes('qa')) {
        agent = agents.find(a => a.role.includes('QA')) || agents[0];
      } else {
        // Pick least busy agent
        agent = agents.slice().sort((a, b) => (a.currentTask ? 1 : 0) - (b.currentTask ? 1 : 0))[0];
      }
    } else {
      agent = agents.find(a => a.id === targetAgentId) || agents[0];
    }

    sound.playAlert();
    agent.currentTask = taskName;
    agent.taskProgress = 0;
    agent.say(`I'm on it: "${taskName}"! 🚀`, 3500);

    logTerminal(`[DISPATCH] Assigned "${taskName}" to ${agent.name} (${agent.role})`, 'agent');

    // Send agent to workstation
    agent.navigateTo(agent.homeCol, agent.homeRow, 'typing');

    // Step-by-step terminal simulation
    const key = Object.keys(TASK_TEMPLATES).find(k => taskName.toLowerCase().includes(k)) || 'default';
    const steps = TASK_TEMPLATES[key].steps;

    steps.forEach((step, idx) => {
      setTimeout(() => {
        if (agent.currentTask === taskName) {
          logTerminal(`  [${agent.name}] ${step}`, idx % 2 === 0 ? 'code' : 'test');
        }
      }, (idx + 1) * 2200 / simSpeed);
    });

    updateRosterUI();
  }

  function completeAgentTask(agent) {
    const taskName = agent.currentTask;
    agent.currentTask = null;
    agent.taskProgress = 0;
    agent.tasksCompleted++;
    stats.tasksTotal++;

    sound.playSuccess();
    agent.say('Task complete & merged! 🎉', 3000);
    logTerminal(`[SUCCESS] ✔ ${agent.name} finished: "${taskName}"!`, 'success');

    updateTopStats();
    updateRosterUI();

    // Reward: go grab a celebration coffee
    setTimeout(() => {
      if (!agent.currentTask) {
        agent.say('Heading to coffee lounge ☕', 2000);
        agent.navigateTo(4, 16, 'coffee');
      }
    }, 2000);
  }

  // --- STATS & ROSTER UI SYNC ---
  function updateTopStats() {
    document.getElementById('stat-agent-count').textContent = `${agents.length} Agents`;
    document.getElementById('stat-tasks-done').textContent = `${stats.tasksTotal} Tasks`;
    document.getElementById('stat-coffee-count').textContent = `${stats.coffeeTotal} Cups`;
    document.getElementById('stat-loc-count').textContent = `${stats.locTotal} LOC`;
    document.getElementById('roster-active-badge').textContent = `${agents.length} ACTIVE`;
  }

  function updateRosterUI() {
    agentsListEl.innerHTML = '';
    agentSelect.innerHTML = '<option value="auto">🤖 Auto (Best Available Agent)</option>';

    agents.forEach(ag => {
      // Option in dropdown
      const opt = document.createElement('option');
      opt.value = ag.id;
      opt.textContent = `${ag.avatar} ${ag.name} (${ag.role})`;
      agentSelect.appendChild(opt);

      // Card in roster sidebar
      const card = document.createElement('div');
      card.className = `agent-card ${selectedAgent === ag ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="agent-avatar-box" style="border-color:${ag.color};">
          <span>${ag.avatar}</span>
          <div class="agent-status-dot ${ag.state}"></div>
        </div>
        <div class="agent-info">
          <div class="agent-name-row">
            <span class="agent-name">${ag.name}</span>
            <span class="agent-loc-badge">${ag.locWritten} LOC</span>
          </div>
          <div class="agent-role">${ag.role}</div>
          <div class="agent-current-action">
            ${ag.currentTask ? `⚡ Working: ${ag.currentTask}` : `Status: ${ag.state.toUpperCase()}`}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        selectAgent(ag);
      });

      agentsListEl.appendChild(card);
    });
  }

  function selectAgent(ag) {
    selectedAgent = ag;
    updateRosterUI();
    openAgentModal(ag);
  }

  // --- MODAL CONTROLS ---
  const modal = document.getElementById('agent-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');

  function openAgentModal(ag) {
    document.getElementById('modal-agent-avatar').textContent = ag.avatar;
    document.getElementById('modal-agent-name').textContent = ag.name;
    document.getElementById('modal-agent-role').textContent = ag.role;
    document.getElementById('modal-stat-status').textContent = ag.state.toUpperCase();
    document.getElementById('modal-stat-task').textContent = ag.currentTask || 'Idle (Ready)';
    document.getElementById('modal-stat-loc').textContent = `${ag.locWritten} lines`;
    document.getElementById('modal-stat-coffee').textContent = `${ag.coffeeCups} cups`;
    document.getElementById('modal-agent-thought').textContent = `"${ag.thought}"`;

    // Action buttons
    document.getElementById('modal-btn-coffee').onclick = () => {
      ag.say('Heading for coffee! ☕', 2000);
      ag.navigateTo(4, 16, 'coffee');
      closeAgentModal();
    };
    document.getElementById('modal-btn-work').onclick = () => {
      ag.say('Heading to desk! 💻', 2000);
      ag.navigateTo(ag.homeCol, ag.homeRow, 'sitting');
      closeAgentModal();
    };
    document.getElementById('modal-btn-wander').onclick = () => {
      ag.say('Taking a quick walk 🚶', 2000);
      ag.navigateTo(25, 6, 'idle');
      closeAgentModal();
    };

    modal.classList.remove('hidden');
  }

  function closeAgentModal() {
    modal.classList.add('hidden');
  }
  btnCloseModal.addEventListener('click', closeAgentModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAgentModal();
  });

  // Hire Agent Modal
  const hireModal = document.getElementById('hire-modal');
  const btnHire = document.getElementById('btn-hire');
  const btnCloseHire = document.getElementById('btn-close-hire');
  const hireForm = document.getElementById('hire-form');
  let chosenColor = '#9333ea';

  btnHire.addEventListener('click', () => hireModal.classList.remove('hidden'));
  btnCloseHire.addEventListener('click', () => hireModal.classList.add('hidden'));
  hireModal.addEventListener('click', (e) => {
    if (e.target === hireModal) hireModal.classList.add('hidden');
  });

  document.querySelectorAll('.color-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      chosenColor = sw.dataset.color;
    });
  });

  hireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('hire-name').value.trim();
    const role = document.getElementById('hire-role').value;
    if (!name) return;

    // Find unoccupied workstation or create nearby
    const occupiedWorkstations = new Set(agents.map(a => `${a.homeCol},${a.homeRow}`));
    const freeWs = office.workstations.find(ws => !occupiedWorkstations.has(`${ws.chairC},${ws.chairR}`))
      || { chairC: 22, chairR: 11, deskC: 22, deskR: 10, dir: 'up' };

    const avatarsByRole = {
      'Frontend Lead': '🎨',
      'Backend Architect': '⚙️',
      'DevOps Specialist': '🚀',
      'QA & Security': '🛡️',
      'AI / ML Engineer': '🧠'
    };

    const newAgent = new Agent({
      id: `agent_${Date.now()}`,
      name: name,
      role: role,
      avatar: avatarsByRole[role] || '👾',
      color: chosenColor,
      hairColor: '#374151',
      skinColor: '#fcd34d',
      col: freeWs.chairC,
      row: freeWs.chairR,
      deskC: freeWs.deskC,
      deskR: freeWs.deskR,
      facing: freeWs.dir
    });

    agents.push(newAgent);
    sound.playSuccess();
    logTerminal(`[TEAM] Hired new agent: ${newAgent.name} as ${newAgent.role}! 🎉`, 'agent');
    newAgent.say(`Hello team! Ready to ship code. 💻`, 3000);

    updateTopStats();
    updateRosterUI();
    hireModal.classList.add('hidden');
    hireForm.reset();
  });

  // --- TASK DISPATCHER FORM ---
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = taskInput.value.trim();
    if (!val) return;
    assignTask(val, agentSelect.value);
    taskInput.value = '';
  });

  // Quick Preset Chips
  document.querySelectorAll('.preset-chips .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      taskInput.value = btn.dataset.task;
      assignTask(btn.dataset.task, agentSelect.value);
    });
  });

  // Quick Hub Buttons
  document.querySelectorAll('.hub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const hub = btn.dataset.hub;
      const ag = selectedAgent || agents[Math.floor(Math.random() * agents.length)];
      if (hub === 'coffee') {
        ag.say('Visiting the coffee bar! ☕', 2000);
        ag.navigateTo(4, 16, 'coffee');
      } else if (hub === 'servers') {
        ag.say('Running server diagnostics 🖥️', 2000);
        ag.navigateTo(4, 4, 'typing');
        logTerminal(`[SERVER] ${ag.name} checking CPU load: normal (14%)`, 'code');
      } else if (hub === 'meeting') {
        ag.say('Reviewing sprint whiteboard 📋', 2000);
        ag.navigateTo(25, 3, 'thinking');
      } else if (hub === 'lounge') {
        ag.say('Taking five in the lounge 🛋️', 2000);
        ag.navigateTo(26, 17, 'idle');
      }
    });
  });

  // All Hands Coffee Break
  document.getElementById('btn-coffee-break').addEventListener('click', () => {
    sound.playCoffee();
    logTerminal(`[ANNOUNCEMENT] 📢 All hands coffee break called!`, 'agent');
    agents.forEach((ag, idx) => {
      setTimeout(() => {
        ag.say('Coffee break! ☕', 2500);
        ag.navigateTo(2 + (idx % 6), 16, 'coffee');
      }, idx * 300);
    });
  });

  // Clear Terminal Button
  document.getElementById('btn-clear-terminal').addEventListener('click', () => {
    terminalStream.innerHTML = '';
    logTerminal(`[SYSTEM] Terminal buffer cleared.`, 'sys');
  });

  // --- CONTROLS: THEME, SOUND, SPEED, ZOOM ---
  const btnTheme = document.getElementById('btn-theme-toggle');
  const themes = ['theme-day', 'theme-cyber', 'theme-cozy'];
  let currentThemeIdx = 0;
  btnTheme.addEventListener('click', () => {
    document.body.classList.remove(themes[currentThemeIdx]);
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIdx]);
    sound.playTone(520, 'sine', 0.05, 0.03);
  });

  const btnSound = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  btnSound.addEventListener('click', () => {
    sound.enabled = !sound.enabled;
    soundIcon.textContent = sound.enabled ? '🔊' : '🔇';
    if (sound.enabled) sound.playTone(600, 'triangle', 0.05, 0.03);
  });

  const btnSpeed = document.getElementById('btn-speed');
  const speedLabel = document.getElementById('speed-label');
  const speeds = [1.0, 2.0, 4.0];
  let speedIdx = 0;
  btnSpeed.addEventListener('click', () => {
    speedIdx = (speedIdx + 1) % speeds.length;
    simSpeed = speeds[speedIdx];
    speedLabel.textContent = `${simSpeed}x SPD`;
    sound.playTone(400 + simSpeed * 100, 'square', 0.05, 0.03);
  });

  document.getElementById('btn-zoom-in').addEventListener('click', () => {
    camera.zoom = Math.min(camera.zoom + 0.25, 2.5);
  });
  document.getElementById('btn-zoom-out').addEventListener('click', () => {
    camera.zoom = Math.max(camera.zoom - 0.25, 0.6);
  });
  document.getElementById('btn-reset-cam').addEventListener('click', () => {
    camera.x = (MAP_COLS * TILE_SIZE) / 2;
    camera.y = (MAP_ROWS * TILE_SIZE) / 2;
    camera.zoom = 1.25;
  });

  // Viewport Drag to Pan
  viewport.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      camera.isDragging = true;
      camera.dragStartX = e.clientX;
      camera.dragStartY = e.clientY;
      camera.camStartX = camera.x;
      camera.camStartY = camera.y;
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (camera.isDragging) {
      const dx = (e.clientX - camera.dragStartX) / camera.zoom;
      const dy = (e.clientY - camera.dragStartY) / camera.zoom;
      camera.x = camera.camStartX - dx;
      camera.y = camera.camStartY - dy;
    }
  });

  window.addEventListener('mouseup', () => {
    camera.isDragging = false;
  });

  // Canvas Click to select character or inspect tile
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const worldPos = screenToWorld(mouseX, mouseY);

    // Check if clicked an agent
    let clickedAgent = null;
    for (const ag of agents) {
      const dist = Math.hypot(worldPos.x - ag.x, worldPos.y - ag.y);
      if (dist < 18) {
        clickedAgent = ag;
        break;
      }
    }

    if (clickedAgent) {
      sound.playTone(600, 'triangle', 0.05, 0.03);
      selectAgent(clickedAgent);
    } else {
      // Clicked on floor or furniture
      const tileC = Math.floor(worldPos.x / TILE_SIZE);
      const tileR = Math.floor(worldPos.y / TILE_SIZE);
      if (tileR >= 0 && tileR < MAP_ROWS && tileC >= 0 && tileC < MAP_COLS) {
        const t = office.grid[tileR][tileC];
        if (t === TILE.COFFEE_BAR) {
          const ag = selectedAgent || agents[0];
          ag.say('Grabbing an espresso ☕', 2000);
          ag.navigateTo(tileC, tileR + 1, 'coffee');
        } else if (t === TILE.SERVER) {
          const ag = selectedAgent || agents[0];
          ag.say('Inspecting server rack 🖥️', 2000);
          ag.navigateTo(tileC, tileR + 1, 'typing');
        } else if (selectedAgent && !office.solid[tileR][tileC]) {
          selectedAgent.say('Walking here 🚶', 1500);
          selectedAgent.navigateTo(tileC, tileR, 'idle');
        }
      }
    }
  });

  // --- MAIN SIMULATION & RENDER LOOP ---
  let lastTime = performance.now();

  function gameLoop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // Update agents
    agents.forEach(ag => ag.update(dt));

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply camera transform
    ctx.save();
    const viewW = viewport.clientWidth;
    const viewH = viewport.clientHeight;
    ctx.translate(viewW / 2, viewH / 2);
    ctx.scale(camera.zoom, camera.zoom);
    ctx.translate(-camera.x, -camera.y);

    // 1. Draw Office Tile Map
    drawMap(ctx);

    // 2. Draw Agents (sorted by Y for proper 2.5D layering)
    const sortedAgents = agents.slice().sort((a, b) => a.y - b.y);
    sortedAgents.forEach(ag => drawAgent(ctx, ag));

    ctx.restore();

    // 3. Update HTML Speech bubbles position
    updateSpeechBubblesPosition();

    requestAnimationFrame(gameLoop);
  }

  // --- INITIALIZATION ---
  resizeCanvas();
  updateTopStats();
  updateRosterUI();

  // Welcome announcement
  setTimeout(() => {
    agents[0].say('Welcome to Pixel Agents! 👾', 3000);
    agents[1].say('Workstations initialized 💻', 3000);
  }, 600);

  requestAnimationFrame(gameLoop);

})();