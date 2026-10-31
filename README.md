# A320 Airplane Project

Interactive 3D A320 airplane showcase built with Three.js and GSAP ScrollTrigger.

## Project Overview
This repository provides a 3D visualization and simulation environment for the Airbus A320. It uses Three.js for 3D object rendering, integrating specific model assets and atmospheric background textures to create a scroll-based interactive experience.

## Technology Stack
- **Engine**: Three.js
- **Animation**: GSAP ScrollTrigger
- **Runtime**: Node.js / Bun
- **Server**: Express.js

## Project Structure
```text
.
├── assets/             # 3D assets and environment textures
├── scripts/            # Build and utility scripts (e.g., generate_plane_obj.js)
├── src/                # Source assets and media
├── index.html          # Application entry point
├── main.css            # Stylesheet
├── script.js           # Core Three.js and GSAP logic
├── server.js           # Express development server
└── package.json        # Project metadata and scripts
```

## Prerequisites
- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) v18+
- Modern web browser (WebGL support required)

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # OR
   npm install
   ```

## Running the Project

To start the development server:
```bash
# Using Bun
bun run dev

# Using Node.js
node server.js
```
Access the project at `http://localhost:3000`.

## Contribution Guidelines
- Follow the existing coding style for Three.js implementations.
- Ensure all new assets are placed in the `assets/` or `src/assets/` directories.
- Submit pull requests for feature additions or bug fixes.

## License
This project is intended for research and educational purposes.