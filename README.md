# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project showcasing an Airbus A320 model, utilizing Three.js and GSAP for scroll-driven animations.

## Overview

This project provides a browser-based 3D experience. It leverages an Express.js server to deliver static assets and core frontend logic, enabling real-time 3D rendering of an A320 model within a scroll-responsive environment.

## Features

- **3D Rendering**: Real-time rendering of the `assets/plane.obj` 3D model using Three.js.
- **Scroll Animations**: Integration of GSAP ScrollTrigger to orchestrate viewport-synchronized transitions.
- **Asset Management**: Centralized management of environment textures and imagery within `/assets` and `/src/assets/images`.
- **Utility Tooling**: Includes build scripts for model data handling in the `scripts/` directory.

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
- Pull requests maintain the integrity of the project structure.