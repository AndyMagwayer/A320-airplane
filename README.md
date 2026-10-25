# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for local development and asset serving.

## Project Overview

This application provides a browser-based 3D visualization of the A320 aircraft. It uses Three.js to parse OBJ geometry and render it within a controlled scene. The project includes a lightweight Express server for asset delivery and utility scripts to assist with geometry processing.

## Features

* **3D Visualization**: Renders `assets/plane.obj` using Three.js.
* **Asset Management**: Centralized storage for environment textures, vector assets, and background imagery.
* **Local Development**: Built-in Express server (`server.js`) for seamless development and testing.
* **Utility Scripts**: Includes build-time helper scripts located in `scripts/`.

## Technology Stack

* **Frontend**: HTML5, CSS3, JavaScript, Three.js
* **Backend**: Node.js, Express
* **Package Management**: Bun / npm

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
   *(If using npm, run `npm install`)*

## Running the Application

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/                  # Raw assets (plane.obj, textures)
├── scripts/                 # Maintenance and build scripts
├── src/assets/              # Optimized environment and background imagery
├── .github/                 # CI/CD and automation workflows
├── index.html               # Entry point
├── main.css                 # Global styling
├── script.js                # Core Three.js application logic
├── server.js                # Express server configuration
├── package.json             # Project metadata and dependencies
└── bun.lock                 # Dependency lockfile
```

## Contributing

Contributions are welcome. Please ensure that all new assets are placed in the appropriate `assets/` or `src/assets/` directories.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

This project is intended for educational and showcase purposes. All trademarks belong to their respective owners.