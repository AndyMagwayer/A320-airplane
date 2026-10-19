# Airbus A320 3D Showcase

An interactive 3D web experience showcasing the Airbus A320 aircraft, featuring real-time WebGL rendering with Three.js and scroll-driven camera animations powered by GSAP ScrollTrigger.

![A320 Showcase Preview](./Screenshot%202023-10-01%20164837.png)

## Project Overview

This application renders an Airbus A320 3D model (`assets/plane.obj`) inside an interactive WebGL viewport. As the user scrolls through the page, GSAP's ScrollTrigger coordinates camera angles, lighting transitions, and model orientation against aerial and atmospheric sky backdrops.

## Features

* **WebGL 3D Rendering**: Real-time rendering of an A320 aircraft using Three.js and OBJLoader.
* **Scroll-Driven Timeline**: Smooth camera maneuvers and spatial transitions synchronized to viewport scrolling via GSAP and ScrollTrigger.
* **Atmospheric Scene Composition**: Multi-layered backdrop integrating aerial terrain textures and skyboxes.
* **Geometry Generator Utility**: Built-in script (`scripts/generate_plane_obj.js`) for procedural aircraft geometry construction.
* **Express Static Delivery**: Lightweight Express server for local development and hosting.

## Tech Stack

* **3D Engine**: Three.js (WebGL, OBJLoader)
* **Animation**: GSAP (ScrollTrigger)
* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
* **Server Runtime**: Node.js with Express
* **Package Manager**: Bun or npm

## Prerequisites

* [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/)
* A modern web browser with WebGL enabled

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies:**
   ```bash
   # Using Bun
   bun install

   # Alternatively, using npm
   npm install
   ```

## Running the Application

Start the development server:

```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

Once started, access the application at `http://localhost:3000`.

## Project Structure

```text
A320-airplane/
├── assets/           # 3D models and base textures
├── scripts/          # Build and generation utilities
├── src/              # Source images and assets
├── index.html        # Main entry point
├── main.css          # Application styles
├── script.js         # Core Three.js and GSAP logic
└── server.js         # Express server configuration
```

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit changes using conventional commit messages.
4. Push to the branch and open a Pull Request.

## License

Created for educational and visualization research. Airbus and A320 design marks belong to their respective copyright holders.