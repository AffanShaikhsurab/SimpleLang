import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Globe } from './ui/globe'; // Ensure Globe component is correctly imported

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-sm font-medium text-gray-600 mb-4">— JOIN US</div>
          <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-lg text-gray-600 mb-12">
            SIMPLE Lang is about empowering everyone to create. Start your journey today and become part of our growing community of creators.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-8 py-3 rounded flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight size={16} />
            </button>
            <button className="border border-black px-8 py-3 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Globe Component: Set width and height explicitly */}
      <div className="w-full h-96 mx-auto mt-12">
        <Globe className="w-full h-full" /> {/* Ensure Globe takes up full space */}
      </div>
    </section>
  );
};

export default CallToAction;
