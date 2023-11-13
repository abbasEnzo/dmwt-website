/*
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeModelViewer = () => {
    //constant which determines the spinning of the Model
    const shouldSpinRef = useRef(true);

    useEffect(() => {
        // Set up the scene
        const scene = new THREE.Scene();

        //Lighting elements
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        //camera view and renderer setup
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('model-container').appendChild(renderer.domElement);

        //Loader setup for 3D Model
        const loader = new GLTFLoader();
        loader.load(
            'Room.gltf',
            (gltf) => {
                scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error('Error occurred while trying to load 3D Model', error);
            }
        );

        //Setup of starting camera position
        camera.position.set(0, 5, 5);

        //Orbit controls setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        //Setup animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Check if spinning is allowed
            if (shouldSpinRef.current) {
                // Automatic camera orbit in a circle
                const radius = 10;
                const angle = Date.now() * 0.0005; // Adjust the speed of rotation

                camera.position.x = radius * Math.cos(angle);
                camera.position.z = radius * Math.sin(angle);

                camera.lookAt(0, 0, 0); // Keep the camera looking at the center of the scene
            }

            renderer.render(scene, camera);
        };

        animate();

        //Event listeners for interaction behavior
        const stopSpinning = () => {
            shouldSpinRef.current = false;
        };
        const resumeSpinning = () => {
            shouldSpinRef.current = true;
        };

        //Adding Event listeners to controls
        controls.addEventListener('start', stopSpinning);
        controls.addEventListener('end', resumeSpinning);

        return () => {
            controls.removeEventListener('start', stopSpinning);
            controls.removeEventListener('end', resumeSpinning);
        };
    }, []);

    return <div id="model-container"></div>;
};

export default ThreeModelViewer;*/
