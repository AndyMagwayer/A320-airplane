# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project featuring an Airbus A320 model rendered with Three.js, supported by a lightweight Express.js backend.

## Overview

This repository provides a browser-based 3D showcase. It utilizes Three.js for geometry rendering and handles asset delivery through a Node.js/Express server. The architecture is optimized for serving 3D models (`.obj`) and high-resolution environmental textures.

## Features

- **3D Rendering**: Interactive 3D scene rendering using Three.js.
- **Asset Management**: Centralized management for environmental textures, skyboxes, and ground imagery.
- **Automated Pipeline**: Includes `scripts/generate_plane_obj.js` for handling 3D model processing.
- **Performance-Oriented Backend**: Dedicated Express server configured for efficient static asset delivery.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
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
├── assets/           # 3D model files and raw assets
├── scripts/          # Utility scripts for asset processing
├── src/              # Application source and optimized images
├── index.html        # Main entry point
├── main.css          # Core stylesheet
├── script.js         # Frontend Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Dependency and script management
```

## Contribution

Contributions are welcome. Please ensure that:
- New assets are placed in the appropriate `assets/` or `src/assets/` subdirectories.
- Modifications to the 3D generation pipeline are tested via the `scripts/` utilities.
- Code adheres to the existing project structure and style conventions.