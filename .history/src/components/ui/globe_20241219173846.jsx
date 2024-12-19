import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Half-sphere geometry
    const geometry = new THREE.SphereGeometry(5, 64, 32, 0, Math.PI); 

    // Gradient material
    const texture = new THREE.TextureLoader().load('/globe-texture.jpg'); //replace url
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color("white") },
        color2: { value: new THREE.Color("pink") },
        globeTexture: {value: texture},
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform sampler2D globeTexture;
        varying vec3 vNormal;
        void main() {
          float mixValue = vNormal.y * 0.5 + 0.5; // Map normal to 0-1 range
          vec3 gradientColor = mix(color1, color2, mixValue);

          gl_FragColor = vec4(gradientColor * texture2D( globeTexture, gl_PointCoord), 1.0);
        }
      `,
    });


    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Dotted effect (using points – can adjust size/color)
    const dotGeometry = new THREE.SphereGeometry(5, 64, 32, 0, Math.PI);
    const dotMaterial = new THREE.PointsMaterial({ color: 0x333333, size: 0.05 });
    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);

    // Orange dots (example – add more positions as needed)
    const orangeDotPositions = [
        new THREE.Vector3(4, 1, -1),
        new THREE.Vector3(3.5, -2, 1.5),
    ];

    orangeDotPositions.forEach(position => {
        const orangeDotGeometry = new THREE.SphereGeometry(0.1, 16, 8);
        const orangeDotMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600 });
        const orangeDot = new THREE.Mesh(orangeDotGeometry, orangeDotMaterial);
        orangeDot.position.copy(position);
        globe.add(orangeDot); 
    });




    camera.position.z = 10;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };

  }, []);



  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};


export default Globe;