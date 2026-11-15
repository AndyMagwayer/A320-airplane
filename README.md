# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model, utilizing Three.js and GSAP ScrollTrigger for scroll-driven animations.

## Overview

This project provides a browser-based 3D visualization platform. It uses an Express.js server to serve 3D assets and frontend interface files, facilitating local development and testing of WebGL experiences.

## Features

- **3D Rendering**: Real-time rendering of `assets/plane.obj` using Three.js.
- **Scroll Animations**: GSAP-integrated viewport synchronization for dynamic model transitions.
- **Asset Management**: Structured storage for 3D models and high-fidelity environment textures in `src/assets/images`.
- **Asset Automation**: Includes `scripts/generate_plane_obj.js` for model data preprocessing.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Bun (recommended) or Node.js

## Prerequisites

- [Bun](https://bun.sh/) (latest) or Node.js (v18+)

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
├── src/              # Optimized runtime assets and environment images
├── index.html        # Entry point
├── main.css          # Global styling
├── script.js         # Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Project metadata and dependencies
```

## Contribution

Contributions are welcome. Please ensure:
- New assets are optimized for web performance.
- Rendering logic updates are verified against the existing GSAP implementation.
- Pull requests maintain the integrity of the project structure.