import React from 'react';
import Typed from 'react-typed';
import { Play } from 'lucide-react';

const HeroSection = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-[#E8E0E6] via-[#E8E0E6] to-[#E6DCD8]">
    {/* Navigation */}

    {/* Main Content */}
    <div className="container mx-auto px-16 pt-24">
      <div className="max-w-2xl">
        <div className="text-sm font-medium text-gray-600 mb-8 tracking-wide">
          — YOUR BEST CHOICE
        </div>
        <h1 className="text-[64px] font-bold leading-[1.1] mb-6 tracking-tight">
          <Typed
            strings={['Programming', 'Coding', 'Development']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          <br />
          in <span className="underline decoration-2">simple</span> words
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
          All courses are practice-oriented: we keep up-to-date and help with job placements and internships.
        </p>
        <div className="flex space-x-6">
          <button className="bg-black text-white px-8 py-4 rounded hover:bg-black/90 transition-colors text-sm">
            Learn more
          </button>
          <button className="flex items-center space-x-3 px-8 py-4 text-sm hover:bg-black/5 rounded transition-colors">
            <Play size={18} className="text-gray-800" />
            <span>Watch video</span>
          </button>
        </div>
      </div>
    </div>

    {/* Code Preview */}
    <div className="absolute right-16 top-32 w-[480px]">
      <div className="bg-[#1E1E1E] text-gray-300 p-6 rounded-lg font-mono text-sm shadow-xl">
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-xs leading-relaxed text-gray-300/90">
          {`@import url(https://fonts.g...);

#m3r3d {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  overflow:hidden;
}

.credits{
  position:absolute;
  width: auto;
  margin: auto;
  bottom:0;
  padding:10px 20px;
  font-family:'Open Sans', sans-serif;
  color:#2b2b2b;
  font-size:0.7em;
  text-transform: uppercase;
}`}
        </pre>
      </div>
    </div>

    {/* Center Decoration */}
    <div className="absolute left-1/2 bottom-32 transform -translate-x-1/2">
      <div className="w-8 h-8 relative">
        <div className="absolute inset-0 rotate-45 border-2 border-gray-300"></div>
        <div className="absolute inset-0 border-2 border-gray-300"></div>
      </div>
    </div>
  </div>
);

export default HeroSection;
