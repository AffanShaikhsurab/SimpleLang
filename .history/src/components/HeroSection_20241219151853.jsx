import React from 'react';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E8E0E6] via-[#E8E0E6] to-[#E6DCD8]">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="p-6">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
            </svg>
          </div>
          <div className="flex-1 flex justify-center space-x-8">
            <button className="px-6 py-4 text-sm hover:bg-black/5">Home</button>
            <button className="px-6 py-4 text-sm hover:bg-black/5">Our work</button>
            <button className="px-6 py-4 text-sm hover:bg-black/5">About us</button>
            <button className="px-6 py-4 text-sm hover:bg-black/5">Team</button>
          </div>
          <div className="p-4">
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm">
              <span>Sign in</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-16 pt-24">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-gray-600 mb-8 tracking-wide">
            — YOUR BEST CHOICE
          </div>
          <h1 className="text-[64px] font-bold leading-[1.1] mb-6 tracking-tight">
            Programming<br />
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

        {/* Stats */}
        <div className="flex justify-end space-x-16 mt-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">546</div>
            <div className="text-sm text-gray-600">courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">685</div>
            <div className="text-sm text-gray-600">mentors</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow-sm max-w-xs ml-auto">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-sm mb-1">David Alexandrov</div>
              <div className="text-sm text-gray-500 leading-snug">
                Best courses! They are easy to understand and perfectly structured.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="absolute bottom-0 w-full border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-16 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-medium">
              1
            </div>
            <p className="text-sm max-w-xl leading-relaxed">
              You will receive individual career counseling, assistance in preparing your resume and portfolio. Based on your wishes we will find suitable vacancies, prepare you for an interview and do everything we can to make sure you
            </p>
          </div>
          <div className="text-sm">
            <div className="font-medium">© THE LEARNER</div>
            <div className="text-gray-600">2017-2021</div>
          </div>
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
};

export default HeroSection;