# A320 3D Airplane Showcase

![A320 Airplane Showcase](./Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 aircraft model rendered in WebGL using Three.js, Wavefront OBJ loading, and layered atmospheric environments.

- **Live Demo:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **3D Asset:** Airbus A320 (`assets/plane.obj`)
- **Stack:** Three.js, JavaScript (ES6+), Express, Node.js / Bun

---

## Overview

This repository provides a 3D visual showcase centered on an Airbus A320 aircraft. The scene combines WebGL rendering with layered visual backdrops—including high-altitude skies, terrain textures, and vector clouds. The application runs as a static client-side web application accompanied by a lightweight Express server for local development and static asset delivery.

### Key Features

- **WebGL 3D Aircraft Model**: Renders an Airbus A320 Wavefront OBJ geometry (`assets/plane.obj`) with directional lighting and responsive perspective cameras.
- **Atmospheric Environment Layers**: Blends canvas WebGL rendering with horizon imagery (`assets/sunset.jpg`, `assets/ground.jpg`) and vector cloud overlays (`assets/clouds.svg`).
- **Responsive Viewport Handling**: Dynamically recalculates aspect ratio and renderer dimensions on window resize events.
- **Procedural Model Generator**: Includes a standalone Node.js utility (`scripts/generate_plane_obj.js`) to generate or regenerate plane OBJ geometry.
- **Lightweight Static Server**: Built-in Express server (`server.js`) with configurable port binding via environment variables.

---

## Technology Stack

- **Rendering & Visualization**: [Three.js](https://threejs.org/) (WebGL, OBJLoader), HTML5 Canvas, CSS3
- **Runtime & Tooling**: [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/), `@babel/core`
- **Server**: [Express](https://expressjs.com/)
- **3D & Visual Formats**: Wavefront OBJ (`.obj`), Scalable Vector Graphics (`.svg`), JPEG (`.jpg`)

---

## Project Structure

```text
A320-airplane/
├── assets/                            # 3D model geometry and environment assets
│   ├── clouds.svg                     # Vector cloud overlay
│   ├── ground.jpg                     # Horizon terrain texture
│   ├── plane.obj                      # Wavefront OBJ 3D model of Airbus A320
│   └── sunset.jpg                     # Skybox / background horizon texture
├── scripts/                           # Maintenance and generation utilities
│   └── generate_plane_obj.js          # Procedural script to generate plane OBJ geometry
├── src/                               # Reference and source visual assets
│   └── assets/images/                 # Sky, cloud, and terrain reference photography
├── .env.example                       # Template for environment configuration
├── bun.lock                           # Bun dependency lockfile
├── index.html                         # Application entrypoint and WebGL canvas mounting point
├── main.css                           # Viewport styling and responsive layout rules
├── package.json                       # Project metadata, dependencies, and scripts
├── script.js                          # Three.js scene setup, OBJLoader, lighting, and animation loop
├── server.js                          # Express static HTTP server
└── Screenshot 2023-10-01 164837.png   # Visual preview screenshot
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

2. Install project dependencies:
   ```bash
   npm install
   # or with Bun
   bun install
   ```

3. (Optional) Configure environment variables:
   ```bash
   cp .env.example .env
   ```

### Running the Application

Start the local development server:

```bash
npm run dev
# or with Bun
bun run dev
```

Once started, navigate to `http://localhost:3000` (or the port specified by the `PORT` environment variable) in your browser.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Express static file server for local development |
| `npm start` | Executes the production HTTP static server via `server.js` |
| `npm run build` | Validates static asset bundle readiness |
| `npm run lint` | Runs project verification and linting checks |
| `node scripts/generate_plane_obj.js` | Generates procedural plane OBJ geometry to `assets/plane.obj` |

---

## Configuration

Configurable via environment variables or a local `.env` file:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port number on which the local Express server listens |

---

## Contributing

Contributions are welcome. To propose changes:

1. Fork the repository.
2. Create a dedicated branch (`git checkout -b feature/model-optimization`).
3. Verify your changes locally by testing WebGL rendering across desktop and mobile viewports.
4. Commit your changes with clear, descriptive commit messages.
5. Push your branch to GitHub and submit a Pull Request.

---

## License

This project is maintained for educational and demonstration purposes.