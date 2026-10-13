# Airbus A320 3D Showcase

![A320 3D Showcase Preview](Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 airliner in flight. Built with **Three.js** for WebGL 3D rendering and **GSAP ScrollTrigger** for scroll-driven camera choreography and cinematic flight perspectives.

- **Live Demo:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **Platform:** WebGL / Three.js / HTML5 / CSS3 / Node.js

---

## Overview

This project presents an interactive visual presentation of the Airbus A320 commercial aircraft. Rather than relying on static images, the experience renders a 3D polygonal model (`assets/plane.obj`) directly in the browser, manipulating position, lighting, and camera orientation as the user navigates the page.

---

## Key Features

- **WebGL 3D Rendering**: Real-time rendering of the A320 airframe model using Three.js with directional sunlight and ambient lighting.
- **Scroll-Linked Camera Animation**: Dynamic camera framing, pitch, roll, and focal changes powered by GSAP and ScrollTrigger.
- **Atmospheric Visuals**: Layered backdrop environment utilizing aerial landscape imagery and vector cloud graphics for depth perception.
- **Procedural Model Generation**: Includes a helper utility (`scripts/generate_plane_obj.js`) for generating and formatting OBJ geometry for the aircraft mesh.
- **Lightweight Static Serving**: Powered by an Express static file server for frictionless local testing and compatibility with Bun and Node.js.

---

## Technology Stack

- **Rendering & Animation**: [Three.js](https://threejs.org/) (WebGL 3D engine, OBJLoader) and [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Frontend**: Vanilla HTML5, modern CSS3, and ES6+ JavaScript
- **Backend / Dev Server**: [Express 5](https://expressjs.com/) on Node.js / [Bun](https://bun.sh/)

---

## Project Structure

```text
A320-airplane/
├── assets/                        # Core assets
│   ├── clouds.svg                 # Vector atmospheric overlay
│   ├── ground.jpg                 # Ground landscape texture
│   ├── plane.obj                  # 3D Airbus A320 mesh
│   └── sunset.jpg                 # Sky backdrop texture
├── scripts/                       # Build and generation utilities
│   └── generate_plane_obj.js      # Procedural A320 OBJ mesh generator
├── src/assets/images/             # High-resolution aerial and sky imagery
├── index.html                     # Main application entry point
├── main.css                       # Layout, viewport, and canvas styling
├── script.js                      # Three.js scene setup and GSAP animation controller
├── server.js                      # Express local development server
├── package.json                   # Dependencies and execution scripts
└── bun.lock                       # Bun lockfile
```

---

## Prerequisites

- **Node.js** v18+ or **Bun** v1.0+
- A modern web browser supporting WebGL and hardware acceleration (Chrome, Firefox, Safari, Edge)

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies:**
   ```bash
   # Using npm
   npm install

   # Or using Bun
   bun install
   ```

---

## Running the Application

Start the local development server:

```bash
# Using npm
npm run dev

# Or using Bun
bun run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port indicated in your console output).

To run the procedural mesh generator:
```bash
node scripts/generate_plane_obj.js
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/improved-lighting`.
3. Test visual changes locally across different viewport sizes.
4. Commit your changes: `git commit -m 'feat: enhance directional lighting and material shaders'`.
5. Push to your branch: `git push origin feature/improved-lighting`.
6. Open a Pull Request describing your modifications.

---

## License

This project is open-source. Created for educational and 3D visualization showcase purposes. Airbus and associated product names are trademarks of Airbus S.A.S.