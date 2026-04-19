import React from 'react';
import FadeInSection from './FadeInSection';

export default function Services() {
  const services = [
    {
      title: "Sistemas de gestão multiplataforma",
      desc: "Soluções completas de ponta a ponta — do backend ao front, integradas e escaláveis para resolver gargalos reais da sua operação.",
      icon: (
        <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Integrações corporativas e APIs",
      desc: "Integrações complexas e robustas conectando CRMs, ERPs e plataformas de automação usando MuleSoft, Java e Cloud Computing.",
      icon: (
        <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "IA & Machine Learning",
      desc: "Plataformas e pipelines com inteligência artificial aplicada a problemas reais de negócio. Automação inteligente do atendimento à operação.",
      icon: (
        <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Sites e SaaS sob medida",
      desc: "Sistemas completos focados em performance, integração Stripe para pagamentos e interfaces modernas com design conversivo.",
      icon: (
        <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-transparent border-b border-white/5 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pointer-events-auto">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">Áreas de atuação</h2>
            <p className="text-lg text-slate-400">Desenvolvimento de ponta a ponta e integrações que sustentam grandes operações.</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <FadeInSection key={idx}>
              <div className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-terracotta/20 flex items-center justify-center border border-terracotta/30">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
