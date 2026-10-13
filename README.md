# A320 3D Airplane Showcase

![A320 Airplane Showcase](./Screenshot%202023-10-01%20164837.png)

An interactive 3D web experience showcasing an Airbus A320 aircraft model in dynamic atmospheric environments using Three.js, HTML5 Canvas, and modern WebGL rendering.

- **Live Demo:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **Aircraft Model:** Airbus A320 (`assets/plane.obj`)
- **Runtime Stack:** Node.js / Bun, Express, Three.js, OBJLoader, Vanilla JavaScript

---

## Overview

This project renders a 3D model of an Airbus A320 within a customized sky and ground environment. Users can inspect the aircraft from various perspectives with smooth rendering, textured backdrops, and responsive viewport scaling.

### Key Features

- **3D Aircraft Rendering**: Parses and renders Wavefront OBJ geometry (`plane.obj`) via Three.js.
- **Atmospheric Environments**: Textured horizons with sunset and cloud layers (`sunset.jpg`, `ground.jpg`, `clouds.svg`).
- **Interactive Camera Controls**: Real-time perspective and orbital viewing powered by Three.js camera rigs.
- **Asset Generation Utilities**: Helper script (`scripts/generate_plane_obj.js`) for procedural model verification and generation.
- **Lightweight Static Server**: Built-in Express server for local development and static file hosting.

---

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Three.js (WebGL)
- **Assets**: Wavefront OBJ (`plane.obj`), SVG vector overlays, high-resolution aerial and sky textures
- **Backend / Delivery**: Node.js / Bun with Express for static delivery

---

## Project Structure

```text
A320-airplane/
├── assets/                    # 3D model (plane.obj) and environment textures
├── scripts/                   # Model generation and utility scripts
│   └── generate_plane_obj.js  # Generator utility for plane mesh data
├── src/                       # Additional imagery and visual assets
│   └── assets/images/         # Sky, cloud, and terrain reference imagery
├── index.html                 # Main entrypoint and WebGL viewport container
├── main.css                   # Layout, viewport positioning, and styling
├── script.js                  # Three.js scene setup, loader logic, and render loop
├── server.js                  # Express static HTTP server
├── package.json               # Project manifest and scripts
└── bun.lock                   # Bun lockfile
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/)
- A modern web browser with WebGL hardware acceleration enabled

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with Bun
   bun install
   ```

### Running the Application

Start the local development server:

```bash
npm run dev
# or with Bun
bun run dev
```

By default, the server starts on `http://localhost:3000` (or the port defined by `process.env.PORT`). Open this URL in your browser to view the 3D showcase.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Express server for local testing |
| `npm start` | Runs the production static server |
| `npm run build` | Confirms static bundle readiness |
| `npm run lint` | Runs code verification checks |

---

## Contributing

Contributions and enhancements are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/model-enhancement`).
3. Commit your changes using conventional commit messages.
4. Push to your branch and open a Pull Request.

---

## License

This project is available for educational and open-source demonstration purposes.