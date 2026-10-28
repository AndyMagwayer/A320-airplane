# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset management.

## Project Overview

This application serves a 3D visualization of an A320 aircraft. It leverages Three.js to render OBJ geometry and an Express.js server to host the application and its associated assets.

## Features

* **3D Rendering**: Immersive 3D scene integration using `assets/plane.obj`.
* **Asset Management**: Centralized storage for environment textures, including cloud layers and landscape photography in `src/assets/images/` and `assets/`.
* **Express Backend**: Lightweight server implementation in `server.js` for asset delivery.
* **Utility Scripts**: Automated geometry processing tools provided in `scripts/generate_plane_obj.js`.

## Technology Stack

* **Frontend**: Vanilla JavaScript, Three.js, CSS3, HTML5
* **Backend**: Node.js, Express
* **Runtime**: Node.js or Bun

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
   # Using Bun
   bun install

   # OR using npm
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
├── assets/            # Primary 3D model and base textures
├── scripts/           # Asset processing and utility tools
├── src/assets/images/ # High-resolution environment image assets
├── .github/           # CI/CD workflows
├── index.html         # Main entry point
├── main.css           # Global stylesheet
├── script.js          # Three.js animation and scene logic
├── server.js          # Express server configuration
└── package.json       # Project dependencies and scripts
```

## Contribution Guidelines

Contributions are welcome. Please ensure that:
1. Any new assets are placed in the appropriate `assets/` subdirectories.
2. You maintain consistency with the existing code style.
3. Pull Requests are submitted with a clear description of changes.

## License

This project is intended for educational and showcase purposes.

<!-- David Maintenance Verified: 2026-10-28 19:38:36 (Asia/Tashkent) -->
