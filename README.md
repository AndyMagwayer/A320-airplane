# A320 Airplane 3D Showcase

An interactive 3D web experience featuring the Airbus A320, utilizing Three.js for rendering and scroll-driven interactions.

## Project Overview

This application renders a 3D A320 model (`assets/plane.obj`) in the browser. It leverages custom environmental textures and a lightweight Express-based Node.js server to deliver a high-performance 3D visualization.

## Features

* **3D Rendering**: Implements Three.js for scene composition, lighting, and OBJ model parsing.
* **Asset Pipeline**: Manages specialized 3D assets and high-resolution textures for the aerial environment.
* **Express Server**: Provides a lightweight, fast-loading development environment.

## Technology Stack

* **Frontend**: Vanilla JavaScript, Three.js
* **Backend**: Node.js, Express
* **Runtime/Build**: Bun

## Prerequisites

* Node.js (v18+) or [Bun](https://bun.sh/) (latest recommended).

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   bun install
   # Alternatively using npm
   npm install
   ```

## Running the Application

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/           # 3D models and raw environment assets
├── scripts/          # Utility scripts for asset processing
├── src/              # Texture and source imagery collection
├── index.html        # Main entry point
├── main.css          # Application styles
├── package.json      # Dependency and script definitions
├── script.js         # Core Three.js application logic
└── server.js         # Express server configuration
```

## Contribution

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature-name`.
3. Commit your changes following conventional commit standards.
4. Push and submit a Pull Request for review.

## License

This project is intended for educational purposes. All trademarks are the property of their respective owners.