# A320 Airplane 3D Showcase

An interactive 3D web experience featuring an Airbus A320 model, utilizing Three.js for rendering and an Express-based server for asset serving.

## Project Overview

This application renders a 3D visualization of the A320 aircraft in the browser. It leverages Three.js to parse OBJ geometry and implements a lightweight Express server for local development and static file serving.

## Features

* **3D Visualization**: Renders `assets/plane.obj` using Three.js in a dedicated scene.
* **Asset Management**: Supports high-fidelity background imagery and textures located in `src/assets/images/` and `assets/`.
* **Development Server**: Includes a `server.js` Express implementation for reliable local testing.
* **Utility Scripts**: Contains geometry processing helpers in `scripts/`.

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

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/                  # Raw 3D models and base textures
├── scripts/                 # Utility and build scripts
├── src/assets/images/       # Optimized environment and landscape imagery
├── .github/                 # CI/CD and automation workflows
├── index.html               # Main entry point
├── main.css                 # Application styling
├── script.js                # Core Three.js application logic
├── server.js                # Express server configuration
└── package.json             # Project metadata and dependencies
```

## Contributing

Contributions are welcome. Please ensure that all new assets are organized in the appropriate `assets/` or `src/assets/` directories before submitting a Pull Request.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

This project is intended for educational and showcase purposes. All trademarks belong to their respective owners.