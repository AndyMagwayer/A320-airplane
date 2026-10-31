# A320 Airplane Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and GSAP for scroll-driven animations.

## Project Overview
This repository provides a 3D visualization platform for web-based model display. The application integrates custom sky and ground textures within a Three.js scene, served via a Node.js/Express environment.

## Features
- **3D Rendering**: Utilizes Three.js to parse and render the `assets/plane.obj` model.
- **Animation**: Implements GSAP for orchestrating scroll-driven visual transitions.
- **Asset Pipeline**: Includes structured directories for raw 3D assets and processed environment images.
- **Development Server**: Lightweight Express.js server for efficient static file serving.

## Technology Stack
- **Frontend**: Three.js, GSAP, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Runtime Compatibility**: Node.js or Bun

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
├── src/                # Project assets and images
├── index.html          # Entry point
├── main.css            # Stylesheets
├── script.js           # Three.js/GSAP logic
├── server.js           # Express server configuration
└── package.json        # Project metadata and dependencies
```

## Contribution Guidelines
- Follow the existing directory structure when adding new assets.
- Maintain performance standards in `script.js` for client-side execution.
- Use utility scripts located in `scripts/` for consistent asset processing.
- Submit pull requests for feature enhancements or bug fixes.