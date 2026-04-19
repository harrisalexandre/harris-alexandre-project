import React from 'react';
import FadeInSection from './FadeInSection';

export default function TechStack() {
  const techs = [
    "Docker", "n8n", "Redis", "PostgreSQL", "WAHA", "Node.js", "AWS", "MuleSoft", "Stripe", "React", "TypeScript"
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-black/40 pointer-events-none">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pointer-events-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {techs.map((tech, idx) => (
              <span key={idx} className="text-sm font-mono font-medium text-slate-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
