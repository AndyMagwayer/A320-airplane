# Airbus A320 3D Interactive Showcase

![A320 Showcase Preview](Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 aircraft model rendered in real time using **Three.js** and animated with **GSAP ScrollTrigger**.

- **Live Demo:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **Subject Model:** Airbus A320 twin-engine commercial airliner
- **Core Tech:** Three.js (WebGL), GSAP + ScrollTrigger, HTML5/CSS3, Express.js / Node.js

---

## Overview

This application presents a dynamic 3D showcase of an Airbus A320 in flight:

- **Real-Time 3D Rendering**: Renders an A320 airframe model (`assets/plane.obj`) in WebGL using Three.js.
- **Scroll & Timeline Animation**: Utilizes GSAP and ScrollTrigger to drive dynamic camera trajectories, flight angles, and atmospheric transitions as the user scrolls.
- **Atmospheric Environment**: Blends procedural and textured background elements including dynamic cloud layers, ground terrain textures, and sunset lighting.
- **Model Generation Tooling**: Includes an offline procedural generation script (`scripts/generate_plane_obj.js`) to generate and format the OBJ geometry for the aircraft.

---

## Technology Stack

- **Rendering & 3D**: [Three.js](https://threejs.org/) (WebGL, OBJLoader, PerspectiveCamera, directional lighting)
- **Animation**: [GSAP](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Runtime & Server**: Node.js or [Bun](https://bun.sh/) with [Express](https://expressjs.com/)
- **Frontend**: Vanilla JavaScript (ES6+), HTML5 Canvas, responsive CSS

---

## Project Structure

```
A320-airplane/
├── assets/
│   ├── clouds.svg              # Vector cloud overlays
│   ├── ground.jpg              # Aerial terrain ground texture
│   ├── plane.obj               # 3D wavefront OBJ model of the A320
│   └── sunset.jpg              # Sky backdrop texture
├── scripts/
│   └── generate_plane_obj.js   # Script to generate the 3D A320 OBJ mesh
├── src/
│   └── assets/images/          # Source aerial landscapes and sky textures
├── index.html                  # Main markup with 3D canvas viewport
├── main.css                    # Layout styling and presentation controls
├── script.js                   # Three.js scene setup, OBJ loading, and GSAP timeline
├── server.js                   # Lightweight Express HTTP server for local serving
├── package.json                # Project dependencies and script runner
└── bun.lock                    # Dependency lockfile
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/)
- A modern web browser with WebGL hardware acceleration enabled

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with Bun:
   bun install
   ```

### Running Locally

Start the local development server:

```bash
npm run dev
# or with Bun:
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the showcase.

### Regenerating the 3D Model

If you want to modify or regenerate the procedural 3D airframe mesh:

```bash
node scripts/generate_plane_obj.js
```

---

## Development Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Express server on port 3000 |
| `npm start` | Runs the production static server |
| `npm run build` | Verifies static asset readiness |
| `npm run lint` | Runs syntax and structure verification |

---

## Contributing

Contributions to improve performance, add interactive camera controls, or refine 3D materials are welcome:

1. Fork the repository.
2. Create a dedicated branch: `git checkout -b feature/model-enhancement`.
3. Test visual rendering and performance across viewports.
4. Commit your changes: `git commit -m 'feat: enhance turbine engine geometry'`.
5. Push your branch and submit a Pull Request.

---

## License

This project is available for educational and non-commercial showcase purposes. Aircraft designs and trademarks are the property of their respective holders.