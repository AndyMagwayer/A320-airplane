# A320 Airplane Project

![A320 Cockpit Simulation](Screenshot%202023-10-01%20164837.png)

Interactive 3D Airbus A320 airplane showcase application. This project uses Three.js for 3D model rendering and a lightweight Express server for asset delivery.

## Overview

This repository provides a 3D visualization showcase of an Airbus A320 aircraft. It is designed for high-performance rendering of OBJ models within the browser environment.

## Features

- **3D Model Rendering:** Utilizes Three.js to render `assets/plane.obj`.
- **Asset Management:** Custom environment support, including cloud and ground textures.
- **Lightweight Backend:** Includes a Node.js/Express server to host the application locally.
- **Automation Scripts:** Contains utility scripts to assist in model and asset preparation.

## Technology Stack

- **Frontend:** Vanilla JavaScript, Three.js, CSS3, HTML5
- **Backend:** Node.js, Express
- **Build Tools:** Bun (recommended) or npm

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
├── assets/           # 3D objects and environment textures
├── scripts/          # Utility scripts for asset generation
├── src/              # Source images and assets
├── index.html        # Main entry point
├── main.css          # Styling
├── script.js         # Core Three.js logic
├── server.js         # Express server configuration
└── package.json      # Project dependencies
```

## Contribution

Contributions are welcome via pull requests. Please ensure all new assets are placed in the appropriate `assets/` or `src/assets/` directories.