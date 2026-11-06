# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model, utilizing Three.js for 3D rendering and GSAP ScrollTrigger for animation-driven storytelling.

## Overview

This project provides a browser-based 3D visualization. It serves as a container for 3D geometry and environmental textures, utilizing a lightweight Express.js backend for static asset delivery and development iteration.

## Features

- **3D Rendering**: Implemented via Three.js with integrated `.obj` model support.
- **Scroll-Driven Animation**: Utilizes GSAP ScrollTrigger to sync model transformations with user interaction.
- **Asset Management**: Structured separation between raw source assets and processed display textures.
- **Build Utilities**: Includes custom scripts to facilitate 3D model processing and project maintenance.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP (ScrollTrigger), CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Node.js (v18+) or Bun

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/)

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
├── assets/           # Raw 3D model files (.obj) and source textures
├── scripts/          # Asset processing and utility scripts
├── src/              # Optimized runtime image assets
├── index.html        # Main entry point
├── main.css          # Application styles
├── script.js         # Frontend Three.js and GSAP logic
├── server.js         # Express server configuration
└── package.json      # Project dependencies and task runners
```

## Contribution

Contributions are welcome. Please ensure that:
- New assets are organized within the appropriate `assets/` or `src/assets/` directories.
- Code consistency is maintained with the existing vanilla JavaScript implementation.
- Any modifications to the 3D pipeline are validated using the provided scripts in `scripts/`.