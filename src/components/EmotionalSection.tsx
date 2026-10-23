import React from 'react';
import { Star, Compass, Gift } from 'lucide-react';

export const EmotionalSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFF6E6] border-y border-[#653B2A]/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Narrative Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#653B2A] mb-3">
            <span className="text-base text-[#F6B83F]">✦</span>
            <span>Um presente com significado</span>
            <span className="text-base text-[#F6B83F]">✦</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#653B2A] leading-snug mb-6" style={{ textWrap: 'balance' }}>
            Alguns presentes encantam.{' '}
            <span className="text-[#653B2A]/80">Outros se tornam lembranças para a vida inteira.</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#653B2A]/85 leading-relaxed font-normal">
            <p>
              Imagine a alegria de uma criança ao abrir um livro e descobrir que ela é a personagem principal daquela aventura.
            </p>
            <p>
              Seu nome, suas preferências, um mundo de descobertas e uma história criada especialmente para ela.
            </p>
            <p className="text-[#653B2A] font-semibold pt-1 italic">
              Na Conto de Ouro, acreditamos que a infância é feita de pequenos grandes momentos. Queremos transformar um presente em uma experiência cheia de imaginação, carinho e significado.
            </p>
          </div>
        </div>

        {/* 3 Distinct Benefit Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#653B2A]/15 shadow-xs hover:border-[#653B2A]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F6B83F]/20 text-[#653B2A] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#F6B83F] group-hover:text-[#653B2A] transition-all">
                <Star className="w-6 h-6 stroke-[1.8] text-[#F6B83F]" />
              </div>
              <h3 className="text-xl font-bold text-[#653B2A] mb-3 font-serif">
                A criança é a protagonista
              </h3>
              <p className="text-sm text-[#653B2A]/80 leading-relaxed">
                Uma história personalizada para que ela se reconheça como parte daquela aventura, fortalecendo a autoestima, a curiosidade e o gosto pelos livros desde cedo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#653B2A]/10 text-xs font-semibold text-[#653B2A]/70">
              Identificação & Afeto
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#653B2A]/15 shadow-xs hover:border-[#653B2A]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#68BFA5]/20 text-[#653B2A] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#68BFA5] group-hover:text-white transition-all">
                <Compass className="w-6 h-6 stroke-[1.8] text-[#68BFA5]" />
              </div>
              <h3 className="text-xl font-bold text-[#653B2A] mb-3 font-serif">
                Um universo criado para encantar
              </h3>
              <p className="text-sm text-[#653B2A]/80 leading-relaxed">
                Reinos mágicos, florestas misteriosas, dinossauros fascinantes, espaço sideral e muitos outros mundos imaginários adaptados aos gostos reais do pequeno.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#653B2A]/10 text-xs font-semibold text-[#653B2A]/70">
              Diversos Mundos Mágicos
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#653B2A]/15 shadow-xs hover:border-[#653B2A]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F49A87]/20 text-[#653B2A] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#F49A87] group-hover:text-white transition-all">
                <Gift className="w-6 h-6 stroke-[1.8] text-[#F49A87]" />
              </div>
              <h3 className="text-xl font-bold text-[#653B2A] mb-3 font-serif">
                Um presente diferente de todos os outros
              </h3>
              <p className="text-sm text-[#653B2A]/80 leading-relaxed">
                Uma maneira especial de demonstrar amor e criar uma lembrança personalizada que não se perde no armário e fica guardada para sempre na memória da família.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#653B2A]/10 text-xs font-semibold text-[#653B2A]/70">
              Memória Inesquecível
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
