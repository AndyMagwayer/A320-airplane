# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset serving.

## Project Overview

This application provides a 3D visualization of the A320 aircraft directly in the browser. It leverages Three.js to render OBJ geometry and includes a lightweight Express server for efficient static file serving.

## Features

* **3D Visualization**: Renders `assets/plane.obj` using Three.js in an interactive 3D scene.
* **Asset Management**: Supports complex environment textures, skyboxes, and high-resolution landscape imagery stored in `assets/` and `src/assets/images/`.
* **Express Server**: A dedicated Node.js/Express server (`server.js`) for reliable static hosting.
* **Geometry Utilities**: Includes helper scripts like `scripts/generate_plane_obj.js` for geometry maintenance.

## Technology Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript, Three.js
* **Backend**: Node.js, Express
* **Runtime**: Bun (recommended) or Node.js

## Prerequisites

* Node.js (v18+) or [Bun](https://bun.sh/).

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

## Running the Application

Start the development server:

```bash
# Using Bun
bun run dev

# Using npm
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/                  # Raw 3D models and base textures
├── scripts/                 # Utility scripts for asset processing
├── src/assets/images/       # Optimized environment and landscape imagery
├── .github/                 # CI/CD workflows
├── index.html               # Main entry point
├── main.css                 # Application styling
├── script.js                # Three.js core logic
├── server.js                # Express server configuration
└── package.json             # Dependencies and scripts
```

## Contribution Guidelines

Contributions are welcome. Please ensure that new assets are placed in the appropriate `assets/` or `src/assets/` directories.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

This project is intended for educational and showcase purposes. All trademarks belong to their respective owners.
<!-- David Maintenance Verified: 2026-10-28 12:06:14 (Asia/Tashkent) -->
