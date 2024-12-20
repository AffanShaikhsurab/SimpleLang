import React from 'react';
import { Play } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">

      {/* Background with Grid and Decorative Circle */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 pt-12 lg:pt-24">
        <div className="max-w-2xl">
          
          {/* Tagline */}
          <div className="text-sm font-medium text-gray-600 mb-8 tracking-wide uppercase">
            — YOUR BEST CHOICE
          </div>
          
          {/* Typewriter Effect */}
          <Typewriter
            words={['Create', 'Innovate', 'Inspire']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1200}
          />

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            in <span className="underline decoration-2 text-fuchsia-500">simple</span> words
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            SimplyLang: Empowering the Future, One Word at a Time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-fuchsia-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-fuchsia-600 transition-colors text-sm font-medium">
              Learn more
            </button>
            <button className="flex items-center justify-center space-x-3 px-8 py-4 text-sm hover:bg-black/5 rounded transition-colors">
              <Play size={18} className="text-gray-800" />
              <span>Watch video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Code Preview */}
      <div className="hidden lg:block absolute right-16 top-24 w-96">
        <div className="bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm shadow-xl">
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-xs leading-relaxed opacity-90">
            {`create animal with name , age
    name is "Lion"
    age is 5

    speak do
        show(name)
    .
.

lion is animal with "Lion" , 5

greet do
    lion.speak

    if lion.age equals 5 then
        show("Lion is 5 years old!")
    otherwise
        show("Lion is not 5 years old.")
    .
.

greet()
`}
          </pre>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-4 lg:right-16 text-sm text-gray-600">
        © SimplyLang 2024-2026
      </div>
    </div>
  );
};

export default HeroSection;
