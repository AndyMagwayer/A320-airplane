# Airbus A320 3D Interactive Showcase

![A320 Showcase Preview](Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 commercial aircraft rendered in real time with **Three.js** and animated using **GSAP ScrollTrigger**.

- **Live Deployment:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **Subject:** Airbus A320 twin-engine passenger airliner
- **Core Stack:** Three.js (WebGL), GSAP ScrollTrigger, Vanilla JavaScript, HTML5/CSS3, Express.js

---

## Overview

This application renders an interactive flight sequence of an Airbus A320 within a WebGL viewport. As the user scrolls through the page, dynamic camera trajectories and airframe rotations simulate cruising and altitude maneuvers across layered atmospheric visuals.

### Key Features

- **Real-Time WebGL Rendering**: Renders the 3D aircraft model (`assets/plane.obj`) using Three.js with directional and ambient lighting setups.
- **Scroll-Driven Choreography**: GSAP and ScrollTrigger map user scroll depth directly to aircraft pitch, roll, yaw, and camera translation paths.
- **Atmospheric Visuals**: Integrates aerial terrain textures (`assets/ground.jpg`), cloud vector layers (`assets/clouds.svg`), and sunset sky backgrounds (`assets/sunset.jpg`).
- **Procedural Model Tooling**: Ships with a custom generator script (`scripts/generate_plane_obj.js`) that produces and updates the 3D Wavefront OBJ geometry for the fuselage, wings, stabilizers, and engines.
- **Flexible Deployment**: Runs either as a static client application (Netlify, GitHub Pages) or served through the bundled Express.js server.

---

## Technology Stack

- **3D Engine**: [Three.js](https://threejs.org/) (WebGL rendering, OBJLoader, PerspectiveCamera, directional lighting)
- **Animation**: [GSAP](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Server / Runtime**: [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) with [Express](https://expressjs.com/)
- **Frontend**: Vanilla ES6+ JavaScript, CSS3 flex/grid and canvas overlay styling, semantic HTML5

---

## Project Structure

```text
A320-airplane/
├── .env.example             # Template for local environment variables (e.g. PORT)
├── assets/                  # Production 3D and visual assets
│   ├── clouds.svg           # Vector cloud overlay
│   ├── ground.jpg           # Aerial landscape ground texture
│   ├── plane.obj            # Wavefront OBJ 3D model of the A320
│   └── sunset.jpg           # Horizon and sky background texture
├── scripts/
│   └── generate_plane_obj.js # Procedural generator for A320 OBJ geometry
├── src/
│   └── assets/images/       # Source high-resolution textures and skies
├── index.html               # Main entry HTML and WebGL container
├── main.css                 # Responsive viewport styles and UI layout
├── script.js                # Scene initialization, OBJ loading, and GSAP timeline
├── server.js                # Express static asset server
├── package.json             # NPM package manifest and scripts
└── bun.lock                 # Bun dependency lockfile
```

---

## Prerequisites

- **Node.js** v18.0.0 or higher (or **Bun** v1.0+)
- **npm** v9+ or **bun** package manager
- Modern desktop or mobile web browser with WebGL hardware acceleration

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
   *Or using Bun:*
   ```bash
   bun install
   ```

3. **Configure environment (optional):**
   Copy the example environment configuration:
   ```bash
   cp .env.example .env
   ```
   The application defaults to port `3000` if `PORT` is not defined.

---

## Running the Application

### Local Development Server

Start the built-in Express server:

```bash
npm run dev
```
*Or with Bun:*
```bash
bun run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Production Mode

```bash
npm start
```

### Static Hosting (Netlify / Vercel / GitHub Pages)

Because the client code (`index.html`, `main.css`, `script.js`, and `assets/`) is fully static, the repository can be hosted on any static file provider without a backend Node.js process.

---

## Utility Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the Express server for local development on configured port (default `3000`) |
| `npm start` | Runs the production static server entrypoint (`server.js`) |
| `npm run build` | Verifies static asset availability |
| `npm run lint` | Runs syntax and structure verification checks |
| `node scripts/generate_plane_obj.js` | Recomputes and writes procedural OBJ coordinates to `assets/plane.obj` |

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/improved-lighting`.
3. Make your modifications (e.g., shaders, camera transitions, mesh details).
4. Verify locally using `npm run dev` across multiple browser viewport dimensions.
5. Commit your changes using conventional commit messages: `git commit -m 'feat: add specular highlights to airframe'`.
6. Push to your fork: `git push origin feature/improved-lighting`.
7. Open a Pull Request detailing your changes.

---

## License

Distributed for educational and demonstration purposes. Commercial aircraft trade dress and designs belong to their respective copyright and trademark owners.