import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { initScene } from './components/initScene.js';
import { createProduct } from './components/createProduct.js';
import { addLighting } from './components/addLighting.js';
import { setupInteraction } from './components/interaction.js';
import { setupCameraAnimation } from './components/cameraAnimation.js';

// Initialize scene, camera, and renderer
const { scene, camera, renderer, controls } = initScene();

// Create the product
const product = createProduct();
scene.add(product);

// Add lighting
addLighting(scene);

// Setup interaction
setupInteraction(scene, camera, renderer, product);

// Setup camera animation
setupCameraAnimation(camera, controls);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate(); 