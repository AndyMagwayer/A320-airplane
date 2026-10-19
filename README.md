# A320 Airplane Showcase

An interactive 3D visualization project for the Airbus A320, utilizing Three.js and GSAP ScrollTrigger to provide a smooth, scroll-driven presentation of the aircraft model.

## Project Overview

This project serves as a showcase for 3D web rendering. It features a detailed A320 model, aerial environment mapping, and scroll-triggered animations to demonstrate technical proficiency in web-based 3D asset management.

## Features

* **3D Aircraft Rendering**: Implementation using Three.js to load and display OBJ geometry.
* **Scroll-Driven Animation**: Integration with GSAP ScrollTrigger to manipulate the scene based on user navigation.
* **Asset Pipeline**: Includes processed aerial environment textures and skybox components.
* **Development Utilities**: Custom scripts to assist in geometry processing and asset management.

## Tech Stack

* **Engine**: Three.js
* **Animation**: GSAP (ScrollTrigger)
* **Environment**: Vanilla JavaScript / Bun / Node.js
* **Server**: Express (Development environment)

## Prerequisites

- [Bun](https://bun.sh/) (Recommended) or [Node.js](https://nodejs.org/) v18+
- A modern web browser with WebGL support

## Installation & Setup

```bash
git clone https://github.com/AndyMagwayer/A320-airplane.git
cd A320-airplane

# Install dependencies
bun install
```

## Running the Project

To start the local development server:

```bash
bun run dev
```

Access the application at `http://localhost:3000`.

## Project Structure

```text
A320-airplane/
├── assets/           # 3D objects and environment textures
├── scripts/          # Utility scripts for asset generation
├── src/              # Source images and assets
├── index.html        # Main entry point
├── main.css          # Styling
├── script.js         # Core application logic
├── server.js         # Express server for local hosting
└── package.json      # Project configuration
```

## Contribution

Contributions are welcome. Please ensure that all new assets are optimized for web performance and that code follows the established structure. Fork the repository, create a feature branch, and submit a pull request.

## License

Created for educational and research purposes. All rights to the A320 design belong to their respective owners.