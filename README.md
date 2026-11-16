# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project showcasing an Airbus A320 model, utilizing Three.js and GSAP for scroll-driven animations.

## Overview

This project provides a browser-based 3D experience. It leverages an Express.js server to serve the frontend application, featuring an A320 3D model integrated with scroll-responsive animations.

## Features

- **3D Rendering**: Real-time rendering of the `assets/plane.obj` 3D model using Three.js.
- **Scroll Animations**: Integration of GSAP ScrollTrigger for synchronized viewport transitions.
- **Asset Management**: Optimized environment textures and imagery stored in `src/assets/images`.
- **Utility Tooling**: Includes helper scripts in `scripts/` for automated asset generation.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
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
<!-- David Maintenance Verified: 2026-11-16 12:59:24 (Asia/Tashkent) -->
