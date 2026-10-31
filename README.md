# A320 Airplane Showcase

An interactive 3D web experience featuring the Airbus A320, built using Three.js and GSAP ScrollTrigger for smooth, scroll-based animations.

## Project Overview
This repository serves as a 3D visualization platform for an A320 model. The application leverages high-fidelity assets to simulate flight-related transitions and environmental effects through a modern web interface.

## Features
- **3D Rendering**: Utilizes Three.js to render the `plane.obj` asset.
- **Scroll-Driven Animation**: Uses GSAP ScrollTrigger for parallax and interactive scene control.
- **Environment Assets**: Integration of custom sky and ground textures for immersive visual presentation.
- **Modular Build**: Includes utility scripts for asset generation and maintenance.

## Technology Stack
- **Core**: Three.js
- **Animation**: GSAP (GreenSock Animation Platform)
- **Backend/Runtime**: Node.js, Express.js
- **Package Manager**: Bun (recommended) or npm

## Prerequisites
- Node.js (v18+) or Bun (latest)
- A modern web browser with WebGL support

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   bun install
   # OR
   npm install
   ```

## Running the Project

Start the development server:
```bash
bun run dev
# OR
node server.js
```
Access the application at `http://localhost:3000`.

## Project Structure
```text
├── assets/             # Raw 3D models and textures
├── scripts/            # Build and utility tasks
├── src/                # Media and processed assets
├── index.html          # Entry point
├── main.css            # Global styling
├── script.js           # Three.js scene and GSAP logic
├── server.js           # Express development server
└── package.json        # Dependencies and scripts
```

## Contribution Guidelines
- Maintain the existing architecture for Three.js scene initialization.
- Ensure new 3D assets are optimized before placement in `assets/`.
- Submit pull requests for bug fixes or optimizations to the animation logic.

## License
This project is intended for research and educational purposes.
<!-- David Maintenance Verified: 2026-10-31 18:58:39 (Asia/Tashkent) -->
