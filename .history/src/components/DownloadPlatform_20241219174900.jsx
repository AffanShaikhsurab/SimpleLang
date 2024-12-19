import React from 'react';
import { ArrowRight, Apple, Server } from 'lucide-react';

const DownloadPlatform = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Main container with border and background */}
      <div className="border border-pink-200 rounded-lg bg-pink-50 p-8 relative">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
          {Array(144).fill(null).map((_, i) => (
            <div key={i} className="border-pink-100 border-t border-l" />
          ))}
        </div>
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl font-medium text-gray-900 text-center">
            Download for your platform now
          </h2>
          
          {/* Get Started Button */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md flex items-center space-x-2 transition-colors">
            <span>Get started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Platform Icons */}
          <div className="flex space-x-4">
            <div className="bg-pink-100/60 p-4 rounded-md">
              <Apple className="w-6 h-6 text-gray-800" />
            </div>
            <div className="bg-pink-100/60 p-4 rounded-md">
              <Linux className="w-6 h-6 text-gray-800" />
            </div>
            <div className="bg-pink-100/60 p-4 rounded-md">
              <Server className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Links */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-medium text-gray-900">View pricing</h3>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-medium text-gray-900">Join the community</h3>
        </div>
      </div>
    </div>
  );
};

export default DownloadPlatform;