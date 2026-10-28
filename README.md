# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset serving.

## Project Overview

This application provides a 3D visualization of the A320 aircraft in the browser. It leverages Three.js to render OBJ geometry and uses a Node.js/Express server to serve static assets and the application frontend.

## Features

* **3D Rendering**: Interactive 3D scene using `assets/plane.obj`.
* **Asset Pipeline**: Supports high-resolution textures and environment imagery stored in `src/assets/images/`.
* **Development Server**: Lightweight Express server for local development and asset hosting.
* **Geometry Processing**: Includes utility scripts in `scripts/` for automated asset generation.

## Technology Stack

* **Frontend**: Vanilla JavaScript, Three.js, CSS3, HTML5
* **Backend**: Node.js, Express
* **Package Manager**: Bun (recommended) or npm

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

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/                  # 3D models and base textures
├── scripts/                 # Asset processing utilities
├── src/assets/images/       # Optimized environment and landscape imagery
├── .github/                 # CI/CD configuration
├── index.html               # Main entry point
├── main.css                 # Application styling
├── script.js                # Three.js application logic
├── server.js                # Express server configuration
└── package.json             # Project metadata and dependencies
```

## Contribution Guidelines

Contributions are welcome. Please ensure that:
1. New assets are placed in the appropriate `assets/` or `src/assets/` directories.
2. You follow the existing code style.
3. You submit a Pull Request with a clear description of your changes.

## License

This project is intended for educational and showcase purposes. All trademarks belong to their respective owners.