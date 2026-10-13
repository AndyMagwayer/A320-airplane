# A320 Airplane Project

![A320](https://github.com/AndyMagwayer/A320-airplane/blob/main/Screenshot%202023-10-01%20164837.png)

An open-source interactive flight systems and avionics simulator for the **Airbus A320**, designed to demonstrate modern aircraft automation, fly-by-wire flight control laws, and cockpit instrumentation for aviation enthusiasts and engineers.

- **Live Deployment:** [a320-airplane-maga.netlify.app](https://a320-airplane-maga.netlify.app/)
- **Target Airframe:** Airbus A320-200 (CFM56 / IAE V2500)
- **Runtime Environment:** Modern Web (HTML5 Canvas, CSS3, Vanilla JavaScript / Bun)

---

## Overview

The A320 Airplane Project delivers an authentic web-based flight deck simulation focusing on:
1. **Fly-By-Wire (FBW) Logic**: Flight control normal law, flight envelope protection, and flight mode annunciator (FMA) telemetry.
2. **Cockpit Instrumentation**: Primary Flight Display (PFD), Navigation Display (ND), and Engine/Warning Display (E/WD).
3. **Flight Management**: Waypoint navigation, aerodynamic performance profiles, and altitude alerting systems.

---

## System Architecture

```
A320-airplane/
├── index.html            # Main cockpit cockpit viewport & canvas mount
├── script.js             # Flight physics, control law engine, and avionics loop
├── main.css              # Cockpit instrumentation layout & night lighting styles
├── assets/               # High-fidelity cockpit textures, gauges, and audio
├── scripts/              # Build scripts and simulation test utilities
├── server.js             # Optional local HTTP / WebSocket telemetry server
├── package.json          # Project metadata and development scripts
└── bun.lock              # Bun package manager lockfile
```

---

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) v18+
- Modern evergreen web browser with WebGL / Canvas hardware acceleration

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AndyMagwayer/A320-airplane.git
cd A320-airplane
bun install
```

### Running the Simulator Locally

To launch the local development server:

```bash
bun run dev
# or with Node:
node server.js
```

Then navigate to `http://localhost:3000` (or the port specified by the server) to access the cockpit.

---

## Verified Aircraft Subsystems

- [x] **Primary Flight Display (PFD)**: Artificial horizon, airspeed tape, barometric altitude, vertical speed indicator.
- [x] **Navigation Display (ND)**: Compass rose, heading bug, and waypoint vectors.
- [x] **Engine Telemetry**: N1/N2 RPM percentage, EGT (Exhaust Gas Temperature), and fuel flow monitoring.
- [x] **Flight Envelope Protections**: Pitch attitude limit protection and high-speed protection.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/avionics-pfd`
3. Commit your changes: `git commit -m "feat(avionics): refine pitch attitude ladder rendering"`
4. Push to your branch: `git push origin feat/avionics-pfd`
5. Open a Pull Request.

---

## License

This project is licensed under the terms defined in the repository license. Designed for educational and simulation purposes only.