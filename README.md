# A320 3D Airplane Showcase

![A320 Airplane Showcase](./Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 aircraft model rendered in WebGL using Three.js, Wavefront OBJ loading, and layered atmospheric visual environments.

- **Live Deployment:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **3D Asset:** Airbus A320 Wavefront OBJ (`assets/plane.obj`)
- **Core Stack:** Three.js, JavaScript (ES6+), Express, Node.js / Bun

---

## Overview

This repository provides a hardware-accelerated 3D showcase centered on an Airbus A320 aircraft. The presentation couples WebGL rendering via Three.js with responsive multi-layered visual staging, including sunset sky horizons, terrain textures, and vector cloud overlays. The project functions as a static client-side application and includes an Express static server for local development and self-hosted environments.

### Key Features

- **WebGL 3D Aircraft Model**: Loads and renders the Wavefront OBJ aircraft mesh (`assets/plane.obj`) via Three.js `OBJLoader` with calibrated ambient and directional illumination.
- **Multi-Layer Atmospheric Staging**: Blends the Three.js WebGL canvas with background photographic horizon layers (`assets/sunset.jpg`, `assets/ground.jpg`) and foreground vector cloud graphics (`assets/clouds.svg`).
- **Responsive Viewport Pipeline**: Continuously recalculates camera aspect ratios, projection matrices, and renderer dimensions across screen resizing events.
- **Procedural Model Generator**: Includes a standalone script (`scripts/generate_plane_obj.js`) that procedurally constructs airliner fuselage, wing, engine, and stabilizer OBJ geometry from scratch.
- **Production & Dev Server**: Lightweight Express server (`server.js`) supporting environment-based port configuration (`PORT` / `.env`) alongside direct static hosting compatibility (e.g., Netlify).

---

## Technology Stack

| Area | Technology |
|---|---|
| **3D & Graphics** | [Three.js](https://threejs.org/) (WebGL, `OBJLoader`, `PerspectiveCamera`), HTML5 Canvas |
| **Markup & Styling** | Semantic HTML5, CSS3 responsive layering |
| **Server & Runtime** | [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) (v1.0+), [Express](https://expressjs.com/) v5 |
| **Asset Formats** | Wavefront 3D OBJ (`.obj`), Scalable Vector Graphics (`.svg`), JPEG (`.jpg`) |
| **Tooling** | Babel Core (`@babel/core`) |

---

## Project Structure

```text
A320-airplane/
├── assets/                            # 3D model geometry and visual assets
│   ├── clouds.svg                     # Vector cloud atmospheric overlay
│   ├── ground.jpg                     # Aerial terrain texture
│   ├── plane.obj                      # Wavefront OBJ 3D model of Airbus A320
│   └── sunset.jpg                     # High-altitude sunset sky backdrop
├── scripts/                           # Maintenance and build utilities
│   └── generate_plane_obj.js          # Procedural script to generate assets/plane.obj
├── src/                               # Source visual reference photography
│   └── assets/images/                 # Aerial ground, landscape, and sky reference images
├── .env.example                       # Example environment configuration
├── bun.lock                           # Bun lockfile for reproducible installations
├── index.html                         # Main HTML document and WebGL container
├── main.css                           # Viewport layout and atmospheric layering styles
├── package.json                       # Package metadata, scripts, and dependencies
├── script.js                          # Three.js initialization, asset loader, and animation loop
├── server.js                          # Express static HTTP file server
└── Screenshot 2023-10-01 164837.png   # Application preview visual
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher) or **Bun** (v1.0.0 or higher)
- A modern web browser with WebGL hardware acceleration enabled (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   npm install
   # or using Bun
   bun install
   ```

3. (Optional) Set up environment variables:
   ```bash
   cp .env.example .env
   ```

### Running Locally

Start the local development server:

```bash
npm run dev
# or with Bun
bun run dev
```

Open your browser and navigate to `http://localhost:3000` (or the configured `PORT`).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches the local Express server on the configured port |
| `npm start` | Runs the Express server (`node server.js`) |
| `npm run build` | Validates static readiness for production deployment |
| `npm run lint` | Runs project verification checks |
| `node scripts/generate_plane_obj.js` | Procedurally regenerates `assets/plane.obj` geometry |

---

## Configuration

Environment variables can be provided via a `.env` file or exported in your shell:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Local port for the Express static HTTP server |

---

## Generating 3D Model Geometry

The repository includes a procedural OBJ generator (`scripts/generate_plane_obj.js`) capable of producing the aircraft mesh directly:

```bash
node scripts/generate_plane_obj.js
```

This utility generates the fuselage segments, low-wing sweep, dual turbofan nacelles, and vertical/horizontal tail empennage into `assets/plane.obj`.

---

## Contributing

Contributions to improve performance, add interactive controls, or enhance atmospheric shaders are welcome.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/lighting-optimization`).
3. Test changes locally across desktop and mobile viewports.
4. Commit your changes with clear, descriptive commit messages.
5. Push to your branch and submit a Pull Request.

---

## License

This project is maintained for educational and demonstration purposes.


## Automated Maintenance Log

| Timestamp (UTC) | Workflow outcome | Details |
|---|---|---|
| 2026-10-14 15:46 UTC | success | Install: 0;Lint: 0;Test: not-applicable;Build/compile: 0 |
| 2026-10-15 15:33 UTC | success | Install: 0;Lint: 0;Test: not-applicable;Build/compile: 0 |
