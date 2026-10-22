# A320 Airplane 3D Showcase

An interactive 3D web experience featuring the Airbus A320, utilizing Three.js for rendering and GSAP for scroll-driven animations.

## Project Overview

The application renders a 3D A320 model (`assets/plane.obj`) in the browser. It features a layout that synchronizes camera transitions and model orientations with the user's scroll position, providing a cinematic 3D presentation.

## Features

* **3D Rendering**: Utilizes Three.js for scene management, lighting, and model rendering.
* **Scroll-Sync**: Implements GSAP ScrollTrigger to map scroll progress to 3D object transformations.
* **Asset Management**: Contains optimized textures and models within `/assets` and `/src/assets`.
* **Express Server**: Lightweight Node.js/Express implementation for serving static assets.

## Technology Stack

* **Frontend**: Vanilla JavaScript, Three.js, GSAP
* **Styling**: CSS3
* **Backend**: Node.js, Express
* **Runtime**: Node.js / Bun

## Prerequisites

* Node.js (v18+) or Bun installed.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   npm install
   # Or using Bun
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

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/              # 3D objects and environment assets
├── scripts/             # Asset utility scripts
├── src/                 # Source imagery and texture assets
├── index.html           # Main application entry point
├── main.css             # Application styling
├── package.json         # Dependency management
├── script.js            # Three.js/GSAP logic
└── server.js            # Express server configuration
```

## Contribution

1. Fork the repository.
2. Create your feature branch: `git checkout -b feat/my-new-feature`.
3. Commit your changes: `git commit -m 'feat: description'`.
4. Push to the branch and submit a Pull Request.

## License

This project is intended for educational purposes. All trademarks are the property of their respective owners.