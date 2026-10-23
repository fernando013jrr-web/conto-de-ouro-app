import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Camera,
  BookOpen,
  ArrowRight,
  Heart,
  Wand2,
  Clock,
  RotateCcw,
  Play,
  Pause,
  Download
} from 'lucide-react';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface ExemploCapaTransformadaProps {
  onOpenForm: () => void;
}

export const ExemploCapaTransformada: React.FC<ExemploCapaTransformadaProps> = ({ onOpenForm }) => {
  // Current visible frame: 'photo' (Foto Real) | 'cover' (Capa Ilustrada)
  const [activeFrame, setActiveFrame] = useState<'photo' | 'cover'>('cover');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-switch between photo and cover every 3.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev === 'photo' ? 'cover' : 'photo'));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="transformacao-foto"
      className="py-12 sm:py-18 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6E6] to-[#FFF0D4] border-b border-[#653B2A]/10 relative overflow-hidden scroll-mt-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-[#F6B83F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-96 h-96 bg-[#68BFA5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#653B2A]/15 shadow-xs text-xs font-bold text-[#653B2A] uppercase tracking-wider mb-3">
            <Wand2 className="w-4 h-4 text-[#F6B83F] animate-pulse" />
            <span>A Mágica da Personalização</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#653B2A] tracking-tight font-serif mb-3"
            style={{ textWrap: 'balance' }}
          >
            A foto da criança se transforma na{' '}
            <span className="text-[#653B2A] relative inline-block underline decoration-[#F6B83F] decoration-wavy decoration-3">
              capa oficial do livro!
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#653B2A]/85 leading-relaxed font-normal">
            Não precisa de foto profissional: uma imagem comum do celular é suficiente para criarmos a capa do livro com os traços e a alegria do seu pequeno.
          </p>
        </div>

        {/* Automatic Showcase Box */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-3.5 sm:p-5 border-2 border-[#653B2A]/15 shadow-xl relative">
            {/* Top Clickable Tabs: Foto do Celular vs. Capa do Livro */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                onClick={() => {
                  setActiveFrame('photo');
                  setIsPlaying(false);
                }}
                className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeFrame === 'photo'
                    ? 'bg-[#F6B83F] text-[#653B2A] shadow-sm ring-2 ring-[#F6B83F]/40'
                    : 'bg-[#FFF6E6] text-[#653B2A]/80 border border-[#653B2A]/15 hover:bg-[#F6B83F]/15'
                }`}
              >
                <Camera className={`w-4 h-4 ${activeFrame === 'photo' ? 'text-[#653B2A]' : 'text-[#653B2A]/70'}`} />
                <span>1. Foto do Celular</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveFrame('cover');
                  setIsPlaying(false);
                }}
                className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeFrame === 'cover'
                    ? 'bg-[#F6B83F] text-[#653B2A] shadow-sm ring-2 ring-[#F6B83F]/40'
                    : 'bg-[#FFF6E6] text-[#653B2A]/80 border border-[#653B2A]/15 hover:bg-[#F6B83F]/15'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${activeFrame === 'cover' ? 'text-[#653B2A]' : 'text-[#653B2A]/70'}`} />
                <span>2. Capa do Livro</span>
              </button>
            </div>

            {/* The Image Viewer Container (100% full image, smooth crossfade) */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-inner bg-[#FFF6E6] border border-[#653B2A]/15">
              {/* 1. Real Photo Layer */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeFrame === 'photo' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={LOCKED_IMAGES.bentoFotoRealCelular}
                  alt="Foto original enviada pelos pais de uma criança pequena sorrindo com roupão de dinossauro"
                  className="w-full h-full object-cover object-center"
                />
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#653B2A]/90 backdrop-blur-xs text-[#FFF6E6] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/10">
                  <Camera className="w-3.5 h-3.5 text-[#F6B83F]" />
                  <span>Foto Real Enviada no WhatsApp</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs p-2.5 rounded-xl text-center">
                  Bento (2 anos e meio) sorrindo com seu roupãozinho de dinossauro verde favorito
                </div>
              </div>

              {/* 2. Transformed Book Cover Layer */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeFrame === 'cover' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={LOCKED_IMAGES.bentoCapaTransformada}
                  alt="Capa do livro personalizado Bento e o Mundo dos Dinossauros da Conto de Ouro"
                  className="w-full h-full object-cover object-center"
                />
                {/* Floating Tag */}
                <div className="absolute top-3 right-3 bg-[#653B2A] text-[#FFF6E6] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#F6B83F]/50">
                  <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
                  <span>Capa do Livro Pronta!</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#653B2A]/90 backdrop-blur-xs text-[#F6B83F] text-xs p-2.5 rounded-xl text-center font-medium border border-white/10">
                  "Bento e o Mundo dos Dinossauros" • PDF 300 DPI pronto para imprimir
                </div>
              </div>
            </div>

            {/* Play/Pause & Automatic Indicator Bar */}
            <div className="mt-3 flex items-center justify-between bg-[#FFF6E6] px-3.5 py-2 rounded-xl border border-[#653B2A]/10 text-xs text-[#653B2A]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6B83F] ${isPlaying ? 'opacity-75' : 'opacity-0'}`} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F6B83F]" />
                </span>
                <span className="text-[11px] sm:text-xs text-[#653B2A] font-semibold">
                  {isPlaying ? 'Mudança automática a cada 3s' : 'Toque nas abas acima para alternar'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#653B2A]/15 text-[11px] font-bold text-[#653B2A] hover:bg-[#F6B83F]/15 transition-all cursor-pointer shadow-2xs"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#653B2A]" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#68BFA5]" />
                    <span>Continuar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars with "Prévia em até 2h" and "Entrega Total em até 6h" */}
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl p-3.5 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-[#F6B83F]/20 flex items-center justify-center shrink-0 text-[#653B2A]">
                <Clock className="w-4 h-4 text-[#653B2A]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-[#653B2A]">Prévia em até 2h</span>
            </div>
            <p className="text-[11px] text-[#653B2A]/80 leading-relaxed">
              Receba a amostra no WhatsApp em até 2 horas para conferir.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3.5 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-[#68BFA5]/20 flex items-center justify-center shrink-0 text-[#68BFA5]">
                <Download className="w-4 h-4 text-[#68BFA5]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-[#653B2A]">Entrega Total em 6h</span>
            </div>
            <p className="text-[11px] text-[#653B2A]/80 leading-relaxed">
              Livro completo em PDF 300 DPI finalizado em até 6 horas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3.5 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-[#F6B83F]/20 flex items-center justify-center shrink-0 text-[#653B2A]">
                <RotateCcw className="w-4 h-4 text-[#653B2A]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-[#653B2A]">2 Revisões Grátis</span>
            </div>
            <p className="text-[11px] text-[#653B2A]/80 leading-relaxed">
              Você pode ajustar nome, dedicatória e detalhes sem custo.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3.5 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-[#F49A87]/20 flex items-center justify-center shrink-0 text-[#F49A87]">
                <Heart className="w-4 h-4 text-[#F49A87]" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-[#653B2A]">Traços e Sorriso</span>
            </div>
            <p className="text-[11px] text-[#653B2A]/80 leading-relaxed">
              Fidelidade conforme a nitidez e a qualidade da foto enviada.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-base font-extrabold shadow-lg shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer group border border-[#653B2A]/10"
          >
            <Sparkles className="w-4 h-4 text-[#653B2A] group-hover:rotate-12 transition-transform" />
            <span>Quero ver meu filho como herói da história</span>
            <ArrowRight className="w-4 h-4 text-[#653B2A] group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-[#653B2A]/80 mt-2 font-medium">
            Prévia no WhatsApp em até 2h • Entrega total em até 6h • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export const TransformedCoverExample = ExemploCapaTransformada;
export default ExemploCapaTransformada;
