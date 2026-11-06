# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project featuring an Airbus A320 model rendered with Three.js, supported by a lightweight Express.js backend.

## Overview

This repository provides a browser-based 3D showcase. It leverages Three.js for geometry rendering and handles asset delivery through a Node.js/Express server. The architecture is designed for efficient serving of 3D models and high-resolution environmental textures.

## Features

- **3D Rendering**: Utilizes Three.js to render the `assets/plane.obj` 3D model.
- **Asset Management**: Centralized storage for environment textures, skybox elements, and ground imagery in `assets/` and `src/assets/images/`.
- **Automated Pipeline**: Includes `scripts/generate_plane_obj.js` for custom model processing tasks.
- **Performance-Oriented Backend**: A dedicated Express server (`server.js`) configured for rapid static asset delivery.

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
   # Using Bun
   bun install

   # Using npm
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

Access the application locally at `http://localhost:3000`.

## Project Structure

```text
. 
├── assets/           # 3D model files and global assets
├── scripts/          # Utility scripts for asset processing
├── src/              # Application source and image assets
├── index.html        # Main entry point
├── main.css          # Core stylesheet
├── script.js         # Frontend Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Dependency and script management
```

## Contribution

Contributions are welcome. Please ensure that:
- All new assets are placed in the appropriate `assets/` or `src/assets/` directories.
- Any modifications to the 3D generation pipeline are validated against existing `scripts/` utilities.
- Code contributions follow the existing project structure and style conventions.
<!-- David Maintenance Verified: 2026-11-06 13:15:48 (Asia/Tashkent) -->
