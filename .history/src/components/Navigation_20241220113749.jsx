import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Navigation = () => {
  const [showDocs, setShowDocs] = useState(true); // State to manage active link

  return (
    <nav className="flex flex-wrap md:flex-nowrap items-center border-b border-gray-200">
      {/* Logo Section */}
      <div className="w-full md:w-48 p-4 border-b md:border-b-0 md:border-r border-gray-200">
        <div className="text-2xl font-bold text-center md:text-left">UUU</div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap md:flex-1">
        {/* Home Link */}
        <a
          href="#"
          onClick={() => showDocs(false)} // Set showDocs to false
          className={`w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left ${
            !showDocs ? 'bg-gray-200' : 'hover:bg-gray-50'
          }`}
        >
          Home
        </a>

        {/* Documentation Link */}
        <a
          href="#"
          onClick={() => showDocs(true)} // Set showDocs to true
          className={`w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left ${
            showDocs ? 'bg-gray-200' : 'hover:bg-gray-50'
          }`}
        >
          Documentation
        </a>

        {/* About Us Link */}
        <a
          href="#"
          className="w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left hover:bg-gray-50"
        >
          About us
        </a>

        {/* Team Link */}
        <a
          href="#"
          className="w-full md:w-auto px-4 py-2 md:px-8 md:py-4 border-b md:border-r border-gray-200 text-sm text-center md:text-left hover:bg-gray-50"
        >
          Team
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
