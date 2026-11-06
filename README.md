# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project featuring an Airbus A320 model rendered with Three.js, supported by an Express.js backend for asset delivery.

## Overview

This repository provides a browser-based 3D showcase. It leverages Three.js for geometry rendering and GSAP ScrollTrigger for animation choreography. The project structure is optimized for serving static 3D assets and environment textures.

## Features

- **3D Visualization**: Renders `assets/plane.obj` using Three.js.
- **Asset Management**: Centralized environment texture handling via `src/assets/images/`.
- **Animation**: Integrated GSAP ScrollTrigger for scroll-based interactivity.
- **Custom tooling**: Includes utility scripts for automated model processing.
- **Lightweight Backend**: Dedicated Express server for optimized asset delivery.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Node.js (v18+) or Bun

## Prerequisites

- Node.js (v18 or higher) or [Bun](https://bun.sh/)

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
   
   # Using npm
   npm install
   ```

## Running & Development

Start the Express development server:

```bash
# Using Bun
bun run dev

# Using npm
npm start
```

Access the application at `http://localhost:3000`.

## Project Structure

```text
.
├── assets/           # 3D models and raw textures
├── scripts/          # Utility scripts for asset generation
├── src/              # Background images and environment assets
├── index.html        # Main entry point
├── main.css          # Core stylesheet
├── script.js         # Frontend Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Project dependencies and scripts
```

## Contribution

Contributions are welcome. Please ensure that:
- All new assets are placed in the appropriate `assets/` or `src/assets/` folders.
- Any modifications to the 3D pipeline are tested against the `scripts/` utilities.
- Code style remains consistent with the existing implementation.