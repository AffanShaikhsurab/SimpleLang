import React from 'react';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 pt-12 lg:pt-24">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-gray-600 mb-8 tracking-wide">
            — YOUR BEST CHOICE
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Programming
            <br />
            in <span className="underline decoration-2">simple</span> words
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            All courses are practice-oriented: we keep up-to-date and help with job placements and internships.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-black text-white px-8 py-4 rounded hover:bg-black/90 transition-colors text-sm">
              Learn more
            </button>
            <button className="flex items-center justify-center space-x-3 px-8 py-4 text-sm hover:bg-black/5 rounded transition-colors">
              <Play size={18} className="text-gray-800" />
              <span>Watch video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
     

      {/* Code Preview */}
      <div className="hidden lg:block absolute right-16 top-12 w-96">
        <div className="bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm shadow-xl">
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-xs leading-relaxed opacity-90">
            {`@import url(https://fonts.g...);
#main {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  overflow: hidden;
}

.credits {
  position: absolute;
  width: auto;
  margin: auto;
  bottom: 0;
  padding: 10px 20px;
  font-family: 'Open Sans';
  color: #2b2b2b;
}`}
          </pre>
        </div>

        {/* Testimonial */}
       

      {/* Center Decoration */}
      <div className="absolute left-1/2 bottom-8 lg:bottom-32 transform -translate-x-1/2">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 rotate-45 border-2 border-gray-300"></div>
          <div className="absolute inset-0 border-2 border-gray-300"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-4 lg:left-16 flex items-center space-x-4">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-medium">
          1
        </div>
        <p className="text-sm text-gray-600 max-w-md">
          You will receive individual career counseling, assistance in preparing your resume and portfolio.
        </p>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-4 lg:right-16 text-sm text-gray-600">
        © THE LEARNER 2017-2021
      </div>
    </div>
  );
};

export default HeroSection