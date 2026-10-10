const fs = require('fs');
const path = require('path');

const vertices = [];
const faces = [];

function addVertex(x, y, z) {
  vertices.push([
    parseFloat(x.toFixed(4)),
    parseFloat(y.toFixed(4)),
    parseFloat(z.toFixed(4))
  ]);
  return vertices.length; // 1-based OBJ index
}

function addQuad(v1, v2, v3, v4) {
  faces.push([v1, v2, v3, v4]);
}

function addTri(v1, v2, v3) {
  faces.push([v1, v2, v3]);
}

// 1. FUSELAGE
// Cross sections along Z axis from tail (z=-40) to nose (z=40.5)
const radialSegments = 12;
const fuselageSections = [
  { z: -40.0, rx: 0.2, ry: 0.2, cy: 1.0 },   // Tail cone tip
  { z: -36.0, rx: 1.5, ry: 1.6, cy: 0.8 },   // Rear tail cone
  { z: -30.0, rx: 2.8, ry: 3.0, cy: 0.5 },   // Aft fuselage
  { z: -20.0, rx: 3.8, ry: 4.1, cy: 0.2 },   // Mid-aft fuselage
  { z: -10.0, rx: 4.2, ry: 4.4, cy: 0.0 },   // Center wing root rear
  { z:   0.0, rx: 4.3, ry: 4.5, cy: 0.0 },   // Center fuselage
  { z:  12.0, rx: 4.3, ry: 4.5, cy: 0.0 },   // Forward center fuselage
  { z:  22.0, rx: 4.1, ry: 4.3, cy: 0.1 },   // Forward cabin
  { z:  29.0, rx: 3.7, ry: 3.8, cy: 0.2 },   // Behind cockpit
  { z:  33.0, rx: 2.8, ry: 2.7, cy: -0.2 },  // Cockpit windshield line
  { z:  36.5, rx: 1.8, ry: 1.6, cy: -0.6 },  // Radome base
  { z:  39.0, rx: 0.8, ry: 0.7, cy: -0.9 },  // Radome mid
  { z:  40.5, rx: 0.0, ry: 0.0, cy: -1.0 },  // Nose tip
];

const ringVertexIndices = [];

for (let s = 0; s < fuselageSections.length; s++) {
  const sec = fuselageSections[s];
  const ring = [];
  if (sec.rx === 0) {
    const v = addVertex(0, sec.cy, sec.z);
    ring.push(v);
  } else {
    for (let i = 0; i < radialSegments; i++) {
      const angle = (i / radialSegments) * Math.PI * 2;
      const x = Math.cos(angle) * sec.rx;
      let y = Math.sin(angle) * sec.ry + sec.cy;
      if (sec.z === 33.0 && (i === 3 || i === 4)) {
        y -= 0.3;
      }
      ring.push(addVertex(x, y, sec.z));
    }
  }
  ringVertexIndices.push(ring);
}

// Connect fuselage rings
for (let s = 0; s < fuselageSections.length - 1; s++) {
  const r1 = ringVertexIndices[s];
  const r2 = ringVertexIndices[s + 1];

  if (r2.length === 1) {
    const tip = r2[0];
    for (let i = 0; i < radialSegments; i++) {
      const next = (i + 1) % radialSegments;
      addTri(r1[i], r1[next], tip);
    }
  } else if (r1.length === 1) {
    const tip = r1[0];
    for (let i = 0; i < radialSegments; i++) {
      const next = (i + 1) % radialSegments;
      addTri(tip, r2[next], r2[i]);
    }
  } else {
    for (let i = 0; i < radialSegments; i++) {
      const next = (i + 1) % radialSegments;
      addQuad(r1[i], r1[next], r2[next], r2[i]);
    }
  }
}

// 2. MAIN WINGS (Left & Right)
function buildWing(side) {
  const stations = [
    { x: 3.8 * side,  zRoot: 8.0,  zTip: -11.0, yUpper: 0.5,  yLower: -0.6 },
    { x: 12.0 * side, zRoot: 4.5,  zTip: -9.5,  yUpper: 0.4,  yLower: -0.5 },
    { x: 22.0 * side, zRoot: 0.5,  zTip: -8.0,  yUpper: 0.35, yLower: -0.4 },
    { x: 32.0 * side, zRoot: -3.5, zTip: -6.5,  yUpper: 0.3,  yLower: -0.3 },
    { x: 38.0 * side, zRoot: -6.0, zTip: -5.5,  yUpper: 0.25, yLower: -0.25 }
  ];

  const wingRings = [];
  for (const st of stations) {
    const vLE = addVertex(st.x, (st.yUpper + st.yLower) / 2, st.zRoot);
    const vUpper = addVertex(st.x, st.yUpper, (st.zRoot + st.zTip) / 2);
    const vTE = addVertex(st.x, (st.yUpper + st.yLower) / 2, st.zTip);
    const vLower = addVertex(st.x, st.yLower, (st.zRoot + st.zTip) / 2);
    wingRings.push([vLE, vUpper, vTE, vLower]);
  }

  for (let i = 0; i < wingRings.length - 1; i++) {
    const r1 = wingRings[i];
    const r2 = wingRings[i + 1];
    if (side === 1) {
      addQuad(r1[0], r2[0], r2[1], r1[1]);
      addQuad(r1[1], r2[1], r2[2], r1[2]);
      addQuad(r1[2], r2[2], r2[3], r1[3]);
      addQuad(r1[3], r2[3], r2[0], r1[0]);
    } else {
      addQuad(r1[0], r1[1], r2[1], r2[0]);
      addQuad(r1[1], r1[2], r2[2], r2[1]);
      addQuad(r1[2], r1[3], r2[3], r2[2]);
      addQuad(r1[3], r1[0], r2[0], r2[3]);
    }
  }

  const tip = stations[stations.length - 1];
  const sharkletTop = addVertex(tip.x + 0.5 * side, 3.2, tip.zTip + 0.8);
  const sharkletBottom = addVertex(tip.x + 0.2 * side, -1.2, tip.zTip + 0.8);
  const rTip = wingRings[wingRings.length - 1];

  if (side === 1) {
    addTri(rTip[0], sharkletTop, rTip[1]);
    addTri(rTip[1], sharkletTop, rTip[2]);
    addTri(rTip[2], sharkletBottom, rTip[3]);
    addTri(rTip[3], sharkletBottom, rTip[0]);
  } else {
    addTri(rTip[0], rTip[1], sharkletTop);
    addTri(rTip[1], rTip[2], sharkletTop);
    addTri(rTip[2], rTip[3], sharkletBottom);
    addTri(rTip[3], rTip[0], sharkletBottom);
  }
}

buildWing(1);  // Right wing
buildWing(-1); // Left wing

// 3. ENGINES & PYLONS
function buildEngine(side) {
  const cx = 15.0 * side;
  const cy = -3.5;
  const zFront = 4.0;
  const zBack = -7.0;
  const radius = 2.1;
  const engSegs = 8;

  const pyW1 = addVertex(cx - 0.3 * side, -0.2, 1.0);
  const pyW2 = addVertex(cx + 0.3 * side, -0.2, 1.0);
  const pyW3 = addVertex(cx + 0.3 * side, -0.2, -4.0);
  const pyW4 = addVertex(cx - 0.3 * side, -0.2, -4.0);

  const pyE1 = addVertex(cx - 0.3 * side, cy + radius * 0.9, 2.0);
  const pyE2 = addVertex(cx + 0.3 * side, cy + radius * 0.9, 2.0);
  const pyE3 = addVertex(cx + 0.3 * side, cy + radius * 0.9, -4.0);
  const pyE4 = addVertex(cx - 0.3 * side, cy + radius * 0.9, -4.0);

  addQuad(pyW1, pyW2, pyE2, pyE1);
  addQuad(pyW2, pyW3, pyE3, pyE2);
  addQuad(pyW3, pyW4, pyE4, pyE3);
  addQuad(pyW4, pyW1, pyE1, pyE4);

  const rings = [];
  const zStations = [
    { z: zFront + 0.5, r: radius * 0.85 },
    { z: zFront,       r: radius },
    { z: 0.0,          r: radius * 1.05 },
    { z: zBack,        r: radius * 0.9 },
    { z: zBack - 1.5,  r: radius * 0.55 },
    { z: zBack - 2.5,  r: 0.0 }
  ];

  for (const st of zStations) {
    if (st.r === 0) {
      rings.push([addVertex(cx, cy, st.z)]);
    } else {
      const ring = [];
      for (let i = 0; i < engSegs; i++) {
        const a = (i / engSegs) * Math.PI * 2;
        ring.push(addVertex(cx + Math.cos(a) * st.r, cy + Math.sin(a) * st.r, st.z));
      }
      rings.push(ring);
    }
  }

  const fanHub = addVertex(cx, cy, zFront - 0.5);
  for (let i = 0; i < engSegs; i++) {
    const next = (i + 1) % engSegs;
    addTri(rings[0][i], fanHub, rings[0][next]);
  }

  for (let s = 0; s < rings.length - 1; s++) {
    const r1 = rings[s];
    const r2 = rings[s + 1];
    if (r2.length === 1) {
      const tip = r2[0];
      for (let i = 0; i < engSegs; i++) {
        const next = (i + 1) % engSegs;
        addTri(r1[i], r1[next], tip);
      }
    } else {
      for (let i = 0; i < engSegs; i++) {
        const next = (i + 1) % engSegs;
        addQuad(r1[i], r1[next], r2[next], r2[i]);
      }
    }
  }
}

buildEngine(1);  // Right engine
buildEngine(-1); // Left engine

// 4. VERTICAL STABILIZER (Tail fin)
const finBaseLE = addVertex(0, 4.2, -22.0);
const finBaseTE = addVertex(0, 3.6, -37.0);
const finTopLE = addVertex(0, 19.5, -34.0);
const finTopTE = addVertex(0, 17.5, -39.0);

const finL_LE = addVertex(-0.5, 4.2, -24.0);
const finL_TE = addVertex(-0.4, 3.6, -37.0);
const finL_TopLE = addVertex(-0.2, 19.2, -34.2);
const finL_TopTE = addVertex(-0.2, 17.4, -38.8);

const finR_LE = addVertex(0.5, 4.2, -24.0);
const finR_TE = addVertex(0.4, 3.6, -37.0);
const finR_TopLE = addVertex(0.2, 19.2, -34.2);
const finR_TopTE = addVertex(0.2, 17.4, -38.8);

addTri(finBaseLE, finL_LE, finL_TopLE);
addTri(finBaseLE, finL_TopLE, finTopLE);
addTri(finBaseLE, finTopLE, finR_TopLE);
addTri(finBaseLE, finR_TopLE, finR_LE);

addQuad(finL_LE, finL_TopLE, finL_TopTE, finL_TE);
addQuad(finR_LE, finR_TE, finR_TopTE, finR_TopLE);
addQuad(finTopLE, finL_TopTE, finTopTE, finR_TopTE);
addQuad(finL_TopTE, finTopTE, finBaseTE, finL_TE);
addQuad(finR_TopTE, finR_TE, finBaseTE, finTopTE);

// 5. HORIZONTAL STABILIZERS
function buildHStab(side) {
  const rootLE = addVertex(2.4 * side, 1.8, -30.0);
  const rootTE = addVertex(2.0 * side, 1.5, -36.5);
  const tipLE = addVertex(14.0 * side, 2.5, -35.5);
  const tipTE = addVertex(13.2 * side, 2.5, -38.5);

  const upperRoot = addVertex(2.2 * side, 2.2, -33.0);
  const lowerRoot = addVertex(2.2 * side, 1.4, -33.0);
  const upperTip = addVertex(13.5 * side, 2.7, -37.0);
  const lowerTip = addVertex(13.5 * side, 2.3, -37.0);

  if (side === 1) {
    addQuad(rootLE, tipLE, upperTip, upperRoot);
    addQuad(upperRoot, upperTip, tipTE, rootTE);
    addQuad(rootTE, tipTE, lowerTip, lowerRoot);
    addQuad(lowerRoot, lowerTip, tipLE, rootLE);
    addQuad(tipLE, tipTE, upperTip, lowerTip);
  } else {
    addQuad(rootLE, upperRoot, upperTip, tipLE);
    addQuad(upperRoot, rootTE, tipTE, upperTip);
    addQuad(rootTE, lowerRoot, lowerTip, tipTE);
    addQuad(lowerRoot, rootLE, tipLE, lowerTip);
    addQuad(tipLE, lowerTip, upperTip, tipTE);
  }
}

buildHStab(1);
buildHStab(-1);

// Generate OBJ content
let obj = "# Airbus A320 Low-Poly 3D Model\n";
obj += "o A320_Plane\n";

for (const v of vertices) {
  obj += `v ${v[0]} ${v[1]} ${v[2]}\n`;
}

obj += "s 1\n";

for (const f of faces) {
  obj += `f ${f.join(' ')}\n`;
}

const assetsDir = path.join(__dirname, '../assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.writeFileSync(path.join(assetsDir, 'plane.obj'), obj);
console.log(`Generated assets/plane.obj with ${vertices.length} vertices and ${faces.length} faces!`);
