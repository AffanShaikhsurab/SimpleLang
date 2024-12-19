
import { Palette, GraduationCap, Baby, Compass , Play } from 'lucide-react';


const HeroSection = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
    <div className="container mx-auto pt-20 px-12">
      <div className="max-w-2xl">
        <div className="text-sm font-medium text-gray-600 mb-8">— YOUR BEST CHOICE</div>
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Programming<br />
          in <span className="underline decoration-2">simple</span> words
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          All courses are practice-oriented: we keep up-to-date and help with job placements and internships.
        </p>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-8 py-3 rounded text-sm">
            Learn more
          </button>
          <button className="flex items-center space-x-2 px-8 py-3 text-sm">
            <Play size={16} className="text-gray-600" />
            <span>Watch video</span>
          </button>
        </div>
      </div>
    </div>

    <div className="absolute right-12 top-32 w-96">
      <div className="bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm shadow-xl">
        <pre className="text-xs">
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
      
      <div className="flex justify-end space-x-12 mt-8">
        <div className="text-center">
          <div className="text-4xl font-bold">546</div>
          <div className="text-sm text-gray-600">courses</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold">685</div>
          <div className="text-sm text-gray-600">mentors</div>
        </div>
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow-sm max-w-xs">
        <div className="flex items-center space-x-3">
          <img src="/api/placeholder/40/40" alt="David Alexandrov" className="rounded-full" />
          <div>
            <div className="font-medium">David Alexandrov</div>
            <div className="text-sm text-gray-500">Best courses! They are easy to understand and perfectly structured.</div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 w-full border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-12 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-medium">
            1
          </div>
          <p className="text-sm max-w-xl">
            You will receive individual career counseling, assistance in preparing your resume and portfolio. Based on your wishes we will find suitable vacancies, prepare you for an interview and do everything we can to make sure you
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium">© THE LEARNER</div>
          <div>2017-2021</div>
        </div>
      </div>
    </div>
  </div>
);
export default HeroSection;