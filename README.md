# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based backend for asset management.

## Project Overview

This application provides a browser-based 3D visualization of the A320 aircraft. It uses `Three.js` to parse OBJ geometry and render it within a controlled scene, supported by a lightweight Node.js/Express server to ensure consistent asset delivery.

## Features

* **3D Visualization**: Renders `assets/plane.obj` using Three.js.
* **Asset Pipeline**: Manages environmental textures and imagery stored in `assets/` and `src/assets/images/`.
* **Static Serving**: Node.js/Express server configured for robust local development.
* **Automation Scripts**: Includes helper scripts like `scripts/generate_plane_obj.js` for asset preparation.

## Technology Stack

* **Frontend**: HTML5, CSS3, JavaScript, Three.js
* **Backend**: Node.js, Express
* **Build Tools**: Bun (Recommended) or npm

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
bun run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/                  # 3D models and primary source assets
├── scripts/                 # Utility scripts for asset generation
├── src/                     # Image textures and environment assets
├── index.html               # Main entry point
├── main.css                 # Global styles
├── package.json             # Project dependencies and scripts
├── script.js                # Three.js scene logic
└── server.js                # Express server configuration
```

## Contributing

Contributions are welcome. Please ensure that all new assets are placed in the appropriate `assets/` or `src/assets/` directories and that code adheres to the existing style.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feat/feature-name`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

This project is intended for educational purposes. All trademarks belong to their respective owners.