// WhoIsItFor.jsx
import React from 'react';
import { Palette, GraduationCap, Baby, Compass } from 'lucide-react';

const WhoIsItFor = () => {
  const audiences = [
    {
      icon: Baby,
      title: 'Children',
      description: 'A playful introduction to programming concepts through interactive games and visual learning'
    },
    {
      icon: Palette,
      title: 'Artists',
      description: 'Express your creativity through code with our visual-first approach to programming'
    },
    {
      icon: GraduationCap,
      title: 'Teachers',
      description: 'Empower your students with a programming language designed for learning and growth'
    },
    {
      icon: Compass,
      title: 'Curious Explorers',
      description: 'Discover the joy of programming with our intuitive and engaging platform'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-12">
        <div className="mb-12">
          <div className="text-sm font-medium text-gray-600 mb-4">— TARGET AUDIENCE</div>
          <h2 className="text-4xl font-bold">Who Is SIMPLE Lang For?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
              <audience.icon className="w-12 h-12 mb-6 text-gray-900" />
              <h3 className="text-xl font-bold mb-4">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};