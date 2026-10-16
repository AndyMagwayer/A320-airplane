# Airbus A320 3D Interactive Showcase

![A320 Showcase Preview](Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 passenger airliner rendered in real-time WebGL using **Three.js** and choreographed using **GSAP ScrollTrigger**.

- **Live Demo:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **Subject:** Airbus A320 twin-engine commercial airliner
- **Core Tech:** Three.js (WebGL), GSAP ScrollTrigger, Vanilla JavaScript (ES6+), CSS3, Express.js

---

## Overview

This project provides an immersive, scroll-driven visual journey of an Airbus A320. As visitors scroll down the page, GSAP ScrollTrigger interpolates camera translations, field-of-view perspectives, and airframe rotations (pitch, roll, and yaw) against layered atmospheric visual backdrops.

### Key Highlights

- **Hardware-Accelerated WebGL Rendering**: Loads and renders a custom 3D model (`assets/plane.obj`) via Three.js with directional lighting and ambient illumination.
- **Scroll-Synchronized Flight Dynamics**: GSAP timelines bound to page scroll control continuous aircraft attitude changes, simulating climbs, banks, and cruising phases.
- **Layered Atmospheric Scenery**: Integrates sky, cloud vector graphics (`assets/clouds.svg`), and aerial terrain textures (`assets/ground.jpg`, `assets/sunset.jpg`) for depth parallax.
- **Procedural Model Generator**: Includes a standalone Node.js utility (`scripts/generate_plane_obj.js`) that procedurally computes and exports the Wavefront OBJ geometry for the fuselage, wings, horizontal/vertical stabilizers, and turbofan engines.
- **Dual Deployment Modes**: Can be served through the built-in Express server (`server.js`) or deployed directly to any static host (Netlify, Vercel, GitHub Pages).

---

## Technology Stack

| Layer | Technologies |
|---|---|
| **3D Rendering** | [Three.js](https://threejs.org/) (WebGLRenderer, PerspectiveCamera, Scene, OBJLoader, DirectionalLight, AmbientLight) |
| **Animation & Timing** | [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/) plugin |
| **Frontend** | Vanilla JavaScript (ES6+), HTML5 Canvas, responsive CSS3 |
| **Server / Runtime** | [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/), [Express.js](https://expressjs.com/) |
| **Model Tooling** | Procedural 3D OBJ mesh generator (`scripts/generate_plane_obj.js`) |

---

## Project Structure

```text
A320-airplane/
├── .env.example             # Example environment file (PORT definition)
├── assets/                  # Production 3D model and image assets
│   ├── clouds.svg           # Vector cloud overlay
│   ├── ground.jpg           # Aerial terrain ground texture
│   ├── plane.obj            # 3D Wavefront OBJ aircraft model
│   └── sunset.jpg           # Sunset sky background texture
├── scripts/
│   └── generate_plane_obj.js # Procedural generator for assets/plane.obj
├── src/
│   └── assets/images/       # High-resolution source textures and landscapes
├── index.html               # Main application entry point and WebGL canvas mounting
├── main.css                 # Viewport layout, overlay styling, and canvas positioning
├── script.js                # Scene initialization, model loading, and GSAP timeline logic
├── server.js                # Express static server
├── metadata.json            # Repository project metadata
├── package.json             # Project scripts and dependency declarations
└── bun.lock                 # Bun dependency lockfile
```

---

## Prerequisites

- **Node.js** (v18.0.0 or later) or **Bun** (v1.0 or later)
- **npm** (v9+) or **bun** CLI
- Modern desktop or mobile browser with WebGL 1.0/2.0 hardware acceleration enabled

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *Alternatively, using Bun:*
   ```bash
   bun install
   ```

3. **Environment Configuration (Optional):**
   ```bash
   cp .env.example .env
   ```
   By default, the Express server listens on port `3000` unless overridden by the `PORT` environment variable.

---

## Running the Application

### Development Server

Start the local development server:
```bash
npm run dev
```
*Or with Bun:*
```bash
bun run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Production Server

To run the production static asset server:
```bash
npm start
```

### Static Hosting

The client application consists of static files (`index.html`, `main.css`, `script.js`, and `assets/`). It can be hosted directly on static platforms such as Netlify, Vercel, or GitHub Pages without requiring the Node.js backend.

---

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Launches the local Express server on `http://localhost:3000` |
| `npm start` | Executes `node server.js` for production serving |
| `npm run build` | Validates static readiness |
| `npm run lint` | Runs syntax and structure checks |
| `node scripts/generate_plane_obj.js` | Procedurally recalculates and regenerates `assets/plane.obj` |

---

## Regenerating the 3D Model

The repository includes a procedural generation script that models the Airbus A320 fuselage, wings, stabilizers, and engines without external 3D modeling software:

```bash
node scripts/generate_plane_obj.js
```

This writes the updated vertex, normal, and face data to `assets/plane.obj`, which is automatically loaded by `script.js` upon page refresh.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/visual-enhancement`.
3. Implement your changes and verify rendering locally across desktop and mobile viewports.
4. Commit your changes using conventional commit messages: `git commit -m 'feat: improve lighting attenuation'`.
5. Push to your branch: `git push origin feature/visual-enhancement`.
6. Submit a Pull Request describing your modifications.

---

## License

This project is provided for demonstration and educational purposes. Aircraft trademarks, designs, and specifications belong to Airbus SE.
