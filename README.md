# Airbus A320 3D Showcase

An interactive 3D web experience showcasing the Airbus A320 commercial aircraft. This project utilizes Three.js for WebGL rendering and GSAP ScrollTrigger for scroll-synchronized camera transitions and animations.

![A320 Showcase Preview](./Screenshot%202023-10-01%20164837.png)

## Project Overview

The application renders a 3D A320 model (`assets/plane.obj`) within a browser-based canvas. It features a responsive design that reacts to scroll progress, orchestrating cinematic camera movements and model orientations to create an immersive visual experience.

## Features

* **WebGL Rendering**: Utilizes Three.js to render 3D assets.
* **Scroll-Driven Animation**: GSAP ScrollTrigger integration for interactive camera control.
* **Asset Pipeline**: Includes a helper script (`scripts/generate_plane_obj.js`) for managing 3D object generation.
* **Local Server**: Lightweight Express implementation for serving the static frontend.

## Technology Stack

* **3D Library**: Three.js
* **Animation**: GSAP (GreenSock Animation Platform)
* **Backend**: Node.js, Express
* **Build/Runtime**: Bun or npm

## Prerequisites

* **Node.js**: v18.0.0 or later
* **Package Manager**: npm or [Bun](https://bun.sh/)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndyMagwayer/A320-airplane.git
   cd A320-airplane
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # Or
   bun install
   ```

## Running the Application

Start the development server:

```bash
# Using npm
npm run dev

# Or using Bun
bun run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```text
├── assets/              # Core 3D and texture assets
├── scripts/             # Utility build scripts
├── src/                 # Source textures and media
├── index.html           # Main entry point
├── main.css             # Stylesheet
├── package.json         # Project dependencies
├── script.js            # Main Three.js/GSAP logic
└── server.js            # Express server configuration
```

## Contribution

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit changes (`git commit -m 'feat: description'`).
4. Push to your branch and open a Pull Request.

## License

This project is intended for educational purposes. All trademarks are the property of their respective owners.