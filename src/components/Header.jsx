import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const links = [
    { name: 'Como funciona', href: '/#como-funciona' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Sobre mim', href: '/sobre' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white tracking-tight">
          Harris<span className="text-terracotta">.dev</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/55991623923" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-terracotta text-white text-sm font-bold rounded-lg hover:bg-terracotta-light transition-colors shadow-lg shadow-terracotta/20"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
