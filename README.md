# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D visualization project featuring an Airbus A320 model rendered with Three.js, supported by a lightweight Express.js backend for asset delivery.

## Overview

This project provides a browser-based 3D showcase. It leverages Three.js for client-side rendering and includes utility scripts for managing 3D model processing.

## Features

- **3D Rendering**: Interactive 3D scene rendering using Three.js.
- **Asset Management**: Structured delivery for high-resolution environmental textures and 3D geometry.
- **Automation**: Includes a custom utility script in `scripts/generate_plane_obj.js` for handling 3D model assets.
- **Static Delivery**: Express.js server configured to serve frontend assets efficiently.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Bun or Node.js (v18+)

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
├── assets/           # Raw 3D model files and assets
├── scripts/          # Utility scripts for asset processing
├── src/              # Application source and optimized image assets
├── index.html        # Main entry point
├── main.css          # Core stylesheet
├── script.js         # Frontend Three.js/GSAP logic
├── server.js         # Express server configuration
└── package.json      # Dependency and script management
```

## Contribution

Contributions are welcome. Please ensure that:
- New assets are placed in the appropriate `assets/` or `src/assets/` subdirectories.
- Modifications to the 3D generation pipeline are tested using the `scripts/` utilities.