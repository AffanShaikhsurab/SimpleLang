import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Navigation = () => (
  <nav className="flex items-center border-b border-gray-200">
    <div className="w-48 p-4 border-r border-gray-200">
      <div className="text-2xl font-bold">UUU</div>
    </div>
    <div className="flex flex-1">
      <a href="#" className="px-8 py-4 border-r border-gray-200 text-sm hover:bg-gray-50">Home</a>
      <a href="#" className="px-8 py-4 border-r border-gray-200 text-sm hover:bg-gray-50">Our work</a>
      <a href="#" className="px-8 py-4 border-r border-gray-200 text-sm hover:bg-gray-50">About us</a>
      <a href="#" className="px-8 py-4 border-r border-gray-200 text-sm hover:bg-gray-50">Team</a>
      <div className="ml-auto px-8 py-4 bg-gray-900">
        <button className="flex items-center space-x-2 text-white">
          <span className="text-sm">Sign in</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;