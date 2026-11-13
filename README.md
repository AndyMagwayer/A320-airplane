# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model, utilizing Three.js and GSAP for scroll-driven animations.

## Overview

This project provides a browser-based 3D visualization platform. It uses an Express.js server to efficiently serve 3D assets and frontend interface files, facilitating smooth local development and testing of WebGL experiences.

## Features

- **3D Rendering**: Implements Three.js to render the `assets/plane.obj` model.
- **Scroll Animations**: Uses GSAP to synchronize 3D transformations with viewport scroll position.
- **Asset Management**: Centralizes raw 3D models in `/assets` and environment textures in `src/assets/images`.
- **Development Utilities**: Includes automation scripts such as `scripts/generate_plane_obj.js` for asset processing.

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
   bun install
   ```

## Running & Development

Start the development server:

```bash
bun run dev
```

Access the application in your browser at `http://localhost:3000`.

## Project Structure

```text
. 
├── assets/           # Raw 3D models and textures
├── scripts/          # Asset processing and utility scripts
├── src/              # Optimized runtime assets
├── index.html        # Entry point
├── main.css          # Global styles
├── script.js         # Three.js/GSAP logic
├── server.js         # Express development server
└── package.json      # Project metadata and dependencies
```

## Contribution

Contributions are welcome. Please ensure:
- New assets are optimized for web performance.
- Rendering logic updates are verified against the existing GSAP implementation.
- Pull requests maintain the integrity of the project structure.
<!-- David Maintenance Verified: 2026-11-13 20:45:26 (Asia/Tashkent) -->
