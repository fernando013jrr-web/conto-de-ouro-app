import React from 'react';
import { Heart, Sparkles, Gift, Users } from 'lucide-react';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface GrandparentsFamilySectionProps {
  onOpenForm: () => void;
}

export const GrandparentsFamilySection: React.FC<GrandparentsFamilySectionProps> = ({ onOpenForm }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF6E6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F6B83F]/15 via-[#FFF6E6] to-[#F6B83F]/20 rounded-3xl border border-[#653B2A]/15 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image: Heartwarming photograph */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={LOCKED_IMAGES.avoEmocionadaLendo}
                  alt="Avó emocionada lendo com o neto um livro infantil personalizado da Conto de Ouro — Momento afetivo em família"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Affective quote badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#653B2A]/90 text-white p-3 rounded-xl backdrop-blur-xs text-xs">
                  <p className="font-serif italic">
                    “O melhor presente não é um brinquedo que ele esquece em uma semana, é uma memória que fica no coração.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A542F] mb-3">
                <Heart className="w-4 h-4 text-[#F7932F] fill-[#F7932F]" />
                <span>Feito de puro afeto</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#32190F] leading-tight mb-5 font-serif" style={{ textWrap: 'balance' }}>
                Para a avó que quer ver os olhinhos do neto brilharem.
              </h2>

              <div className="space-y-4 text-base text-[#32190F]/85 leading-relaxed font-normal mb-6">
                <p>
                  Você já imaginou entregar ao seu netinho um livro em que ele é o grande herói?
                </p>
                <p>
                  A cada página, uma nova descoberta. A cada ilustração, um motivo para sorrir. E, no centro de tudo, uma criança percebendo que aquela aventura foi pensada especialmente para ela.
                </p>
                <p>
                  É mais do que dar um livro. É oferecer um momento de surpresa, imaginação e carinho.
                </p>
              </div>

              {/* Family inclusion notice (avós, pais, padrinhos, tios) */}
              <div className="p-4 rounded-xl bg-[#FFF8EB] border border-[#FFE5B8] mb-6 w-full flex items-start gap-3">
                <Users className="w-5 h-5 text-[#8A542F] shrink-0 mt-0.5" />
                <div className="text-xs text-[#32190F]/90 leading-relaxed">
                  <strong className="text-[#32190F]">Para toda a família:</strong> Perfeito para pais, mães, avós, padrinhos e tios que buscam um presente autêntico e inesquecível.
                </div>
              </div>

              <div className="mb-6 flex items-center gap-2 text-sm font-medium text-[#8A542F]">
                <Gift className="w-4 h-4 text-[#F7932F]" />
                <span>Um presente para aniversários, Natal, datas especiais ou simplesmente para surpreender.</span>
              </div>

              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F7932F] text-white text-base font-semibold tracking-wide shadow-md hover:bg-[#e68322] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Quero presentear meu pequeno</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
