# A320 Airplane 3D Showcase

An interactive 3D web experience showcasing the Airbus A320. This project leverages Three.js for rendering and GSAP for scroll-driven animations.

## Project Overview

The application renders a 3D A320 model (`assets/plane.obj`) within the browser. It features a responsive layout that synchronizes camera transitions and model orientations with the user's scroll position, providing a cinematic presentation.

## Features

* **3D Rendering**: Implements Three.js to manage scene, camera, and model rendering.
* **Scroll-Sync**: Uses GSAP ScrollTrigger to map scroll progress to 3D transformations.
* **Asset Pipeline**: Includes utility scripts in `/scripts` for 3D asset management.
* **Express Backend**: A lightweight Node.js/Express server to serve the static assets.

## Technology Stack

* **Frontend**: Vanilla JavaScript, Three.js, GSAP
* **Backend**: Node.js, Express
* **Runtime**: Bun or Node.js

## Prerequisites

* Node.js (v18.0.0+) or Bun installed.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   npm install
   # Or
   bun install
   ```

## Running the Application

Start the development server:

```bash
# Using npm
npm run dev

# Or using Bun
bun run dev
```

The application will be available at `http://localhost:3000` (default Express configuration).

## Project Structure

```text
├── assets/              # 3D objects and texture assets
├── scripts/             # Utility maintenance scripts
├── src/                 # Source imagery and project assets
├── index.html           # Application entry point
├── main.css             # UI styling
├── package.json         # Dependency management
├── script.js            # Three.js/GSAP logic
└── server.js            # Express server configuration
```

## Contribution

1. Fork the repository.
2. Create your feature branch (`git checkout -b feat/my-new-feature`).
3. Commit your changes (`git commit -m 'feat: description'`).
4. Push to the branch and submit a Pull Request.

## License

This project is intended for educational purposes. All trademarks are the property of their respective owners.