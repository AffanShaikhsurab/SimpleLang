import React from 'react';
import Navigation from "./components/Navigation.jsx"
import HeroSection from "./components/HeroSection.jsx";
import WhySimpleLang from "./components/WhySimpleLang.jsx";
import WhatMakesItDifferent from "./components/WhatMakesItDifferent.jsx";
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