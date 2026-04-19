import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

export default function FAQ() {
  const faqs = [
    {
      q: "Quanto tempo leva pra montar uma automação?",
      a: "A maioria das automações fica pronta e entra no ar em poucos dias, variando de 3 a 10 dias úteis dependendo da complexidade do fluxo desejado."
    },
    {
      q: "Preciso saber programar para usar?",
      a: "De forma alguma. Eu configuro toda a engenharia pesada nos bastidores e entrego um sistema pronto para uso, com uma interface amigável ou diretamente integrado às ferramentas que você já usa."
    },
    {
      q: "Funciona com qualquer número de WhatsApp?",
      a: "Sim! Podemos integrar a automação tanto em um número já existente quanto em um número novo dedicado para o atendimento da sua empresa."
    },
    {
      q: "E se eu quiser cancelar?",
      a: "Sem letras miúdas. Você pode solicitar o cancelamento a qualquer momento sem taxas ocultas ou multas abusivas."
    },
    {
      q: "Posso personalizar além dos planos iniciais?",
      a: "Com certeza. Todo projeto serve como um guia base, mas meu trabalho como engenheiro é construir a solução ideal para o seu cenário específico. Basta entrar em contato."
    },
    {
      q: "O que acontece se as ferramentas que usamos saírem do ar?",
      a: "As automações são construídas com redundâncias e alertas de erro. Caso uma plataforma externa caia, o sistema registra as requisições para reprocessamento assim que o serviço voltar, garantindo que nenhum dado seja perdido."
    },
    {
      q: "Eu preciso treinar minha equipe para usar o novo sistema?",
      a: "O objetivo da automação é justamente retirar o esforço da sua equipe. A maioria das soluções roda de forma invisível nos bastidores. Quando há interação humana, as interfaces são intuitivas e eu forneço treinamento rápido."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-transparent border-b border-white/5 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pointer-events-auto">
        <div className="max-w-2xl">
          <FadeInSection>
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">Perguntas Frequentes</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 bg-[#1A1A1A]">
                    <button 
                      onClick={() => toggle(idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/5 focus:outline-none transition-colors"
                    >
                      <span className="font-semibold text-white">{faq.q}</span>
                      <svg 
                        className={`w-5 h-5 text-terracotta transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-slate-400 leading-relaxed pt-2 border-t border-white/5">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
