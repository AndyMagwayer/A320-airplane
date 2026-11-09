# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model. The project leverages [Three.js](https://threejs.org/) for 3D rendering and [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) to provide smooth, scroll-based animations for the 3D scene.

## Overview

This project is a browser-based 3D visualization tool. It utilizes a lightweight Express.js server to handle asset delivery and static file hosting, making it suitable for quick development cycles and local performance testing.

## Features

- **Interactive 3D Rendering**: Implements Three.js to render `.obj` files and texture assets.
- **Scroll-Driven Storytelling**: Integrates GSAP ScrollTrigger to manipulate model transforms based on user navigation.
- **Asset Management**: Structured workflow separating source assets (`assets/`) from optimized runtime images (`src/assets/`).
- **Development Workflow**: Simple Node.js/Express server architecture for immediate feedback.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP (ScrollTrigger), CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime Compatibility**: Tested with Node.js and Bun

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
├── src/              # Optimized runtime assets and image sprites
├── index.html        # Primary application entry point
├── main.css          # Core application styling
├── script.js         # Frontend animation and rendering logic
├── server.js         # Express development server configuration
└── package.json      # Dependencies and execution scripts
```

## Contribution

Contributions are welcome. Please adhere to the following:
- Ensure new 3D assets are processed via `scripts/` when applicable.
- Maintain parity between the frontend animation logic in `script.js` and the existing style guide.
- Ensure all new dependencies are documented in `package.json`.