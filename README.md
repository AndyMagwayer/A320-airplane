# A320 Airplane Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and GSAP for scroll-driven animations.

## Project Overview
This repository provides a 3D visualization platform for web-based model display. The application renders a 3D airplane model within an environment featuring custom sky and ground textures, served via a Node.js/Express environment.

## Features
- **3D Rendering**: Implements Three.js to parse and render `assets/plane.obj`.
- **Animation**: Integrates GSAP for scroll-triggered visual transitions.
- **Asset Management**: Organizes environment assets and raw 3D files in dedicated directories for modularity.
- **Lightweight Server**: Uses Express.js for static file serving, compatible with Node.js and Bun.

## Technology Stack
- **Frontend**: Three.js, GSAP, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Tooling**: Bun (recommended) or npm

## Prerequisites
- Node.js (v18+) or [Bun](https://bun.sh/)
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
# Using Bun
bun run dev

# Using NPM
npm run dev
```
Access the application at `http://localhost:3000`.

## Project Structure
```text
├── assets/             # Raw 3D models and base textures
├── .github/            # GitHub Actions maintenance workflows
├── scripts/            # Asset processing utilities
├── src/                # Optimized project assets and images
├── index.html          # Entry point
├── main.css            # Stylesheets
├── script.js           # Three.js/GSAP logic
├── server.js           # Express server configuration
└── package.json        # Project metadata and dependencies
```

## Contribution Guidelines
- Maintain the current directory structure for assets.
- Ensure `script.js` optimizations are preserved during feature updates.
- Use utility scripts in `scripts/` to ensure consistency when processing new 3D assets.
- Submit pull requests for feature enhancements or bug fixes.