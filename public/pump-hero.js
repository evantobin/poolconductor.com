// Three.js pool pump hero — loaded via CDN import map
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const canvas = document.getElementById("pump-canvas");
if (!canvas) throw new Error("Canvas not found");

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(18, 1, 0.1, 100);
camera.position.set(0.5, 0.8, 4);
camera.lookAt(-0.2, -0.2, 0);

scene.add(new THREE.AmbientLight(0xe0f0ff, 2.5));
const key = new THREE.DirectionalLight(0xffffff, 6.0);
key.position.set(4, 2, 5);
scene.add(key);
const rim = new THREE.DirectionalLight(0x38bdf8, 3.0);
rim.position.set(-4, 1, -3);
scene.add(rim);
const bottom = new THREE.DirectionalLight(0x7dd3fc, 2.5);
bottom.position.set(0, -2, 2);
scene.add(bottom);

const loader = new GLTFLoader();
let model = null;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

loader.load("/poolpump.glb", (gltf) => {
  model = gltf.scene;
  model.position.set(-0.5, 0.3, 0);
  model.scale.set(2.0, 2.0, 2.0);
  model.rotation.set(-Math.PI / 2, 0, Math.PI / 6);
  model.traverse((child) => {
    if (child.isMesh) {
      child.material.needsUpdate = true;
      if (child.material.color) {
        const hsl = {};
        child.material.color.getHSL(hsl);
        if (hsl.l < 0.3) child.material.color.setHSL(hsl.h, hsl.s * 0.5, 0.5);
      }
    }
  });
  scene.add(model);
  resize();
});

function resize() {
  const container = canvas.parentElement;
  if (!container) return;
  const w = container.clientWidth;
  const h = container.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 0.15;
  targetY = (e.clientY / window.innerHeight - 0.5) * 0.10;
});

let scrollY = 0;
window.addEventListener("scroll", () => {
  scrollY = window.scrollY * 0.0003;
});

function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.y += 0.0003;

    currentX += (targetX - currentX) * 0.01;
    currentY += (targetY - currentY) * 0.01;
    model.rotation.z = Math.PI / 6 + currentY * 0.03;
    model.rotation.y += currentX * 0.03;

    model.rotation.x += scrollY;
  }

  renderer.render(scene, camera);
}

resize();
animate();
