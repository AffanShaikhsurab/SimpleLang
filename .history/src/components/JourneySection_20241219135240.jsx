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

  const glassmorphismStyle = {
    background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '16px', // Rounded corners
    border: '1px solid rgba(255, 255, 255, 0.3)', // Subtle border
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)', // Very subtle shadow
  };

  return (
    <section className="journey-section py-20" style={{ backgroundColor: 'rgba(212,202,217,255)' }}>
      <div className="container mx-auto px-12">
        <div className="mb-12 text-center md:text-left">
          <div className="text-sm font-medium text-gray-600 mb-4">— YOUR JOURNEY</div>
          <h2 className="text-4xl font-bold text-gray-800">Journey to Master SIMPLE Lang</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="card p-8 transition-transform duration-300 hover:scale-105 hover:shadow-md relative overflow-hidden" style={glassmorphismStyle}>
                <div className="flex items-center justify-between mb-6">
                  <step.icon className="w-12 h-12 text-gray-700 transition duration-300 group-hover:text-blue-500" />
                  <span className="text-4xl font-bold text-gray-300">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Subtler Glow Effect */}
                <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 transition duration-300 group-hover:opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(173, 216, 230,0.1), transparent)', // More transparent glow
                    zIndex: -1,
                  }}
                />
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-px bg-gray-300 transform translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;