# A320 Airplane Showcase

An interactive 3D web experience featuring the Airbus A320, utilizing Three.js for rendering and GSAP for scroll-based animations.

## Project Overview
This repository provides a lightweight 3D visualization platform for an A320 model. The application displays a 3D environment composed of custom sky and ground textures, integrated with a local Express server for asset serving and development.

## Features
- **3D Rendering**: Implements Three.js to parse and display the `assets/plane.obj` model.
- **Scroll-Driven Animation**: Integrates GSAP ScrollTrigger for parallax and motion effects linked to page scroll.
- **Asset Management**: Uses a structured directory for textures and 3D assets, supported by utility scripts in `scripts/`.
- **Development Server**: Includes a Node.js Express server to host the static assets and provide a local development environment.

## Technology Stack
- **Frontend**: Three.js, GSAP, CSS3
- **Backend/Runtime**: Node.js, Express.js
- **Utilities**: Bun (preferred) or Node.js

## Prerequisites
- Node.js (v18+) or [Bun](https://bun.sh/) (recommended)
- Modern web browser with WebGL support

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
npm run dev
```
Access the application at `http://localhost:3000`.

## Project Structure
```text
├── assets/             # Raw 3D models and textures
├── scripts/            # Utility scripts for asset processing
├── src/                # Processed media assets
├── index.html          # Main application entry point
├── main.css            # Stylesheets
├── script.js           # Three.js and GSAP logic
├── server.js           # Express server implementation
└── package.json        # Project metadata and dependencies
```

## Contribution Guidelines
- Follow the existing project structure when adding new textures or models.
- Ensure `script.js` remains optimized for 60fps performance.
- Use `scripts/` to generate or optimize new 3D assets before importing them.
- Submit pull requests for feature enhancements or bug fixes.

## License
This project is intended for research and educational purposes.