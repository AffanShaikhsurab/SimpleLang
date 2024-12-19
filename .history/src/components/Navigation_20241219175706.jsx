import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Navigation = () => (
  <nav className="flex flex-wrap md:flex-nowrap items-center border-b border-gray-200">
    {/* Logo Section */}
    <div className="w-full md:w-48 p-4 border-b md:border-b-0 md:border-r border-gray-200">
      <div className="text-2xl font-bold text-center md:text-left">UUU</div>
    </div>
    
    {/* Navigation Links */}
    <div className="flex flex-wrap md:flex-1">
      <a href="#" className="w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left hover:bg-gray-50">
        Home
      </a>
      <a href="#" className="w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left hover:bg-gray-50">
        Our work
      </a>
      <a href="#" className="w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left hover:bg-gray-50">
        About us
      </a>
      <a href="#" className="w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left hover:bg-gray-50">
        Team
      </a>
      
      {/* Sign-in Button */}
      <div className="w-full md:ml-auto px-4 py-2 md:px-8 md:py-4 bg-gray-900 text-center md:text-right">
        <button className="flex items-center justify-center md:justify-start space-x-2 text-white mx-auto md:mx-0">
          <span className="text-sm">Sign in</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;