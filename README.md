# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project showcasing an Airbus A320 model, utilizing Three.js and GSAP for scroll-driven animations.

## Overview

This project provides a browser-based 3D experience. It uses an Express.js server to serve static assets and frontend interface files, facilitating the rendering of the 3D model and environment textures.

## Features

- **3D Rendering**: Real-time rendering of `assets/plane.obj` using Three.js.
- **Scroll Animations**: Integration of GSAP for viewport-synchronized model transitions.
- **Asset Management**: Structured storage for environment imagery in `src/assets/images/` and global textures in `assets/`.
- **Utility Scripts**: Includes `scripts/generate_plane_obj.js` for model data handling.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Bun (recommended) or Node.js (v18+)

## Prerequisites

- [Bun](https://bun.sh/) or Node.js (v18+)

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
├── assets/           # Raw 3D models and base assets
├── scripts/          # Asset processing and utility scripts
├── src/              # Optimized runtime assets
├── index.html        # Entry point
├── main.css          # Global styling
├── script.js         # Core Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Project dependencies and metadata
```

## Contribution

Contributions are welcome. Please ensure:
- New assets are optimized for web performance.
- Rendering logic updates are verified against the existing GSAP implementation.
- Pull requests maintain the integrity of the project structure.