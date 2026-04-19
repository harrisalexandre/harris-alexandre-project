import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-terracotta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );

  const CrossIcon = () => (
    <svg className="w-5 h-5 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const plans = [
    {
      name: "Starter",
      desc: "O essencial para pequenos fluxos de atendimento.",
      popular: false,
      features: [
        { text: "1 atendente virtual", included: true },
        { text: "Respostas predefinidas (FAQs, sim/não)", included: true },
        { text: "Suporte via WhatsApp", included: true },
        { text: "Agendamento automático", included: false },
        { text: "Vendas e captação de leads", included: false },
      ]
    },
    {
      name: "Pro",
      desc: "Automação completa com agendamento inteligente.",
      popular: true,
      features: [
        { text: "Tudo do Starter", included: true },
        { text: "Agendamento auto + Google Calendar", included: true },
        { text: "Confirmação e lembretes automáticos", included: true },
        { text: "Relatório mensal de atendimentos", included: true },
        { text: "Fluxo ativo de vendas", included: false },
      ]
    },
    {
      name: "Business",
      desc: "Escala total com vendas e personalização profunda.",
      popular: false,
      features: [
        { text: "Tudo do Pro", included: true },
        { text: "Fluxo ativo de vendas e leads", included: true },
        { text: "Integração Google Sheets / CRM", included: true },
        { text: "Personalização completa do fluxo", included: true },
        { text: "Suporte prioritário", included: true },
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 bg-earth-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Investimento</h2>
            <p className="text-lg text-slate-600 mb-8">Soluções que se pagam através do tempo e recursos economizados.</p>
            
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Mensal</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-accent transition-colors focus:outline-none"
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm font-semibold flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Anual
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-terracotta-light/20 text-terracotta-dark">
                  -20%
                </span>
              </span>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {plans.map((plan, idx) => (
            <FadeInSection key={idx} className="relative">
              <div className={`h-full flex flex-col p-8 rounded-3xl ${plan.popular ? 'bg-accent text-white shadow-xl ring-2 ring-accent' : 'bg-white shadow-sm border border-earth-dark/20'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-terracotta text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Mais popular
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>{plan.desc}</p>
                
                <div className="mb-8">
                  <span className={`text-3xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900'}`}>Sob consulta</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feat.included ? <CheckIcon /> : <CrossIcon />}
                      <span className={`text-sm ${!feat.included ? (plan.popular ? 'text-slate-400' : 'text-slate-400') : (plan.popular ? 'text-slate-200' : 'text-slate-700')}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/55991623923?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20plano%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-white text-accent hover:bg-slate-100' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Solicitar proposta
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
