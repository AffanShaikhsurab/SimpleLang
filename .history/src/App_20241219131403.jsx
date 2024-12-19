import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import WhySimpleLang from './WhySimpleLang';
import WhatMakesItDifferent from './WhatMakesItDifferent';
import WhoIsItFor from './WhoIsItFor';
import JourneySection from './JourneySection';
import CallToAction from './CallToAction';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhySimpleLang />
      <WhatMakesItDifferent />
      <WhoIsItFor />
      <JourneySection />
      <CallToAction />
    </div>
  );
};

export default App;