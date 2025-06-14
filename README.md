# 3D Product Viewer

This is a 3D product viewer built with Three.js that allows users to interact with a 3D model of a bed. The application provides an interactive 3D environment where users can rotate, zoom, and pan around the model, as well as hover over different parts to see their names.

## Project Structure

The project is organized into the following main components:

### Main Files
- `index.html` - The main HTML file that contains the canvas for the 3D viewer
- `main.js` - The entry point of the application that initializes and connects all components
- `styles.css` - Contains the styling for the application

### Components Directory (`src/components/`)
The components directory contains modular JavaScript files that handle different aspects of the 3D viewer:

1. `initScene.js` - Initializes the Three.js scene, camera, renderer, and controls
2. `createProduct.js` - Contains the 3D model creation logic for the bed
3. `addLighting.js` - Sets up the lighting system for the scene
4. `interaction.js` - Handles user interactions with the 3D model
5. `cameraAnimation.js` - Manages camera animations and movements

## Model Structure

The 3D model of the bed is created in `createProduct.js` and consists of several parts:

1. Bed Base - The main frame of the bed
2. Mattress - The sleeping surface
3. Bed Legs (4) - The supporting legs
4. Headboard - The back support of the bed

Each part is created using Three.js geometries and materials, and is assigned a name in its `userData` property for identification during interaction.

## Interaction System

The interaction system is implemented in `interaction.js` and provides:

1. Hover effects on different parts of the bed
2. Part identification through an info panel
3. Visual feedback when hovering over parts (highlighting and scaling)

## Lighting System

The lighting system in `addLighting.js` includes:

1. Ambient light for overall scene illumination
2. Main directional light for primary shadows and highlights
3. Fill light for reducing harsh shadows
4. Rim light for edge highlighting

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the local development URL (typically http://localhost:5173)

## Controls

- Left Mouse Button: Rotate the model
- Right Mouse Button: Pan the view
- Mouse Wheel: Zoom in/out
- Hover over parts: See part names and get visual feedback 