import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Globe creation
    const geometry = new THREE.SphereGeometry(5, 64, 32, 0, Math.PI); // Half sphere
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);


    // Dotted effect (using points)
    const dotGeometry = new THREE.SphereGeometry(5, 64, 32, 0, Math.PI);
    const dotMaterial = new THREE.PointsMaterial({ 
      color: 0x333333,
      size: 0.05,  
    });
    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);



    // Orange dots (example positions - adjust as needed)
    const orangeDotPositions = [
      new THREE.Vector3(4, 1, -1),
      new THREE.Vector3(3.5, -2, 1.5),
      // ...more positions
    ];

    orangeDotPositions.forEach(position => {
      const orangeDotGeometry = new THREE.SphereGeometry(0.1, 16, 8);
      const orangeDotMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600 });
      const orangeDot = new THREE.Mesh(orangeDotGeometry, orangeDotMaterial);
      orangeDot.position.copy(position);
      globe.add(orangeDot); // Add to the globe mesh
    });


    // Camera positioning
    camera.position.z = 10;


     // Orbit controls (optional, for user interaction)
     const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5; 



    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);


       globe.rotation.y += 0.002; // Adjust rotation speed

       controls.update();  // Update orbit controls if used

      renderer.render(scene, camera);
    };

    animate();


    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };


  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />; // Adjust height as needed
};

export default Globe;