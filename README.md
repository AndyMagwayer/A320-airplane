# Airbus A320 3D Showcase

An interactive 3D web experience showcasing the Airbus A320 commercial aircraft. Built with Three.js and GSAP ScrollTrigger, this project delivers smooth scroll-coordinated camera transitions, dynamic lighting, and atmospheric scene composition directly in the browser.

![A320 Showcase Preview](./Screenshot%202023-10-01%20164837.png)

## Project Overview

The application loads an Airbus A320 3D model (`assets/plane.obj`) into a WebGL canvas. As the user navigates down the page, GSAP ScrollTrigger orchestrates cinematic camera positions, pitch/roll angles, and depth-of-field illusions against ground and cloud layer textures.

## Features

* **Real-Time 3D Rendering**: High-performance WebGL scene powered by Three.js with OBJLoader support.
* **Scroll-Driven Camera Timeline**: GSAP ScrollTrigger synchronization binding scroll progress to camera coordinates and model rotation.
* **Atmospheric Scene Layers**: Multi-layer compositing using aerial landscape and sky backdrop textures.
* **Procedural Plane Generator**: Node.js utility script (`scripts/generate_plane_obj.js`) capable of procedurally generating the Wavefront `.obj` mesh.
* **Static Express Server**: Lightweight Express server with environment-configurable port delivery for local testing and deployment.

## Technology Stack

* **3D Graphics**: Three.js (WebGL renderer, OBJLoader, PerspectiveCamera)
* **Animation Engine**: GSAP (GreenSock Animation Platform) + ScrollTrigger plugin
* **Frontend**: Vanilla ES6+ JavaScript, HTML5 Canvas, CSS3
* **Backend / Host**: Node.js with Express 5
* **Package Managers**: Bun and npm supported

## Prerequisites

* **Node.js**: v18.0.0 or later (or [Bun](https://bun.sh/) v1.0+)
* **Web Browser**: Any modern browser with WebGL hardware acceleration enabled (Chrome, Firefox, Safari, Edge)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies:**
   ```bash
   # Using npm
   npm install

   # Or using Bun
   bun install
   ```

3. **Configure Environment (Optional):**
   If custom ports or environment settings are needed, create a `.env` file based on the example:
   ```bash
   cp .env.example .env
   ```

## Running the Application

Start the local development server:

```bash
# Using npm
npm run dev

# Or using Bun
bun run dev
```

By default, the server will serve the application at:
`http://localhost:3000`

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Express static file server (`node server.js`) |
| `npm start` | Production startup command (`node server.js`) |
| `npm run build` | Validates static asset readiness |
| `npm run lint` | Runs project lint check |
| `node scripts/generate_plane_obj.js` | Generates or rebuilds the A320 3D Wavefront `.obj` file |

## Project Structure

```text
A320-airplane/
├── .env.example                 # Example environment variables
├── assets/                      # Core runtime assets
│   ├── clouds.svg               # Vector cloud overlay
│   ├── ground.jpg               # Aerial terrain texture
│   ├── plane.obj                # 3D aircraft model in Wavefront OBJ format
│   └── sunset.jpg               # Sky and lighting backdrop
├── scripts/
│   └── generate_plane_obj.js    # Procedural mesh generation script
├── src/
│   └── assets/images/           # High-resolution backdrop source textures
├── index.html                   # HTML structure and Three.js canvas mount
├── main.css                     # Viewport framing and typography styles
├── package.json                 # Project dependencies and script definitions
├── script.js                    # Three.js scene setup and GSAP scroll timelines
└── server.js                    # Express static file server
```

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Ensure code formatting is consistent and test locally (`npm run dev`).
4. Commit your changes following conventional commit syntax (`git commit -m 'feat: add altitude readout overlay'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Open a Pull Request.

## License

This project is intended for educational, research, and visualization demonstration purposes. Airbus and A320 trademarks and design references remain the property of their respective owners.
<!-- David Maintenance Verified: 2026-10-20 18:06:52 (Asia/Tashkent) -->
