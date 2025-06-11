import * as THREE from '../../node_modules/three/build/three.module.js';

export function setupCameraAnimation(camera, controls) {
    let autoRotate = true;
    let rotationSpeed = 0.1;
    let lastTime = 0;

    // Toggle auto-rotation when user interacts with controls
    controls.addEventListener('start', () => {
        autoRotate = false;
    });

    controls.addEventListener('end', () => {
        autoRotate = true;
    });

    // Animation function
    function animate(time) {
        if (autoRotate) {
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // Calculate new camera position
            const radius = Math.sqrt(
                camera.position.x * camera.position.x +
                camera.position.z * camera.position.z
            );
            const angle = Math.atan2(camera.position.z, camera.position.x) + rotationSpeed * delta;

            camera.position.x = radius * Math.cos(angle);
            camera.position.z = radius * Math.sin(angle);
            camera.lookAt(0, 0, 0);
        }

        requestAnimationFrame(animate);
    }

    // Start animation
    animate(0);

    // Return controls for cleanup
    return controls;
} 