import React from 'react';
import { Sparkles, Compass, Rocket, Trees, Map, CheckCircle2 } from 'lucide-react';
import { CUSTOM_THEMES } from '../data/books';

interface CustomizationThemesProps {
  onSelectTheme: (themeName: string) => void;
}

export const CustomizationThemes: React.FC<CustomizationThemesProps> = ({ onSelectTheme }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F7932F]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#8A542F]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#F7932F]" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#8A542F]" />;
      case 'Map':
      default:
        return <Map className="w-6 h-6 text-[#F7932F]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFF8EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A542F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F7932F]" />
            <span>Personalização Completa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#32190F] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Nenhuma aventura precisa começar do mesmo jeito.
          </h2>

          <p className="text-base sm:text-lg text-[#32190F]/80 leading-relaxed font-normal">
            Uma criança sonha em explorar o espaço. Outra quer conhecer os dinossauros. Outra prefere castelos encantados e animais falantes. Queremos conhecer o universo da criança para criar uma experiência que combine com ela.
          </p>
        </div>

        {/* 5 Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CUSTOM_THEMES.map((theme) => (
            <div
              key={theme.id}
              className="p-6 rounded-2xl bg-white border border-[#FFE5B8] shadow-xs hover:border-[#8A542F]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF8EB] border border-[#FFE5B8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(theme.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#32190F] mb-2 font-serif group-hover:text-[#F7932F] transition-colors">
                  {theme.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#32190F]/80 leading-relaxed mb-4">
                  {theme.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#FFE5B8]/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#8A542F]">{theme.popularWith}</span>
                <button
                  onClick={() => onSelectTheme(theme.title)}
                  className="text-xs font-semibold text-[#F7932F] hover:text-[#e68322] cursor-pointer"
                >
                  Escolher
                </button>
              </div>
            </div>
          ))}

          {/* Special Custom Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFE5B8]/40 to-[#FFF8EB] border-2 border-dashed border-[#F7932F]/50 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F7932F]/15 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#F7932F]" />
              </div>
              <h3 className="text-lg font-bold text-[#32190F] mb-2 font-serif">
                Tema Próprio / Ideia Especial
              </h3>
              <p className="text-xs sm:text-sm text-[#32190F]/80 leading-relaxed mb-4">
                Seu pequeno é apaixonado por algo único (como futebol, culinária, mar, instrumentos musicais)? Conte pra gente no WhatsApp e criamos um conceito especial!
              </p>
            </div>
            <button
              onClick={() => onSelectTheme('Tema Personalizado Especial')}
              className="text-xs font-semibold text-[#32190F] hover:text-[#F7932F] self-start cursor-pointer pt-3 border-t border-[#FFE5B8]/80 w-full text-left"
            >
              Conversar sobre um tema exclusivo →
            </button>
          </div>
        </div>

        {/* Honest Transparency Callout on Personalization */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFE5B8]/30 border border-[#FFE5B8] max-w-3xl mx-auto">
          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#8A542F] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#32190F]/85 leading-relaxed">
              <strong className="text-[#32190F] block mb-1">Como funciona a personalização visual:</strong>
              O cliente poderá informar características da criança e referências visuais para orientar a criação, conforme as opções do produto. As ilustrações são <span className="font-semibold text-[#8A542F]">inspiradas nas características da criança</span> (estilo de cabelo, olhos, cor favorita, óculos, detalhes marcantes), garantindo uma arte artística, lúdica e cheia de magia.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
