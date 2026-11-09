# A320 Airplane

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model, built with Three.js and GSAP for scroll-driven animations.

## Overview

This project provides a browser-based 3D visualization. It uses a lightweight Express.js server to serve 3D assets and frontend interface, facilitating local development and testing of 3D animations.

## Features

- **Interactive 3D Rendering**: Implements Three.js to render `.obj` models.
- **Scroll-Driven Animation**: Integrates GSAP to sync 3D model transformations with the user's scroll position.
- **Asset Management**: Organizes raw model files in `/assets` and processed runtime textures in `src/assets/images`.
- **Automated Tooling**: Includes utility scripts in `/scripts` for 3D model preparation and environment management.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Bun or Node.js

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

Access the application at `http://localhost:3000`.

## Project Structure

```text
. 
├── assets/           # Raw model assets (e.g., .obj, .svg, .jpg)
├── scripts/          # Utility scripts for asset processing
├── src/              # Optimized runtime assets
├── index.html        # Entry point
├── main.css          # Application styles
├── script.js         # Frontend rendering logic
├── server.js         # Express development server
└── package.json      # Project dependencies
```

## Contribution

Contributions are welcome. Please ensure:
- New 3D assets are validated via `scripts/`.
- Changes to rendering logic are implemented in `script.js`.
- Dependencies are kept up to date in `package.json`.