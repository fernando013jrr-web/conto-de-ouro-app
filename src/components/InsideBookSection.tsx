import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, CheckCircle2, Heart, Eye } from 'lucide-react';
import { BOOK_SPREAD_PAGES } from '../data/books';

interface InsideBookSectionProps {
  onOpenForm: () => void;
}

export const InsideBookSection: React.FC<InsideBookSectionProps> = ({ onOpenForm }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const activePage = BOOK_SPREAD_PAGES[currentPageIndex];

  const handleNext = () => {
    setCurrentPageIndex((prev) => (prev + 1) % BOOK_SPREAD_PAGES.length);
  };

  const handlePrev = () => {
    setCurrentPageIndex((prev) => (prev - 1 + BOOK_SPREAD_PAGES.length) % BOOK_SPREAD_PAGES.length);
  };

  return (
    <section id="por-dentro-do-livro" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6E6] to-[#FFF8EE] border-b border-[#653B2A]/10 relative overflow-hidden scroll-mt-20">
      {/* Soft golden ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#F6B83F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-[#68BFA5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#653B2A]/15 shadow-xs text-xs font-bold text-[#653B2A] uppercase tracking-wider mb-3">
            <Eye className="w-4 h-4 text-[#F6B83F]" />
            <span>Transparência Total</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#653B2A] tracking-tight mb-4 font-serif" style={{ textWrap: 'balance' }}>
            Veja como o livro fica por dentro página por página
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/85 leading-relaxed font-normal">
            Não é apenas uma capa bonita: cada livro conta com <strong>Capa Oficial, Dedicatória com Foto Real e 15 páginas de história completa</strong>, com ilustrações vivas e narrativa pedagógica de alto nível.
          </p>
        </div>

        {/* Quick Quality Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 text-center">
          <div className="bg-white/90 p-3 sm:p-3.5 rounded-2xl border border-[#653B2A]/12 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#653B2A]/70 block">Extensão</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#653B2A]">15 Páginas de Aventura</span>
          </div>
          <div className="bg-white/90 p-3 sm:p-3.5 rounded-2xl border border-[#653B2A]/12 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#653B2A]/70 block">Personalização</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#653B2A]">Criança como Protagonista</span>
          </div>
          <div className="bg-white/90 p-3 sm:p-3.5 rounded-2xl border border-[#653B2A]/12 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#653B2A]/70 block">Afeto Real</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#653B2A]">Dedicatória com Foto</span>
          </div>
          <div className="bg-white/90 p-3 sm:p-3.5 rounded-2xl border border-[#653B2A]/12 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#653B2A]/70 block">Resolução</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#653B2A]">PDF 300 DPI Editorial</span>
          </div>
        </div>

        {/* Interactive Segmented Page Selector Tabs */}
        <div className="flex items-center justify-center mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1.5 bg-white border border-[#653B2A]/15 rounded-2xl shadow-xs gap-1 max-w-full">
            {BOOK_SPREAD_PAGES.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => setCurrentPageIndex(idx)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-extrabold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  currentPageIndex === idx
                    ? 'bg-[#653B2A] text-[#FFF6E6] shadow-xs'
                    : 'text-[#653B2A]/75 hover:text-[#653B2A] hover:bg-[#FFF6E6]'
                }`}
              >
                <span>{page.stepNumber}. {page.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Realistic Book Open Spread Mockup Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl border-2 border-[#653B2A]/15 shadow-xl overflow-hidden p-4 sm:p-8">
            {/* The open book container with spine crease in the middle */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-[#653B2A]/15 bg-[#FFFDF9] shadow-inner overflow-hidden relative">
              {/* Center book spine shadow divider (desktop) */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-6 -translate-x-1/2 pointer-events-none bg-gradient-to-r from-black/8 via-black/18 to-black/6 z-10" />

              {/* Left Page (Illustration) */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px] bg-[#FFF6E6] overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-[#653B2A]/15 p-4 sm:p-6">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-sm border border-[#653B2A]/10 relative group">
                  <img
                    src={activePage.illustrationImage}
                    alt={`Página interna ilustrada do livro infantil personalizado Conto de Ouro - Etapa ${activePage.stepNumber}: ${activePage.title} (${activePage.headline})`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#653B2A]/90 text-[#FFF6E6] text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5 border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
                    <span>{activePage.badge}</span>
                  </div>
                </div>
              </div>

              {/* Right Page (Story Prose & Personalized Elements) */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FFFDF9]">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#653B2A]/70 pb-3 border-b border-[#653B2A]/10 mb-5">
                    <span className="uppercase tracking-wider text-[#653B2A]">{activePage.badge}</span>
                    <span className="font-mono text-[#653B2A]/80">Exemplo da Página {currentPageIndex + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#653B2A] mb-4 font-serif leading-snug">
                    {activePage.headline}
                  </h3>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF6E6] border border-[#653B2A]/12 mb-5 shadow-2xs">
                    <p className="text-sm sm:text-base text-[#653B2A] leading-relaxed font-serif italic">
                      {activePage.textContent}
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#653B2A]/85 bg-white p-3 rounded-xl border border-[#653B2A]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span><strong>Detalhe pedagógico:</strong> {activePage.detailsNote}</span>
                  </div>
                </div>

                {/* Page Navigation Controls */}
                <div className="pt-5 mt-6 border-t border-[#653B2A]/10 flex items-center justify-between">
                  <button
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#653B2A]/20 text-xs font-bold text-[#653B2A] hover:bg-[#FFF6E6] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Página Anterior</span>
                  </button>

                  <div className="flex gap-1.5">
                    {BOOK_SPREAD_PAGES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPageIndex(i)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          currentPageIndex === i ? 'w-6 bg-[#F6B83F]' : 'w-2.5 bg-[#653B2A]/20 hover:bg-[#653B2A]/40'
                        }`}
                        aria-label={`Ir para página ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Próxima Página</span>
                    <ChevronRight className="w-4 h-4 text-[#653B2A]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action trigger below */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <button
              onClick={onOpenForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-base font-extrabold tracking-wide shadow-md shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer border border-[#653B2A]/10"
            >
              <Sparkles className="w-5 h-5 text-[#653B2A]" />
              <span>Quero ver uma prévia com o nome do meu filho</span>
            </button>
          </div>

          <p className="text-center text-xs text-[#653B2A]/65 mt-3">
            Receba a prévia no WhatsApp sem pagar nada adiantado. Você só adquire se amar!
          </p>
        </div>
      </div>
    </section>
  );
};
