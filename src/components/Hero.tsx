import React from 'react';
import { Sparkles, BookOpen, Heart } from 'lucide-react';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface HeroProps {
  onOpenForm: () => void;
  onExploreBooks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm, onExploreBooks }) => {
  return (
    <section id="inicio" className="relative pt-3 pb-16 sm:pb-20 overflow-hidden">
      {/* Ambient background glow in Amarelo Dourado */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#F6B83F]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Child with Digital Book & Grandma with Physical Book */}
        <div className="relative mx-auto max-w-3xl lg:max-w-4xl text-center mb-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border-2 border-[#653B2A]/15 bg-white">
            <img
              src={LOCKED_IMAGES.heroLunaCamera}
              alt="Livro infantil personalizado Luna na Floresta Encantada da Conto de Ouro — Criança e avó lendo juntas a história em versão digital no tablet e impressa em papel"
              className="w-full h-auto aspect-[16/10] sm:aspect-[16/9] object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Content Block underneath the photo */}
        <div className="flex flex-col items-center text-center relative z-10">
          {/* Social Proof Rating */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#653B2A]/15 shadow-xs text-xs font-semibold text-[#653B2A] mb-3">
            <div className="flex text-[#F6B83F]">
              <span className="text-sm">★★★★★</span>
            </div>
            <span>Nota 4.9/5 • Mais de 1.450 crianças homenageadas</span>
          </div>

          {/* Badge: Soft Golden Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F6B83F]/20 border border-[#F6B83F]/40 text-[#653B2A] text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-5 shadow-xs">
            <span className="text-[#F6B83F] text-xs">◆</span>
            <span>LIVROS INFANTIS DIGITAIS PERSONALIZADOS</span>
            <span className="text-[#F6B83F] text-xs">◆</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#653B2A] leading-[1.12] tracking-tight mb-4 max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Seu pequeno vira o{' '}
            <span className="text-[#653B2A] relative inline-block underline decoration-[#F6B83F] decoration-wavy decoration-3">
              protagonista da própria história
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-lg text-[#653B2A]/85 leading-relaxed max-w-2xl mb-8 font-normal">
            Transformamos crianças em protagonistas de aventuras mágicas. Você recebe um <strong>arquivo 100% digital em PDF (300 DPI)</strong>, sem frete, pronto para ler em tablets e celulares ou levar para imprimir onde desejar.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto mb-3">
            <button
              onClick={onOpenForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-base sm:text-lg font-extrabold tracking-wide shadow-md shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap border border-[#653B2A]/10"
            >
              <Sparkles className="w-5 h-5 text-[#653B2A]" />
              <span>Quero uma prévia gratuita</span>
            </button>

            <button
              onClick={onExploreBooks}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFF6E6] border border-[#653B2A]/25 text-[#653B2A] text-sm sm:text-base font-semibold hover:bg-[#F6B83F]/15 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-[#653B2A]" />
              <span>Ver exemplos de histórias</span>
            </button>
          </div>

          {/* Affective micro-subtext with Coral & Mint */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-[#653B2A]/85 font-medium mb-8">
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#F49A87] fill-[#F49A87]" />
              <span>Uma história única para uma criança inesquecível.</span>
            </div>
            <span className="hidden sm:inline text-[#653B2A]/30">•</span>
            <span className="text-[#653B2A] font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#68BFA5]" />
              Prévia sem compromisso no WhatsApp
            </span>
          </div>

          {/* 3 Quick Value Highlights */}
          <div className="w-full max-w-2xl pt-6 border-t border-[#653B2A]/15 grid grid-cols-3 gap-4 text-center">
            <div className="p-2">
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#653B2A]/70 font-bold">Entrega</p>
              <p className="text-xs sm:text-sm font-semibold text-[#653B2A] mt-0.5">Arquivo Digital PDF</p>
            </div>
            <div className="p-2 border-x border-[#653B2A]/15">
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#653B2A]/70 font-bold">Atendimento</p>
              <p className="text-xs sm:text-sm font-semibold text-[#653B2A] mt-0.5">WhatsApp Direto</p>
            </div>
            <div className="p-2">
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#653B2A]/70 font-bold">Personalizado</p>
              <p className="text-xs sm:text-sm font-semibold text-[#653B2A] mt-0.5">Nome & Ilustração</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
