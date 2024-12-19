import { Palette, GraduationCap, Baby, Compass, Play } from 'lucide-react';

const HeroSection = () => (
  <div className="relative bg-gradient-to-br from-[#d9c4c7] via-[#e7d8cf] to-[#d4cad9] text-gray-800 font-sans">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-12">
      {/* Left content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="block text-pink-500">YOUR BEST CHOICE</span>
          Programming in simple words
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          All courses are practice-oriented: we keep up-to-date and help with job placements and internships.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Learn more
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
            <Play className="w-5 h-5" /> Watch video
          </button>
        </div>
      </div>

      {/* Right content (image) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <img
            src="/hero-image.jpg"
            alt="Hero"
            className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-lg"></div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h2 className="text-3xl font-bold">546</h2>
        <p className="text-gray-600">Courses</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">685</h2>
        <p className="text-gray-600">Mentors</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">2017-2021</h2>
        <p className="text-gray-600">© THE LEARNER</p>
      </div>
      <div>
        <blockquote className="text-gray-600 italic">
          “Best courses! They are easy to understand and perfectly structured.”
        </blockquote>
        <p className="text-gray-800 font-bold mt-2">David Alexandrov</p>
      </div>
    </div>
  </div>
);

export default HeroSection;
