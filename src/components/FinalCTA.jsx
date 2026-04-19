import React from 'react';
import FadeInSection from './FadeInSection';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
      
      {/* Glowing Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-[#CD7D60]/15 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <FadeInSection>
          <div className="inline-flex items-center space-x-2 bg-[#CD7D60]/10 px-4 py-1.5 rounded-full mb-8 border border-[#CD7D60]/20">
            <span className="w-2 h-2 rounded-full bg-[#CD7D60] animate-pulse"></span>
            <span className="text-sm font-medium text-[#CD7D60]">Disponível para novos projetos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Tem um processo que te consome tempo todo dia?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            A gente resolve isso.
          </p>
          
          <a 
            href="https://wa.me/55991623923" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-3 px-10 py-5 bg-[#CD7D60] text-white text-lg font-bold rounded-xl hover:bg-[#E88C4A] transition-all shadow-lg hover:shadow-[#CD7D60]/20 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Falar no WhatsApp
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
