# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset serving.

## Project Overview

This application provides a 3D visualization of an A320 aircraft. It uses Three.js to handle OBJ geometry rendering and a Node.js Express server to serve the frontend and application assets efficiently.

## Features

* **3D Rendering**: Immersive 3D scene integration using `assets/plane.obj`.
* **Asset Pipeline**: Structured support for environment textures, including sky and landscape imagery located in `src/assets/images/`.
* **Express Backend**: Lightweight server implementation via `server.js` for development and production asset serving.
* **Utility Scripts**: Automated geometry processing tools provided in `scripts/`.

## Technology Stack

* **Frontend**: Vanilla JavaScript, Three.js, CSS3, HTML5
* **Backend**: Node.js, Express
* **Runtime/Manager**: Bun (recommended) or Node.js/npm

## Prerequisites

* Node.js v18+ or [Bun](https://bun.sh/)

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

## Running the Application

Start the development server:

```bash
# Using Bun
bun run dev

# Using npm
npm start
```

The application will be available at `http://localhost:3000` (default).

## Project Structure

```text
├── assets/            # 3D model assets and primary textures
├── scripts/           # Asset processing and utility scripts
├── src/assets/images/ # High-resolution environment images
├── .github/           # CI/CD and maintenance workflows
├── index.html         # Main entry point
├── main.css           # Global stylesheet
├── script.js          # Core Three.js and animation logic
├── server.js          # Express server configuration
└── package.json       # Project dependencies and scripts
```

## Contribution Guidelines

Contributions to improve the 3D rendering or server performance are welcome. Please ensure that:
1. Any new assets are placed in the appropriate `assets/` subdirectories.
2. You maintain consistency with the existing code style.
3. Pull Requests are submitted with a clear description of changes.

## License

This project is intended for educational and showcase purposes.