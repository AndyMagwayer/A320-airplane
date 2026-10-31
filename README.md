# A320 Airplane 3D Showcase

An interactive 3D visualization of an Airbus A320, utilizing Three.js for 3D rendering and GSAP for scroll-based animations. This project serves as a showcase for model integration and web-based 3D interaction.

## Project Overview
This repository demonstrates the integration of a 3D airplane model (`plane.obj`) into a web environment, featuring dynamic lighting, environment textures, and smooth web animations.

## Features
- **3D Model Rendering**: Custom Three.js scene loading the A320 model and procedural environment assets.
- **Scroll Animations**: GSAP and ScrollTrigger integration for immersive transitions.
- **Lightweight Express Server**: Built-in Node.js/Express static file delivery for easy testing and deployment.

## Technology Stack
- **Rendering**: Three.js
- **Animation**: GSAP (GreenSock Animation Platform)
- **Server**: Express.js
- **Runtime**: Node.js / Bun

## Project Structure
```text
.
├── assets/           # 3D models and base textures (plane.obj, images)
├── src/              # Additional images and environment assets
├── scripts/          # Utility scripts (e.g., generate_plane_obj.js)
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
   # or npm install
   ```

## Running the Project
Start the development server:
```bash
# Using Bun or Node.js
bun run dev
# or
npm run dev
```
Open `http://localhost:3000` in your browser to view the interactive scene.

## Contributing
Contributions are welcome via pull requests for code optimization or additional 3D scene refinements. Please ensure all assets added follow the established directory structure.

## License
This project is provided for research and educational purposes.