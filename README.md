# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase featuring an Airbus A320 model. The project utilizes Three.js for 3D rendering and GSAP for motion control.

## Overview

This project provides a browser-based 3D visualization of an Airbus A320. It uses a lightweight Express.js server to serve the 3D assets and frontend interface, allowing for seamless local development and testing of 3D animations.

## Features

- **Interactive 3D Rendering**: Implements Three.js to render `.obj` models.
- **Scroll-Driven Animation**: Integrates GSAP to sync 3D model transformations with the user's scroll position.
- **Asset Management**: Organizes raw model files in `/assets` and processed runtime textures in `/src/assets`.
- **Custom tooling**: Includes utility scripts in `/scripts` to assist with 3D model preparation.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, GSAP, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime**: Node.js or Bun

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
├── assets/           # Raw 3D model files and source media
├── scripts/          # Utility scripts for asset processing
├── src/              # Optimized runtime assets and images
├── index.html        # Primary entry point
├── main.css          # Application styling
├── script.js         # Frontend animation and rendering logic
├── server.js         # Express development server
└── package.json      # Project dependencies and metadata
```

## Contribution

Contributions are welcome. Please adhere to the following:
- Ensure new 3D assets are processed via `scripts/` to maintain format compatibility.
- Maintain architectural consistency within `script.js`.
- Update `package.json` if adding new dependencies.