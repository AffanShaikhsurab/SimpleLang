import { ArrowRight } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ArrowRight } from 'lucide-react';
import Globe from './ui/globe.jsx'; // Import your Globe component

const CallToAction = () => {
  const mountRef = useRef(null);
  const globeCamera = useRef(null);


  
  useEffect(() => {
    const handleScroll = () => {
        if (globeCamera.current) {
          const scrollY = window.scrollY;
          const zoomFactor = 1 + scrollY * 0.001; // Adjust zoom speed
          globeCamera.current.position.z = 10 / zoomFactor; // Zoom out as you scroll
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <section 
      className="py-20 bg-gradient-to-br from-purple-50 to-purple-100 relative" // Make relative for positioning
      style={{ minHeight: '500px' }} // Set a minimum height to see the effect
    >

       <div ref={mountRef} style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: -1 // Place behind the content
        }} >
            <Globe ref={globeCamera} /> {/* Pass ref to Globe */}

        </div>



      <div className="container mx-auto px-12 text-center relative z-10"> {/* Add z-index for content */}
        <div className="max-w-2xl mx-auto"> 
        <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
  

  <div className="container mx-auto px-12 text-center">
    <div className="max-w-2xl mx-auto">
      <div className="text-sm font-medium text-gray-600 mb-4">— JOIN US</div>
      <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
      <p className="text-lg text-gray-600 mb-12">
        SIMPLE Lang is about empowering everyone to create. Start your journey today and become part of our growing community of creators.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-black text-white px-8 py-3 rounded flex items-center space-x-2">
          <span>Start Your Journey</span>
          <ArrowRight size={16} />
        </button>
        <button className="border border-black px-8 py-3 rounded">
          Contact Us
        </button>
      </div>
    </div>
  </div>

</section>
        </div>
      </div>
    </section>
  );
};


export default CallToAction;
