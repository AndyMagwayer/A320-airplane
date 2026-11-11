# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model, utilizing Three.js and GSAP ScrollTrigger for scroll-driven animations.

## Overview

This project provides a browser-based 3D visualization. It uses a lightweight Express.js server to serve 3D assets and frontend interfaces, facilitating local development and testing of 3D animations and WebGL experiences.

## Features

- **Interactive 3D Rendering**: Utilizes Three.js for loading and rendering the `assets/plane.obj` model.
- **Scroll-Driven Animation**: Integrates GSAP for synchronizing 3D model transformations with page scroll interactions.
- **Asset Management**: Organizes raw 3D models in `/assets`, optimized environment textures in `src/assets/images`, and background styling elements.
- **Automation Tools**: Includes helper scripts like `scripts/generate_plane_obj.js` for model processing.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Node.js or Bun

## Prerequisites

- Node.js (v18+) or [Bun](https://bun.sh/)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   bun install # or npm install
   ```

## Running & Development

Start the development server:

```bash
bun run dev # or npm start
```

Access the application in your browser at `http://localhost:3000` (default Express port).

## Project Structure

```text
. 
├── assets/           # Raw model assets and environment textures
├── scripts/          # Utility scripts for asset processing
├── src/              # Optimized runtime textures and assets
├── index.html        # Main entry point
├── main.css          # Application styles
├── script.js         # Frontend Three.js/GSAP rendering logic
├── server.js         # Express development server
└── package.json      # Project dependencies
```

## Contribution

Contributions are welcome. Please ensure:
- New 3D assets are optimized for web performance.
- Rendering logic updates are tested against the existing GSAP implementation in `script.js`.
- Pull requests maintain the integrity of the project structure and dependencies.
<!-- David Maintenance Verified: 2026-11-11 23:25:55 (Asia/Tashkent) -->
