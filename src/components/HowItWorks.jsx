import React from 'react';
import FadeInSection from './FadeInSection';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Você me conta o problema",
      desc: "Analisamos seu cenário atual e identificamos os gargalos que estão consumindo seu tempo e energia no dia a dia."
    },
    {
      num: "02",
      title: "Eu monto a automação ideal",
      desc: "Desenvolvo uma solução sob medida integrando as melhores ferramentas do mercado para resolver o problema pela raiz."
    },
    {
      num: "03",
      title: "Vai ao ar em dias, não meses",
      desc: "Entrega rápida, testada e validada. Sua empresa passa a operar de forma automatizada sem longos ciclos de espera."
    }
  ];

  return (
    <section className="py-24 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pointer-events-auto">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">Como funciona</h2>
            <p className="text-lg text-slate-400">Um processo simples, direto e focado em gerar resultados rápidos para você e seu negócio.</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <FadeInSection key={idx} className="relative">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-terracotta/30 mb-6 font-mono">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
