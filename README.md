# Airbus A320 3D Showcase

An interactive 3D web experience showcasing the Airbus A320 aircraft, featuring real-time WebGL rendering with Three.js and scroll-driven camera animations via GSAP ScrollTrigger.

![A320 Showcase Preview](./Screenshot%202023-10-01%20164837.png)

## Project Overview

This application renders an Airbus A320 3D model (`assets/plane.obj`) within a browser-based WebGL viewport. The experience uses GSAP ScrollTrigger to synchronize camera movements, lighting, and model rotation with the user's scroll position, overlaying a dynamic atmospheric scene.

## Features

* **WebGL Rendering**: Utilizes Three.js and OBJLoader to display 3D aircraft geometry.
* **Scroll-Driven Animation**: Implements GSAP ScrollTrigger for smooth, physics-inspired camera transitions.
* **Asset Management**: Includes a structured asset pipeline with both root-level runtime assets and a high-resolution source directory (`src/assets/images`).
* **Utility Scripts**: Procedural geometry generator included in `scripts/generate_plane_obj.js`.
* **Lightweight Server**: Built-in Express server for local development and static delivery.

## Tech Stack

* **Core**: Three.js, GSAP (ScrollTrigger)
* **Backend**: Node.js, Express
* **Frontend**: Vanilla JavaScript (ES6+), CSS3, HTML5
* **Package Manager**: Bun or npm

## Prerequisites

* Node.js (v18+) or Bun
* A modern web browser with WebGL support

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   # Using Bun
   bun install

   # Or npm
   npm install
   ```

## Running the Application

Start the Express development server:

```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

Access the application at `http://localhost:3000`.

### Utility Scripts

To run the geometry generation utility:

```bash
node scripts/generate_plane_obj.js
```

## Project Structure

```text
├── assets/           # Production runtime assets (textures, 3D models)
├── scripts/          # Utility scripts
├── src/              # Source/High-resolution assets
├── index.html        # App entry point
├── main.css          # Stylesheets
├── script.js         # Three.js / GSAP orchestration
├── server.js         # Express server configuration
└── package.json      # Project dependencies and scripts
```

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

Created for educational and visualization purposes. All rights to the Airbus A320 design marks belong to their respective owners.