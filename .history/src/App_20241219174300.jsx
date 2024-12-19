
import React, { useRef, useEffect } from 'react';
import Navigation from "./components/Navigation.jsx";
import HeroSection from "./components/HeroSection.jsx";

import WhySimpleLang from "./components/WhySimpleLang.jsx";
import WhatMakesItDifferent from "./components/WhatMakesItDifferent.jsx";
import WhoIsItFor from "./components/WhoIsItFor.jsx";
import JourneySection from "./components/JourneySection.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Globe from './components/ui/globe.jsx';

const App = () => {
    const globeRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (globeRef.current) {
                const scrollY = window.scrollY;
                const initialScale = 1.0; // Initial scale of the globe
                const maxScale = 1.5;  // Maximum zoom level (adjust as needed)
                const scrollRange = 500; // Scroll distance over which zoom happens

                let scale = initialScale + (scrollY / scrollRange) * (maxScale - initialScale);
                scale = Math.min(scale, maxScale); // Limit to maxScale

                globeRef.current.style.transform = `translateZ(-50px) scale(${scale})`; // Zoom and center
            }
        };


        window.addEventListener('scroll', handleScroll); //Important to add and remove event listener to prevent memorry leaks
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <div className="min-h-screen relative"> {/* Relative positioning for globe */}
            <div className="relative z-10"> {/* Content container with higher z-index */}
                <Navigation />
                <HeroSection />
                <WhySimpleLang />
      <WhatMakesItDifferent />
      <WhoIsItFor />
      <JourneySection />
      <CallToAction />

            </div>


            <div
                ref={globeRef}
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) translateZ(-50px)', // Initial centering
                    width: '200%',    // Adjust size as needed
                    height: '200%', 
                    pointerEvents: 'none', // Prevent globe from interfering with clicks on content
                    zIndex: -1,         // Place globe behind content
                }}
            >
                <Globe />
            </div>
        </div>
    );
};

export default App;