import React from 'react';
import { BookOpen, Code, Share } from 'lucide-react';

const JourneySection = () => {
  const steps = [
    {
      icon: BookOpen,
      number: '01',
      title: 'Learn the Basics',
      description: 'Start with interactive tutorials designed to make learning fun and engaging',
    },
    {
      icon: Code,
      number: '02',
      title: 'Create Your First Project',
      description: 'Apply your knowledge by building real projects with guidance and support',
    },
    {
      icon: Share,
      number: '03',
      title: 'Share Your Creations',
      description: 'Join our community and showcase your work to the world',
    },
  ];

  return (
    <section className="journey-section py-20 bg-gradient-to-br from-purple-100 to-transparent">
      <div className="container mx-auto px-12">
        <div className="mb-12">
          <div className="text-sm font-medium text-gray-600 mb-4">— YOUR JOURNEY</div>
          <h2 className="text-4xl font-bold">Journey to Master SIMPLE Lang</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card relative">
              <div
                className="
                  bg-white/20
                  backdrop-blur-lg  /* Increased blur */
                  p-8
                  rounded-xl /* Rounded corners */
                  border /* Added border */
                  border-white/20 /* Subtle white border */
                  shadow-lg /* More prominent shadow */
                  hover:shadow-xl
                  transition-shadow
                  
                "
              >
                <div className="flex items-center justify-between mb-6">
                  <step.icon className="w-12 h-12 text-gray-900" />
                  <span className="text-4xl font-bold text-gray-900/70">{step.number}</span> {/* Slightly transparent number */}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3> {/* Darker title */}
                <p className="text-gray-700">{step.description}</p> {/* Slightly darker description */}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-px bg-gray-300/50 transform translate-x-full" /> {/* More transparent connector */}
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;