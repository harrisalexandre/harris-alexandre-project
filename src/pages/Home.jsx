import React from 'react';
import Hero from '../components/Hero';
import Credibility from '../components/Credibility';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="-mt-24 relative z-20 bg-black/60 backdrop-blur-xl border-t border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] rounded-t-3xl pointer-events-none">
        <Credibility />
        <div id="como-funciona"><HowItWorks /></div>
        <Services />
        <TechStack />
        <div id="faq"><FAQ /></div>
        <FinalCTA />
      </div>
    </>
  );
}
