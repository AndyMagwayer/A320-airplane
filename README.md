# A320 Airplane 3D Showcase

An interactive 3D web experience featuring the Airbus A320, utilizing Three.js for rendering and custom asset management.

## Project Overview

This application renders an interactive 3D A320 model (`assets/plane.obj`) within a custom-styled browser environment. It leverages environmental textures and a lightweight Express-based Node.js server to deliver a responsive and high-performance 3D visualization.

## Features

* **3D Rendering**: Implements Three.js for scene composition, lighting, materials, and OBJ model parsing.
* **Asset Pipeline**: Manages specialized 3D models (`plane.obj`) and high-resolution aerial environment textures.
* **Static & Dynamic Serving**: Powered by a lightweight Express server for reliable asset delivery and development.

## Technology Stack

* **Frontend**: HTML5, Modern CSS (`main.css`), Vanilla JavaScript (`script.js`), Three.js
* **Backend**: Node.js, Express (`server.js`)
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
bun run dev
# Or using npm:
npm run start
```

The application will be available at `http://localhost:3000` (or the configured port in your environment).

## Project Structure

```text
├── assets/                  # 3D models (.obj) and primary assets
├── scripts/                 # Utility and generation scripts
├── src/                     # Source imagery and texture assets
├── .env.example             # Environment variable template
├── index.html               # Main application entry point
├── main.css                 # Application styling
├── package.json             # Project metadata and dependencies
├── script.js                # Core Three.js application script
└── server.js                # Express server configuration
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feat/your-feature-name`).
3. Commit your changes following conventional commit standards.
4. Push to the branch and submit a Pull Request.

## License

This project is intended for educational and showcase purposes. All trademarks are the property of their respective owners.
<!-- David Maintenance Verified: 2026-10-22 22:41:38 (Asia/Tashkent) -->
