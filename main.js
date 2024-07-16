import * as THREE from "/node_modules/.vite/deps/three.js?v=b6edbe99";
import { GLTFLoader } from "/node_modules/.vite/deps/three_addons_loaders_GLTFLoader__js.js?v=b6edbe99";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const loader = new GLTFLoader();
loader.load('./sity.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});
