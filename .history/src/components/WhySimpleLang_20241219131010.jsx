// WhySimpleLang.jsx
import React from 'react';
import { Zap, Brain, Users, Share2 } from 'lucide-react';

const WhySimpleLang = () => {
  const features = [
    {
      icon: Zap,
      title: 'Intuitive',
      description: 'Natural syntax that feels like writing in plain English'
    },
    {
      icon: Brain,
      title: 'Instant',
      description: 'See your code come to life immediately with real-time feedback'
    },
    {
      icon: Users,
      title: 'Fun',
      description: 'Learn through interactive examples and engaging projects'
    },
    {
      icon: Share2,
      title: 'Grows With You',
      description: 'Progress from basics to advanced concepts at your own pace'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-12">
        <div className="mb-12">
          <div className="text-sm font-medium text-gray-600 mb-4">— WHY CHOOSE US</div>
          <h2 className="text-4xl font-bold">Why SIMPLE Lang?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow bg-white">
              <feature.icon className="w-12 h-12 mb-6 text-gray-900" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};