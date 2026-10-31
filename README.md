# A320 Airplane Showcase

An interactive 3D web experience featuring the Airbus A320, utilizing Three.js for rendering and GSAP for scroll-based animations.

## Project Overview
This repository provides a 3D visualization platform for an A320 model. The application features a 3D environment with custom sky and ground textures, served via a local Express server.

## Features
- **3D Rendering**: Utilizes Three.js to parse and display the `assets/plane.obj` model.
- **Scroll-Driven Animation**: Integrates GSAP ScrollTrigger for parallax and motion effects linked to user scroll events.
- **Asset Management**: Structured directories for textures and 3D assets, with custom utility scripts in `scripts/` for asset generation.
- **Development Server**: Lightweight Node.js/Express.js server configured for static asset serving.

## Technology Stack
- **Frontend**: Three.js, GSAP, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Runtime**: Node.js or Bun

## Prerequisites
- Node.js (v18+) or [Bun](https://bun.sh/) (recommended)
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
# Using Bun
bun run dev

# Using NPM
npm run dev
```
Access the application at `http://localhost:3000`.

## Project Structure
```text
├── assets/             # Raw 3D models and global textures
├── scripts/            # Utility scripts for asset processing
├── src/                # Processed/optimized project assets
├── index.html          # Main application entry point
├── main.css            # Stylesheets
├── script.js           # Three.js and GSAP initialization logic
├── server.js           # Express server implementation
└── package.json        # Project metadata and dependencies
```

## Contribution Guidelines
- Maintain the existing project structure when adding new assets.
- Keep `script.js` optimized for browser performance.
- Use utility scripts in `scripts/` to ensure asset consistency.
- Submit pull requests for feature enhancements or bug fixes.

## License
This project is intended for research and educational purposes.