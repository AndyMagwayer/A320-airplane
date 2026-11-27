# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project showcasing an Airbus A320 model, utilizing Three.js and GSAP ScrollTrigger for scroll-driven animations.

## Overview

This project provides a browser-based 3D experience. It uses a lightweight Express.js server to serve the frontend application, where the A320 model is rendered and animated based on user scroll progress.

## Features

- **3D Rendering**: Real-time rendering of the `assets/plane.obj` 3D model.
- **Scroll Animations**: Integration of GSAP ScrollTrigger for synchronized 3D viewport transitions.
- **Asset Management**: Includes optimized environment textures and background imagery stored in `src/assets/images`.
- **Utility Tooling**: Automated asset processing script `scripts/generate_plane_obj.js`.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP
- **Backend**: Node.js, Express
- **Runtime**: Bun or Node.js (v18+)

## Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v18.0.0+)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install project dependencies:
   ```bash
   bun install
   # OR
   npm install
   ```

## Running & Development

Start the development server:

```bash
bun run dev
# OR
npm run dev
```

Access the application in your browser at `http://localhost:3000` (or as configured in `server.js`).

## Project Structure

```text
. 
├── assets/           # Raw 3D models and base assets
├── scripts/          # Asset processing and utility scripts
├── src/              # Optimized runtime assets and images
├── index.html        # Entry point
├── main.css          # Global styling
├── script.js         # Core Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Dependencies and scripts
```

## Contribution

Contributions are welcome. Please ensure:
- New assets are optimized for web performance.
- Rendering logic updates are verified against the existing GSAP implementation.
- Pull requests maintain the architectural integrity of the project.
<!-- David Maintenance Verified: 2026-11-28 01:03:51 (Asia/Tashkent) -->
