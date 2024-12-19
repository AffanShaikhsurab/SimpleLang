import React, { useState, useEffect, useRef } from 'react';

const WhatMakesItDifferent = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 50, y: 50, direction: 'east' }); // Initial position and direction
  const robotRef = useRef(null);

  const codeSnippet = `function moveRobot() {
  robot.move("forward", 2);
  robot.turn("right");
  robot.move("forward", 1);

  if (robot.detectObstacle()) {
    robot.stop();
    robot.alert("Path blocked!");
  }
}`;

const executeCode = () => {
    // Simulate robot movement based on the code snippet
    let newPosition = { ...robotPosition };

    // Simplified parsing (replace with a proper parser for complex logic)
    if (codeSnippet.includes('robot.move("forward", 2)')) {
      if (newPosition.direction === 'east') newPosition.x += 20;
      else if (newPosition.direction === 'west') newPosition.x -= 20;
      else if (newPosition.direction === 'north') newPosition.y -= 20;
      else if (newPosition.direction === 'south') newPosition.y += 20;
    }
    if (codeSnippet.includes('robot.turn("right")')) {
        if (newPosition.direction === 'east') newPosition.direction = 'south';
        else if (newPosition.direction === 'south') newPosition.direction = 'west';
        else if (newPosition.direction === 'west') newPosition.direction = 'north';
        else if (newPosition.direction === 'north') newPosition.direction = 'east';
    }
    if (codeSnippet.includes('robot.move("forward", 1)')) {
        if (newPosition.direction === 'east') newPosition.x += 10;
        else if (newPosition.direction === 'west') newPosition.x -= 10;
        else if (newPosition.direction === 'north') newPosition.y -= 10;
        else if (newPosition.direction === 'south') newPosition.y += 10;
    }

    setRobotPosition(newPosition);
  };

  useEffect(() => {
    if (robotRef.current) {
        robotRef.current.style.transform = `translate(${robotPosition.x}px, ${robotPosition.y}px)`;
    }
  }, [robotPosition]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-12">
        <div className="mb-12">
          <div className="text-sm font-medium text-gray-600 mb-4">— UNIQUE FEATURES</div>
          <h2 className="text-4xl font-bold">What Makes SIMPLE Lang Different?</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Align items to start */}
          <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm text-gray-300 shadow-xl overflow-x-auto"> {/* Added overflow for long code */}
            <pre className="text-xs whitespace-pre-wrap">
              {codeSnippet}
            </pre>
            <button onClick={executeCode} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Run Code</button>
          </div>
          <div className="relative border rounded-lg overflow-hidden h-[300px] bg-gray-200"> {/* Added border and fixed height */}
            <div className="absolute w-10 h-10 bg-red-500 rounded-full transition-transform duration-500 ease-in-out" ref={robotRef}></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-3.75m10.5 0V3.93l-3-1.102v-.5h6v.5l-3 1.102v5.07z" />
                  </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesItDifferent;