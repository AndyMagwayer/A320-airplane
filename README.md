# Airbus A320 3D Showcase

An interactive 3D web experience showcasing the Airbus A320 aircraft, featuring real-time WebGL rendering with Three.js and scroll-driven camera animations powered by GSAP ScrollTrigger.

![A320 Showcase Preview](./Screenshot%202023-10-01%20164837.png)

## Project Overview

This application renders an Airbus A320 3D model (`assets/plane.obj`) inside an interactive WebGL viewport. As the user scrolls through the page, GSAP's ScrollTrigger coordinates camera angles, lighting transitions, and model orientation against aerial and atmospheric sky backdrops.

## Features

* **WebGL 3D Rendering**: Real-time rendering of an A320 aircraft using Three.js and OBJLoader.
* **Scroll-Driven Timeline**: Smooth camera maneuvers and spatial transitions synchronized to viewport scrolling via GSAP and ScrollTrigger.
* **Atmospheric Scene Composition**: Multi-layered backdrop integrating aerial terrain textures and sunset skyboxes (`ground.jpg`, `sunset.jpg`, `clouds.svg`).
* **Geometry Generator Utility**: Built-in script (`scripts/generate_plane_obj.js`) for procedural aircraft geometry construction and maintenance.
* **Express Static Delivery**: Built-in lightweight Express server with configurable port support.

## Tech Stack

* **3D & Rendering Engine**: Three.js (WebGL, OBJLoader)
* **Animation & Triggers**: GSAP & GSAP ScrollTrigger
* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
* **Server Runtime**: Node.js / Bun with Express
* **Package Manager**: Bun (`bun.lock`) or npm

## Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/)
* A modern web browser with WebGL enabled

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies:**
   ```bash
   # Using Bun (recommended)
   bun install

   # Alternatively, using npm
   npm install
   ```

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env
   ```
   Configure `PORT` inside `.env` if custom hosting is required (defaults to port `3000`).

## Running the Application

Start the local development server:

```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

Once started, open your browser and navigate to `http://localhost:3000`.

### Running Utility Scripts

To regenerate or test the procedural aircraft OBJ file:

```bash
node scripts/generate_plane_obj.js
```

## Project Structure

```text
A320-airplane/
├── .env.example              # Example environment configuration
├── assets/                   # Static assets used in runtime
│   ├── clouds.svg            # Cloud vector layer
│   ├── ground.jpg            # Ground terrain texture
│   ├── plane.obj             # 3D A320 aircraft geometry
│   └── sunset.jpg            # Sunset sky texture
├── scripts/                  # Utility scripts
│   └── generate_plane_obj.js # Procedural OBJ generator for the aircraft
├── src/                      # Source asset library
│   └── assets/images/        # High-resolution aerial and sky photography
├── index.html                # Main application HTML markup
├── main.css                  # Core application styling and layout
├── metadata.json             # Project metadata descriptor
├── package.json              # Project scripts and dependencies
├── script.js                 # Three.js scene setup and GSAP scroll logic
└── server.js                 # Express server for local hosting
```

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Verify your changes and asset performance locally.
4. Commit your changes with conventional commit messages (`git commit -m 'feat: add cockpit camera angle'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Open a Pull Request.

## License

Created for educational and visualization research. Airbus and A320 design marks belong to their respective copyright holders.