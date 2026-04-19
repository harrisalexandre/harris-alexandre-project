import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pointer-events-none">
      
      {/* Dark gradient for text legibility on the left */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-[#110e0c]/70 to-transparent pointer-events-none"></div>

      {/* Container to align content to left */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-[10] relative grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-10 pb-32 lg:pt-24 lg:pb-48 pointer-events-auto">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-slate-300 mb-8 border border-white/10 shadow-lg">
            <span>Harris Alexandre</span>
            <span className="text-terracotta font-bold">&bull;</span>
            <span>Engenheiro de Software &amp; Especialista em Automações</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
            Automações que trabalham<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-terracotta-light">enquanto você descansa</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed drop-shadow-sm">
            Desenvolvo soluções sob medida que transformam processos lentos e manuais em sistemas autônomos, para que sua empresa ganhe escala e você recupere seu tempo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#sobre" 
              className="inline-flex justify-center items-center px-8 py-4 bg-terracotta text-white font-bold rounded-xl hover:bg-terracotta-light transition-all shadow-lg hover:shadow-terracotta/20 hover:-translate-y-0.5"
            >
              Conhecer mais
            </a>
            <a 
              href="https://wa.me/55991623923" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </div>
          
        </div>
        {/* Empty column reserved for 3D element */}
        <div className="hidden lg:block relative">
        </div>
      </div>
    </section>
  );
}
