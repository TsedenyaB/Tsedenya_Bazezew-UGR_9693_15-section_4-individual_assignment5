import * as THREE from '../../node_modules/three/build/three.module.js';

export function setupInteraction(scene, camera, renderer, product) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const infoPanel = document.getElementById('info-panel');
    const partNameElement = document.getElementById('part-name');
    let selectedObject = null;

    // Handle mouse move
    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(product.children, true);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (selectedObject !== object) {
                // Reset previous selection
                if (selectedObject) {
                    selectedObject.material.emissive.setHex(0x000000);
                    selectedObject.scale.set(1, 1, 1);
                }

                // Highlight new selection
                selectedObject = object;
                selectedObject.material.emissive.setHex(0x333333);
                selectedObject.scale.set(1.1, 1.1, 1.1);

                // Update info panel
                partNameElement.textContent = object.userData.name || 'Unknown Part';
                infoPanel.style.display = 'block';
            }
        } else {
            // Reset when not hovering over any object
            if (selectedObject) {
                selectedObject.material.emissive.setHex(0x000000);
                selectedObject.scale.set(1, 1, 1);
                selectedObject = null;
                infoPanel.style.display = 'none';
            }
        }
    }

    // Handle click
    function onClick(event) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(product.children, true);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            
            // Animate the clicked part
            const originalScale = object.scale.clone();
            object.scale.multiplyScalar(1.2);
            
            setTimeout(() => {
                object.scale.copy(originalScale);
            }, 200);
        }
    }

    // Add event listeners
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    // Cleanup function
    return () => {
        renderer.domElement.removeEventListener('mousemove', onMouseMove);
        renderer.domElement.removeEventListener('click', onClick);
    };
} 