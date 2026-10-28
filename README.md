# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset delivery.

## Project Overview

This application provides a 3D visualization of an A320 aircraft. It leverages Three.js to render OBJ geometry and an Express.js server to host the application and its associated assets.

## Features

* **3D Rendering**: Immersive 3D scene integration using `assets/plane.obj`.
* **Asset Management**: Comprehensive environment textures and high-resolution background assets located in `assets/` and `src/assets/images/`.
* **Express Backend**: Lightweight server implementation in `server.js` for robust static asset delivery.
* **Utility Scripts**: Geometry processing tools provided in `scripts/generate_plane_obj.js`.

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

Start the server:

```bash
# Using Bun
bun run dev

# Using npm
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/            # 3D models and base textures
├── scripts/           # Asset processing tools
├── src/assets/images/ # Environment and landscape image assets
├── .github/           # CI/CD maintenance workflows
├── index.html         # Main entry point
├── main.css           # Global stylesheet
├── script.js          # Three.js animation and scene logic
├── server.js          # Express server configuration
└── package.json       # Project configuration
```

## Contribution Guidelines

Contributions are welcome. Please ensure that:
1. New assets are placed in the appropriate `assets/` or `src/assets/` subdirectories.
2. You maintain consistency with existing code styles.
3. Pull Requests are submitted with a clear description of changes.

## License

This project is intended for educational and showcase purposes.