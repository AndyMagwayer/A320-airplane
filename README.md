# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

An interactive 3D showcase of an Airbus A320 aircraft utilizing Three.js for rendering and a lightweight Express server for asset delivery.

## Overview

This project provides a 3D visualization platform for the Airbus A320, optimized for browser-based performance. It serves 3D geometry and environment textures using a Node.js backend.

## Features

- **3D Visualization**: Renders `assets/plane.obj` using Three.js.
- **Asset Management**: Includes environment textures (clouds, ground, sunset) located in `assets/` and `src/assets/images/`.
- **Utility Tools**: Includes build/preparation scripts in `scripts/`.
- **Lightweight Backend**: A dedicated Express server (`server.js`) for static asset delivery.

## Technology Stack

- **Frontend**: Vanilla JavaScript, Three.js, CSS3, HTML5
- **Backend**: Node.js, Express
- **Runtime/Package Manager**: Bun (recommended) or npm

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
   bun install
   # OR
   npm install
   ```

## Running & Development

Start the local development server:

```bash
bun run dev
# OR
npm start
```

Access the application at `http://localhost:3000`.

## Project Structure

```text
.
├── assets/           # 3D models and base textures
├── scripts/          # Asset generation and utility scripts
├── src/              # Source assets and background imagery
├── index.html        # App entry point
├── main.css          # Application styles
├── script.js         # Core Three.js logic
├── server.js         # Express server configuration
└── package.json      # Project configuration
```

## Contribution

Contributions are welcome. Please ensure that all new assets are categorized into the appropriate `assets/` or `src/assets/` directories before submitting a pull request.