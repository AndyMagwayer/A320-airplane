# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset serving.

## Project Overview

This application provides a 3D visualization of the A320 aircraft directly in the browser. It uses Three.js to render OBJ geometry and includes a lightweight Express server for local development and static file serving.

## Features

* **3D Visualization**: Renders `assets/plane.obj` using Three.js in an interactive 3D scene.
* **Asset Management**: Includes support for environment textures, skyboxes, and landscape imagery located in `assets/` and `src/assets/images/`.
* **Development Server**: Includes a `server.js` Express implementation for reliable local testing and static file serving.
* **Utility Scripts**: Contains `scripts/generate_plane_obj.js` for procedural geometry generation and helper tasks.

## Technology Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript, Three.js
* **Backend**: Node.js, Express
* **Runtime**: Bun (recommended) or Node.js

## Prerequisites

* [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/).

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   bun install
   ```
   *(If using npm, run `npm install`)*

## Running the Application

Start the development server:

```bash
# Using Bun
bun run dev

# Using npm
npm start
```

The application will be available at `http://localhost:3000` (or the port configured in your environment).

## Project Structure

```text
├── assets/                  # Raw 3D models and base textures
├── scripts/                 # Utility and build scripts
├── src/assets/images/       # Optimized environment and landscape imagery
├── .github/                 # CI/CD workflows
├── index.html               # Main entry point
├── main.css                 # Application styling
├── script.js                # Core Three.js application logic
├── server.js                # Express server configuration
└── package.json             # Project metadata and dependencies
```

## Contribution Guidelines

Contributions are welcome. Please ensure that all new assets are organized in the appropriate `assets/` or `src/assets/` directories before submitting a Pull Request.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

This project is intended for educational and showcase purposes. All trademarks belong to their respective owners.

<!-- David Maintenance Verified: 2026-10-26 11:41:54 (Asia/Tashkent) -->
