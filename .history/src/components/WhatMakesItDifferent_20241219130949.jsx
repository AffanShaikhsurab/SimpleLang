// WhatMakesItDifferent.jsx
import React from 'react';

const WhatMakesItDifferent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-12">
        <div className="mb-12">
          <div className="text-sm font-medium text-gray-600 mb-4">— UNIQUE FEATURES</div>
          <h2 className="text-4xl font-bold">What Makes SIMPLE Lang Different?</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm text-gray-300 shadow-xl">
            <pre className="text-xs">
{`function moveRobot() {
  // Simple, intuitive syntax
  robot.move("forward", 2)
  robot.turn("right")
  robot.move("forward", 1)
  
  // Built-in error prevention
  if (robot.detectObstacle()) {
    robot.stop()
    robot.alert("Path blocked!")
  }
}`}
            </pre>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/400/400" 
              alt="Robot Movement Visualization"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {/* Direction arrows */}
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">↑</div>
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">→</div>
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">↓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};