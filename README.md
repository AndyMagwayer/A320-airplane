# A320 Airplane 3D Showcase

An interactive 3D web experience featuring the Airbus A320, utilizing Three.js for rendering and custom asset management.

## Project Overview

This application renders an interactive 3D A320 model (`assets/plane.obj`) within a responsive browser environment. It leverages environmental textures and a lightweight Express-based Node.js server to deliver the 3D visualization.

## Features

* **3D Rendering**: Implements Three.js for scene composition, lighting, and OBJ model parsing.
* **Asset Management**: Integrated pipeline for 3D geometry (`plane.obj`) and high-resolution environment textures stored in `assets/` and `src/assets/images/`.
* **Development Server**: Lightweight Express backend configured for reliable asset serving and local development.

## Technology Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript, Three.js
* **Backend**: Node.js, Express
* **Package Management**: Bun / npm

## Prerequisites

* Node.js (v18+) or [Bun](https://bun.sh/) (recommended).

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   bun install
   # Or using npm:
   npm install
   ```

## Running the Application

Start the development server:

```bash
# Using Bun
bun run dev

# Or using npm
npm run start
```

The application will be accessible at `http://localhost:3000` (default port).

## Project Structure

```text
├── assets/                  # 3D models and primary assets
├── scripts/                 # Utility and generation scripts
├── src/                     # Source imagery and texture assets
├── .env.example             # Environment variable template
├── index.html               # Main entry point
├── main.css                 # Application styling
├── package.json             # Dependencies and build scripts
├── script.js                # Core Three.js logic
└── server.js                # Express server configuration
```

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature-name`).
3. Commit changes following conventional commit standards.
4. Push to the branch and submit a Pull Request.

## License

This project is intended for educational and showcase purposes. All trademarks are the property of their respective owners.
<!-- David Maintenance Verified: 2026-10-25 19:53:32 (Asia/Tashkent) -->
