import * as THREE from '../../node_modules/three/build/three.module.js';

export function createProduct() {
    const product = new THREE.Group();
    
    // Materials
    const bedFrameMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x8B4513, // Brown color
        metalness: 0.2,
        roughness: 0.6,
        clearcoat: 0.1,
        clearcoatRoughness: 0.1
    });

    const mattressMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x808080, // Gray color
        metalness: 0.1,
        roughness: 0.7,
        clearcoat: 0.1,
        clearcoatRoughness: 0.1
    });

    // Bed Base
    const bedBase = new THREE.Mesh(
        new THREE.BoxGeometry(4, 0.3, 6),
        bedFrameMaterial
    );
    bedBase.position.y = 0.95;
    bedBase.userData = { name: 'Bed Base' };
    product.add(bedBase);

    // Mattress
    const mattress = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 0.5, 5.8),
        mattressMaterial
    );
    mattress.position.y = 1.35; // Adjusted Y position for new leg height
    mattress.userData = { name: 'Mattress' };
    product.add(mattress);

    // Bed Legs
    const legGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3); // Increased height to 0.8
    const legPositions = [
        [-1.8, 0.4, -2.8], // Adjusted Y position for new leg height
        [1.8, 0.4, -2.8], // Adjusted Y position for new leg height
        [-1.8, 0.4, 2.8],  // Adjusted Y position for new leg height
        [1.8, 0.4, 2.8]   // Adjusted Y position for new leg height
    ];

    legPositions.forEach((position, index) => {
        const leg = new THREE.Mesh(legGeometry, bedFrameMaterial);
        leg.position.set(...position);
        leg.userData = { name: `Bed Leg ${index + 1}` };
        product.add(leg);
    });

    // Headboard
    const headboard = new THREE.Mesh(
        new THREE.BoxGeometry(4, 2, 0.3),
        bedFrameMaterial
    );
    headboard.position.set(0, 1.8, -3.15); // Adjusted Y position for new leg height
    headboard.userData = { name: 'Headboard' };
    product.add(headboard);

    // Add subtle animation
    const originalY = product.position.y;
    product.userData.animate = (time) => {
        product.position.y = originalY + Math.sin(time * 0.5) * 0.05;
    };

    return product;
} 