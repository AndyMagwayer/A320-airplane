# A320 Airplane Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and GSAP for scroll-driven animations.

## Project Overview
This repository provides a 3D visualization platform for web-based model display. The application renders a 3D airplane model within an environment featuring custom sky and ground textures, served via a Node.js/Express environment.

## Features
- **3D Rendering**: Implements Three.js to parse and render the `assets/plane.obj` model.
- **Animation**: Integrates GSAP for scroll-triggered visual transitions in `script.js`.
- **Asset Management**: Organizes environment assets (textures and models) in `assets/` and `src/assets/` directories.
- **Static Server**: Includes a lightweight Express.js server for serving the application and its dependencies.

## Technology Stack
- **Frontend**: Three.js, GSAP, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Environment**: Bun (recommended) or Node.js

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
├── scripts/            # Utility scripts for asset processing
├── src/assets/         # Optimized project imagery
├── index.html          # Entry point
├── main.css            # Stylesheets
├── script.js           # Core Three.js/GSAP logic
├── server.js           # Express server configuration
└── package.json        # Project metadata and dependencies
```

## Contribution Guidelines
- Maintain the established directory structure for assets.
- Ensure `script.js` logic remains decoupled from asset-loading utilities.
- Utilize scripts in `scripts/` when adding new 3D assets to ensure format compatibility.
- Submit pull requests for bug fixes or feature enhancements.