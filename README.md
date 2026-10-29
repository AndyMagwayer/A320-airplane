# A320 Airplane 3D Showcase

An interactive 3D visualization of an Airbus A320, utilizing Three.js for 3D rendering and GSAP for scroll-based animations. This project serves as a showcase for model integration and web-based 3D interaction.

## Project Overview
This repository demonstrates the integration of a 3D airplane model (`plane.obj`) into a web environment, featuring scroll-triggered animation sequences and asset-managed environmental rendering.

## Technology Stack
- **Rendering**: Three.js
- **Animation**: GSAP (ScrollTrigger)
- **Runtime**: Node.js / Bun
- **Server**: Express.js

## Project Structure
```text
.
├── assets/           # 3D models and base textures
├── src/assets/       # Additional landscape and environment imagery
├── public/           # Static assets and media
├── server.js         # Express server configuration
├── script.js         # Core Three.js and GSAP logic
├── main.css          # Styling for the application overlay
└── index.html        # Main entry point
```

## Prerequisites
- [Bun](https://bun.sh/) (preferred) or [Node.js](https://nodejs.org/) v18+

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

## Running the Project
Start the development server:
```bash
# Using Bun
bun run dev

# Or using Node.js
node server.js
```
Open `http://localhost:3000` in your browser to view the interactive scene.

## Contributing
This is a personal showcase project. Contributions are welcome via pull requests for code optimization or additional 3D scene refinements. Please ensure all assets added follow the established directory structure.

## License
This project is provided for research and educational purposes.
<!-- David Maintenance Verified: 2026-10-29 22:19:58 (Asia/Tashkent) -->
