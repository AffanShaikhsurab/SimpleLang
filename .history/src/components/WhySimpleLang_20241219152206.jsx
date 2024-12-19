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
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Background blur elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center md:text-left">
          <div className="inline-block">
            <div className="text-sm font-medium text-gray-600 mb-4">— WHY CHOOSE US</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why SIMPLE Lang?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl backdrop-blur-sm bg-white/30 border border-white/50 hover:bg-white/40 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 inline-block">
                  <feature.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySimpleLang;