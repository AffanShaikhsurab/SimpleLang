import React from 'react';
import Navigation from "./components/Navigation.jsx"
import HeroSection from './HeroSection.jsx';
import WhySimpleLang from './WhySimpleLang';
import WhatMakesItDifferent from './WhatMakesItDifferent';
import WhoIsItFor from './WhoIsItFor';
import JourneySection from './JourneySection.jsx';
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