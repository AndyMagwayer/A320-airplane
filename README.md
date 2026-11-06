# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project featuring an Airbus A320 model, utilizing Three.js for rendering and an Express.js backend for asset serving.

## Overview

This project provides a browser-based 3D showcase. It leverages Three.js for client-side rendering and includes utility scripts for managing 3D model processing. The project is structured to separate raw development assets from optimized runtime assets.

## Features

- **3D Rendering**: Interactive 3D scene rendering using Three.js.
- **Asset Management**: Centralized storage for 3D geometry (`.obj`) and high-resolution environmental textures.
- **Automation**: Utility script located in `scripts/generate_plane_obj.js` for handling 3D model preprocessing.
- **Static Delivery**: Express.js server configured to serve frontend assets efficiently.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP (ScrollTrigger), CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Node.js (v18+) or Bun

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
# Using Bun
bun run dev

# Using npm
npm start
```

Access the application locally at `http://localhost:3000`.

## Project Structure

```text
. 
├── assets/           # Raw 3D model files and environmental assets
├── scripts/          # Utility scripts for asset processing
├── src/              # Optimized image assets
├── index.html        # Main entry point
├── main.css          # Application styles
├── script.js         # Frontend Three.js and GSAP logic
├── server.js         # Express server configuration
└── package.json      # Dependency and script management
```

## Contribution

Contributions are welcome. Please ensure that:
- New assets are placed in the appropriate `assets/` or `src/assets/` subdirectories.
- Modifications to the 3D generation pipeline are tested using the `scripts/` utilities.
- All code changes maintain the current vanilla JS and Three.js implementation standards.