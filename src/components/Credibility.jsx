import React from 'react';
import FadeInSection from './FadeInSection';

export default function Credibility() {
  const logos = [
    "Compass.uol",
    "Petrobrás",
    "BMW",
    "Google",
    "AWS",
    "MuleSoft"
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-transparent pointer-events-none">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center pointer-events-auto">
          <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-6">
            Confiança e experiência global em projetos para
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
            {logos.map((logo, idx) => (
              <div key={idx} className="text-xl font-bold text-slate-300 tracking-tight">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
