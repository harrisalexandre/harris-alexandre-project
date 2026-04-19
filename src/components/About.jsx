import React from 'react';
import FadeInSection from './FadeInSection';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">Sobre mim</h2>
              <h3 className="text-xl text-terracotta font-semibold mb-6">Harris Alexandre</h3>
              <div className="space-y-3 text-sm font-medium text-slate-300 mb-8">
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span> Desenvolvedor Sênior · Air Company</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span> CTO · Alliance Marcas</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span> Professor · CNA Ctrl+Play</p>
              </div>
              <blockquote className="border-l-4 border-terracotta pl-4 italic text-slate-400 mb-8">
                "A tecnologia vai além de ferramentas — ela é um meio de transformação real. Minha missão é desenvolver soluções que gerem valor, escalar ideias e formar pessoas preparadas para o futuro."
              </blockquote>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-slate-400 leading-relaxed">
              <p>
                Profissional de tecnologia com sólida formação acadêmica, múltiplas certificações internacionais e experiência prática em projetos de grande escala — atuando em empresas globais e ambientes de alta performance.
              </p>
              <p>
                Ao longo da carreira, participei de projetos estratégicos em empresas como <strong className="text-white">Google, Amazon, Petrobras, BMW e WEG</strong>, desenvolvendo soluções em cloud, integrações corporativas, segurança e automação de processos. Uma trajetória marcada pela construção de soluções robustas, integrações complexas e arquiteturas escaláveis.
              </p>
              <p>
                Como CTO da Alliance Marcas, lidero o desenvolvimento de sistemas e estratégias digitais. Na Air Company, atuo na criação de soluções modernas com Java, MuleSoft, cloud computing e arquiteturas distribuídas. E como educador no CNA, ensino programação, robótica e IA.
              </p>

              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="text-lg font-bold text-white mb-4">Produto Próprio</h4>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h5 className="font-bold text-terracotta mb-2">SaaS Preço Fácil</h5>
                  <p className="text-sm">Plataforma focada em automação e otimização de processos comerciais — criada do zero, reforçando a visão empreendedora e capacidade de transformar tecnologia em produto real com tração de mercado.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
