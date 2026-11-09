# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model. The project utilizes [Three.js](https://threejs.org/) for 3D rendering and [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) to drive smooth, scroll-based animations.

## Overview

This project serves as a browser-based 3D visualization tool. It utilizes a lightweight Express.js server to handle asset delivery and static file hosting, providing a streamlined environment for local 3D model testing and animation prototyping.

## Features

- **Interactive 3D Rendering**: Utilizes Three.js to load and render `.obj` models and associated textures.
- **Scroll-Driven Animation**: Integrates GSAP ScrollTrigger to sync model transformations with viewport scrolling.
- **Asset Management**: Structured separation between raw source assets (`assets/`) and processed/runtime image assets (`src/assets/`).
- **Development Server**: Built on Node.js/Express for efficient development cycles.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Compatible with Node.js and Bun

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
   # Using Bun
   bun install
   # OR using npm
   npm install
   ```

## Running & Development

Start the development server:

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
├── assets/           # Raw 3D model files and source media
├── scripts/          # Utility scripts for asset processing
├── src/              # Optimized runtime assets
├── index.html        # Primary entry point
├── main.css          # Application styling
├── script.js         # Frontend animation and rendering logic
├── server.js         # Express development server
└── package.json      # Project dependencies and metadata
```

## Contribution

Contributions are welcome. Please ensure:
- New 3D assets are processed via `scripts/` to ensure format compatibility.
- Front-end logic in `script.js` maintains consistency with existing GSAP implementation.
- All new dependencies are tracked within `package.json`.