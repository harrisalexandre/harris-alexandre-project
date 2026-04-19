import React from 'react';
import FadeInSection from '../components/FadeInSection';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0 min-h-screen bg-black/60 backdrop-blur-xl text-slate-300 pointer-events-none">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-24 relative z-10 pointer-events-auto">
        <FadeInSection>
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Voltar para o início
            </Link>
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Sobre mim</h2>
          <h3 className="text-xl text-[#CD7D60] font-medium mb-10">Harris Alexandre</h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-slate-300 mb-16">
            <p>
              Profissional de tecnologia com sólida formação acadêmica, múltiplas certificações internacionais e experiência prática em projetos de grande escala — atuando em empresas globais e ambientes de alta performance.
            </p>
            <p>
              Ao longo da carreira, participei de projetos estratégicos em empresas como <strong className="text-white">Google, Amazon, Petrobras, BMW e WEG</strong>, desenvolvendo soluções em cloud, integrações corporativas, segurança e automação de processos. Uma trajetória marcada pela construção de soluções robustas, integrações complexas e arquiteturas escaláveis — sempre com foco em eficiência, segurança e inovação.
            </p>
            <p>
              Como CTO da Alliance Marcas, lidero o desenvolvimento de sistemas e estratégias digitais, conectando tecnologia, branding e crescimento de negócios. Como Desenvolvedor Sênior na Air Company, atuo na criação de soluções modernas com Java, MuleSoft, cloud computing e arquiteturas distribuídas. E como educador no CNA, transformo conhecimento técnico em aprendizado prático — ensinando programação, robótica e IA.
            </p>
          </div>

          {/* QUOTE BLOCK */}
          <div className="border-l-4 border-[#CD7D60] pl-6 py-1 mb-10">
            <p className="text-xl italic text-white font-medium leading-relaxed mb-4">
              "A tecnologia vai além de ferramentas — ela é um meio de transformação real. Minha missão é desenvolver soluções que gerem valor, escalar ideias e formar pessoas preparadas para o futuro."
            </p>
            <p className="text-[#CD7D60] font-medium">— Harris Alexandre</p>
          </div>
        </FadeInSection>
      </div>

      {/* PRODUTO PRÓPRIO */}
      <div className="relative py-16 text-slate-200 border-y border-white/5 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CD7D60]/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 pointer-events-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#CD7D60]/20 border border-[#CD7D60]/30 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#CD7D60]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#CD7D60] mb-1">Produto Próprio</p>
                <h3 className="text-2xl font-bold mb-3 text-white">SaaS Preço Fácil</h3>
                <p className="text-slate-300 leading-relaxed text-lg font-medium">
                  Plataforma focada em automação e otimização de processos comerciais — criada do zero por Harris, reforçando sua visão empreendedora e capacidade de transformar tecnologia em produto real com tração de mercado.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* ÁREAS DE ATUAÇÃO, EMPRESAS, CERTIFICAÇÕES, STACK */}
      <div className="py-24 relative z-10 pointer-events-none">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pointer-events-auto">
          <FadeInSection>
            
            {/* ÁREAS DE ATUAÇÃO */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <h3 className="text-2xl font-bold text-white">Áreas de atuação</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1C1917] border border-white/5 rounded-2xl p-8">
                  <div className="w-10 h-10 rounded-lg bg-[#CD7D60]/10 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-[#CD7D60]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Sistemas de gestão multiplataforma</h4>
                  <p className="text-sm text-slate-400">Soluções completas de ponta a ponta — do backend ao front, integradas e escaláveis.</p>
                </div>
                
                <div className="bg-[#1C1917] border border-white/5 rounded-2xl p-8">
                  <div className="w-10 h-10 rounded-lg bg-[#CD7D60]/10 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-[#CD7D60]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Integrações e arquitetura de APIs</h4>
                  <p className="text-sm text-slate-400">Integrações corporativas complexas com MuleSoft, Java e cloud computing.</p>
                </div>

                <div className="bg-[#1C1917] border border-white/5 rounded-2xl p-8">
                  <div className="w-10 h-10 rounded-lg bg-[#CD7D60]/10 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-[#CD7D60]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">IA & Machine Learning</h4>
                  <p className="text-sm text-slate-400">Plataformas e pipelines com inteligência artificial aplicada a problemas reais de negócio.</p>
                </div>

                <div className="bg-[#1C1917] border border-white/5 rounded-2xl p-8">
                  <div className="w-10 h-10 rounded-lg bg-[#CD7D60]/10 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-[#CD7D60]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Plataformas educacionais</h4>
                  <p className="text-sm text-slate-400">Projetos de impacto social: programação, robótica e IA para jovens e profissionais.</p>
                </div>
              </div>
            </div>

            {/* EMPRESAS */}
            <div className="mb-24 border-t border-white/5 pt-16">
              <h4 className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">Empresas com as quais colaborou</h4>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 font-medium">
                <span>Google</span>
                <span>Amazon</span>
                <span>Petrobras</span>
                <span>BMW</span>
                <span>WEG</span>
                <span>Instituições Financeiras</span>
              </div>
            </div>

            {/* CERTIFICAÇÕES */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <h3 className="text-2xl font-bold text-white">Certificações</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['AWS Cloud Practitioner', 'AWS Generative AI', 'AWS Partner Technical', 'MuleSoft Integration Specialist'].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#1C1917] border border-white/5 rounded-xl p-5">
                    <span className="w-2 h-2 rounded-full bg-[#CD7D60] shrink-0"></span>
                    <span className="text-white font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STACK TÉCNICO */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                <h3 className="text-2xl font-bold text-white">Stack técnico</h3>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-16">
                  <span className="text-xs font-bold tracking-widest text-[#CD7D60]/80 uppercase w-32 shrink-0">Backend</span>
                  <span className="text-white font-medium">Java · Node.js · MuleSoft · APIs REST</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-16">
                  <span className="text-xs font-bold tracking-widest text-[#CD7D60]/80 uppercase w-32 shrink-0">Cloud</span>
                  <span className="text-white font-medium">AWS · Cloud Computing · Arquiteturas Distribuídas</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-16">
                  <span className="text-xs font-bold tracking-widest text-[#CD7D60]/80 uppercase w-32 shrink-0">Automações</span>
                  <span className="text-white font-medium">n8n · WAHA · Redis · PostgreSQL</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-16">
                  <span className="text-xs font-bold tracking-widest text-[#CD7D60]/80 uppercase w-32 shrink-0">DevOps</span>
                  <span className="text-white font-medium">Docker · CI/CD · Segurança</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-16">
                  <span className="text-xs font-bold tracking-widest text-[#CD7D60]/80 uppercase w-32 shrink-0">Frontend</span>
                  <span className="text-white font-medium">React · TypeScript · Tailwind</span>
                </div>
              </div>
            </div>

          </FadeInSection>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
        
        {/* Glowing Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-[#CD7D60]/15 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 pointer-events-auto">
          <FadeInSection>
            <div className="inline-flex items-center space-x-2 bg-[#CD7D60]/10 px-4 py-1.5 rounded-full mb-8 border border-[#CD7D60]/20">
              <span className="w-2 h-2 rounded-full bg-[#CD7D60] animate-pulse"></span>
              <span className="text-sm font-medium text-[#CD7D60]">Disponível para novos projetos</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Quer conversar sobre um projeto?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Me chama no WhatsApp — respondo rápido.
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
      </div>

    </div>
  );
}
