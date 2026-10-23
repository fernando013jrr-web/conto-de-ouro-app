import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, BookOpen, Clock, HelpCircle, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface HeaderProps {
  onOpenForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Top Announcement Banner - Chocolate & Gold Theme */}
      <div className="bg-[#653B2A] text-[#FFF6E6] py-1.5 px-3 sm:px-4 text-xs font-medium shadow-inner relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden text-ellipsis whitespace-nowrap mx-auto sm:mx-0">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#FFF6E6]">
              <Sparkles className="w-3.5 h-3.5 text-[#F6B83F] animate-pulse shrink-0" />
              <span>Livros Digitais Personalizados</span>
            </span>
            <span className="hidden md:inline-block text-[#FFF6E6]/40">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#FFF6E6]/90">
              <Clock className="w-3.5 h-3.5 text-[#F6B83F] shrink-0" />
              <span>Arquivo em PDF • Prévia em até 2h • Entrega total em 6h</span>
            </span>
            <span className="hidden lg:inline-block text-[#FFF6E6]/40">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[#FFF6E6]/90">
              <span className="text-[#F6B83F] font-bold">Apenas R$ 29,90</span>
              <span>(após aprovar sua prévia grátis)</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FFF6E6] text-[11px] font-semibold backdrop-blur-xs border border-white/10">
              ⭐ 4.9/5 (+5.000 famílias felizes)
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF6E6]/95 backdrop-blur-md shadow-md border-b border-[#653B2A]/10 py-2 sm:py-2.5'
            : 'bg-[#FFF6E6]/90 backdrop-blur-sm border-b border-[#653B2A]/8 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Conto de Ouro Brand Logo Lockup */}
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, 'inicio')}
              className="flex items-center gap-3 group focus-visible:rounded-lg select-none"
              title="Conto de Ouro - Página Inicial"
            >
              <div className="relative flex items-center">
                <img
                  src={LOCKED_IMAGES.logo}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== LOCKED_IMAGES.logoFallback) {
                      target.src = LOCKED_IMAGES.logoFallback;
                    }
                  }}
                  alt="Conto de Ouro — Livros Infantis Personalizados"
                  className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Tagline divider for medium+ screens */}
              <div className="hidden lg:flex flex-col border-l border-[#653B2A]/15 pl-3 py-0.5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#653B2A]">
                  Livros Infantis de Ouro
                </span>
                <span className="text-[11px] text-[#653B2A]/70 font-medium">
                  Histórias Personalizadas com Afeto
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-[#653B2A]/85">
              <a
                href="#inicio"
                onClick={(e) => scrollToSection(e, 'inicio')}
                className="px-3 py-1.5 rounded-full hover:text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all"
              >
                Início
              </a>
              <a
                href="#transformacao-foto"
                onClick={(e) => scrollToSection(e, 'transformacao-foto')}
                className="px-3 py-1.5 rounded-full hover:bg-[#F6B83F]/25 transition-all font-bold text-[#653B2A] bg-[#F6B83F]/20 border border-[#F6B83F]/40 flex items-center gap-1 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F6B83F] animate-pulse" />
                <span>Da Foto ao Livro</span>
              </a>
              <a
                href="#livros"
                onClick={(e) => scrollToSection(e, 'livros')}
                className="px-3 py-1.5 rounded-full hover:text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all font-semibold"
              >
                Histórias
              </a>
              <a
                href="#como-funciona"
                onClick={(e) => scrollToSection(e, 'como-funciona')}
                className="px-3 py-1.5 rounded-full hover:text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all"
              >
                Como funciona
              </a>
              <a
                href="#livro-digital"
                onClick={(e) => scrollToSection(e, 'livro-digital')}
                className="px-3 py-1.5 rounded-full hover:text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all"
              >
                Livro Digital (PDF)
              </a>
              <a
                href="#preco"
                onClick={(e) => scrollToSection(e, 'preco')}
                className="px-3 py-1.5 rounded-full hover:text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all font-semibold"
              >
                Preço
              </a>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className="px-3 py-1.5 rounded-full hover:text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all"
              >
                Dúvidas
              </a>
            </nav>

            {/* Zone 3: Fast Pill Badge + Primary CTA Button */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#68BFA5]/15 border border-[#68BFA5]/30 text-xs font-semibold text-[#653B2A]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#68BFA5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#68BFA5]"></span>
                </span>
                <span>Prévia em 2h • Entrega 6h</span>
              </div>

              {/* Primary CTA in Amarelo Dourado & Chocolate */}
              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-xs sm:text-sm font-extrabold tracking-wide shadow-md shadow-[#F6B83F]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap group border border-[#653B2A]/10"
              >
                <Sparkles className="w-4 h-4 text-[#653B2A] transition-transform group-hover:rotate-12 group-hover:scale-110" />
                <span>Pedir Prévia Grátis</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#653B2A] rounded-xl bg-white border border-[#653B2A]/15 hover:bg-[#F6B83F]/15 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#653B2A]" /> : <Menu className="w-5 h-5 text-[#653B2A]" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF6E6] border-b border-[#653B2A]/15 px-5 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#653B2A]/10 text-xs text-[#653B2A]">
            <span className="flex items-center gap-1 font-semibold text-[#653B2A]">
              <Clock className="w-3.5 h-3.5 text-[#F6B83F]" /> Prévia em até 2h • Entrega 6h
            </span>
            <span className="font-semibold bg-[#68BFA5]/20 text-[#653B2A] px-2 py-0.5 rounded-full">
              2 Revisões Grátis
            </span>
          </div>

          <nav className="flex flex-col space-y-1.5 pt-1">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, 'inicio')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-[#653B2A] hover:text-[#653B2A] rounded-xl hover:bg-[#F6B83F]/15 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#F6B83F]" />
                Início
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]/40" />
            </a>

            <a
              href="#transformacao-foto"
              onClick={(e) => scrollToSection(e, 'transformacao-foto')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-[#653B2A] rounded-xl bg-[#F6B83F]/20 border border-[#F6B83F]/40 hover:bg-[#F6B83F]/30 transition-colors shadow-2xs"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#F6B83F] animate-pulse" />
                Da Foto ao Livro (Antes & Depois)
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]" />
            </a>

            <a
              href="#livros"
              onClick={(e) => scrollToSection(e, 'livros')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-[#653B2A] hover:text-[#653B2A] rounded-xl hover:bg-[#F6B83F]/15 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#F6B83F]" />
                Histórias Disponíveis
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]/40" />
            </a>

            <a
              href="#como-funciona"
              onClick={(e) => scrollToSection(e, 'como-funciona')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-[#653B2A] hover:text-[#653B2A] rounded-xl hover:bg-[#F6B83F]/15 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F6B83F]" />
                Como Funciona
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]/40" />
            </a>

            <a
              href="#livro-digital"
              onClick={(e) => scrollToSection(e, 'livro-digital')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-[#653B2A] hover:text-[#653B2A] rounded-xl hover:bg-[#F6B83F]/15 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#68BFA5]" />
                Livro em PDF & Impressão
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]/40" />
            </a>

            <a
              href="#preco"
              onClick={(e) => scrollToSection(e, 'preco')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-[#653B2A] rounded-xl hover:bg-[#F6B83F]/15 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#F6B83F]" />
                Preço Justo (R$ 29,90)
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]/40" />
            </a>

            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-[#653B2A] hover:text-[#653B2A] rounded-xl hover:bg-[#F6B83F]/15 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#F6B83F]" />
                Perguntas Frequentes
              </span>
              <ChevronRight className="w-4 h-4 text-[#653B2A]/40" />
            </a>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-sm font-extrabold shadow-md shadow-[#F6B83F]/25 active:scale-[0.98] transition-all cursor-pointer border border-[#653B2A]/10"
              >
                <Sparkles className="w-4 h-4 text-[#653B2A]" />
                <span>Solicitar Prévia sem Compromisso</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
