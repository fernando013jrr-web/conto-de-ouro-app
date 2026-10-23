import React, { useState } from 'react';
import { Sparkles, Camera, BookOpen, ArrowRight, CheckCircle2, Heart, ShieldCheck, Wand2, Eye } from 'lucide-react';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface PhotoTransformationSectionProps {
  onOpenForm: () => void;
}

export const PhotoTransformationSection: React.FC<PhotoTransformationSectionProps> = ({ onOpenForm }) => {
  const [viewMode, setViewMode] = useState<'side-by-side' | 'slider'>('side-by-side');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section id="transformacao-foto" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EB] to-[#FFF4DE] border-b border-[#FFE5B8]/70 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#F7932F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-200 shadow-xs text-xs font-bold text-[#8A542F] uppercase tracking-wider mb-4">
            <Wand2 className="w-3.5 h-3.5 text-[#F7932F] animate-pulse" />
            <span>A Mágica da Transformação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#32190F] tracking-tight font-serif mb-4" style={{ textWrap: 'balance' }}>
            Envie uma foto simples. <br className="hidden sm:inline" />
            <span className="text-[#F7932F] relative inline-block">
              Veja seu pequeno virar o herói do livro!
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#32190F]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Não precisa de estúdio nem de ensaio profissional: uma foto comum do celular, com boa iluminação, é suficiente para nossa equipe capturar o sorrisinho e os traços mais marcantes da criança.
          </p>

          {/* View Mode Toggle */}
          <div className="mt-6 inline-flex items-center p-1 bg-white rounded-full border border-[#FFE5B8] shadow-xs text-xs font-semibold text-[#8A542F]">
            <button
              type="button"
              onClick={() => setViewMode('side-by-side')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-[#F7932F] text-white shadow-xs'
                  : 'hover:text-[#32190F]'
              }`}
            >
              Lado a Lado (Comparação Completa)
            </button>
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#F7932F] text-white shadow-xs'
                  : 'hover:text-[#32190F]'
              }`}
            >
              Antes & Depois (Interativo)
            </button>
          </div>
        </div>

        {/* Content based on view mode */}
        {viewMode === 'side-by-side' ? (
          /* SIDE BY SIDE PRESENTATION */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Original Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm bg-white rounded-3xl p-4 sm:p-5 border-2 border-dashed border-[#FFE5B8] shadow-lg relative group transition-transform hover:-translate-y-1 duration-300">
                {/* Badge Top Left */}
                <div className="absolute -top-3.5 left-6 bg-[#32190F] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 z-10">
                  <Camera className="w-3.5 h-3.5 text-[#F7932F]" />
                  <span>1. Foto enviada pelos pais</span>
                </div>

                {/* Photo Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFF8EB] border border-[#FFE5B8]/80 shadow-inner">
                  <img
                    src={LOCKED_IMAGES.bentoFotoRealCelular}
                    alt="Foto real enviada pelos pais de uma criança pequena sorrindo com roupão de dinossauro verde para personalização de livro infantil da Conto de Ouro"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* Real Photo Tag */}
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                    Foto real do celular
                  </div>
                </div>

                {/* Photo Annotation Card */}
                <div className="mt-4 bg-[#FFF8EB] rounded-xl p-3 text-xs text-[#32190F] border border-[#FFE5B8]/60 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-[#8A542F]">
                    <span>O que foi enviado:</span>
                    <span className="text-[11px] font-normal bg-white px-2 py-0.5 rounded-full border border-[#FFE5B8]">WhatsApp</span>
                  </div>
                  <p className="text-[#32190F]/90 leading-relaxed">
                    <strong>Bento</strong>, 2 anos e meio. Apaixonado por dinossauros e usando seu roupãozinho verde preferido com capuz de dino e dentinhos brancos.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle: Magic Transformation Connector */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
              <div className="hidden lg:flex flex-col items-center space-y-3">
                <div className="w-0.5 h-8 bg-gradient-to-b from-[#FFE5B8] to-[#F7932F]" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F7932F] to-amber-400 text-white flex items-center justify-center shadow-lg shadow-orange-300/40 animate-bounce duration-1000">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="text-center px-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#F7932F] block">
                    Mágica
                  </span>
                  <span className="text-[11px] text-[#8A542F] font-medium">
                    Conto de Ouro
                  </span>
                </div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-[#F7932F] to-[#FFE5B8]" />
              </div>

              {/* Mobile transition indicator */}
              <div className="lg:hidden flex items-center gap-2 py-2 text-[#F7932F] font-bold text-sm">
                <div className="h-0.5 w-12 bg-[#F7932F]/30" />
                <div className="px-3 py-1 rounded-full bg-[#FFF8EB] border border-[#FFE5B8] flex items-center gap-1.5 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#F7932F]" />
                  <span>Transformação Artística</span>
                </div>
                <div className="h-0.5 w-12 bg-[#F7932F]/30" />
              </div>
            </div>

            {/* Right: The Transformed Book Cover */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm bg-white rounded-3xl p-4 sm:p-5 border-2 border-[#F7932F] shadow-xl shadow-amber-200/40 relative group transition-transform hover:-translate-y-1 duration-300">
                {/* Glow pill top right */}
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#F7932F] to-amber-500 text-white px-3.5 py-1 rounded-full text-xs font-extrabold shadow-md flex items-center gap-1.5 z-10">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>2. O Livro Ilustrado Pronto!</span>
                </div>

                {/* Transformed Book Image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFF8EB] shadow-md border border-amber-200">
                  <img
                    src={LOCKED_IMAGES.bentoCapaTransformada}
                    alt="Capa do livro infantil personalizado Bento e o Mundo dos Dinossauros — Ilustração transformando a foto real da criança no herói da história pela Conto de Ouro"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* High Res & Quality Stamp */}
                  <div className="absolute bottom-3 left-3 bg-[#32190F]/80 backdrop-blur-xs text-amber-200 text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PDF 300 DPI de Alta Resolução</span>
                  </div>
                </div>

                {/* Transformed Book Annotation Card */}
                <div className="mt-4 bg-gradient-to-r from-amber-50 to-[#FFF8EB] rounded-xl p-3 text-xs text-[#32190F] border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-[#F7932F]">
                    <span>Resultado Final:</span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      Aprovado pelos Pais
                    </span>
                  </div>
                  <p className="text-[#32190F] leading-relaxed">
                    O Bento se tornou o protagonista em <em>"Bento e o Mundo dos Dinossauros"</em>, abraçando um simpático filhote com sua roupinha de dino e o mesmo sorriso meigo da foto!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* INTERACTIVE SLIDER VIEW */
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-[#FFE5B8] shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-[#8A542F] mb-3">
                <span className="flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5 text-[#F7932F]" />
                  Foto Original do Celular
                </span>
                <span className="flex items-center gap-1 text-[#F7932F]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Capa Ilustrada Conto de Ouro
                </span>
              </div>

              {/* Split Viewer */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden select-none touch-none shadow-md">
                {/* Book Cover (Background) */}
                <img
                  src={LOCKED_IMAGES.bentoCapaTransformada}
                  alt="Capa do livro infantil transformado"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Original Photo (Clipped on Left) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={LOCKED_IMAGES.bentoFotoRealCelular}
                    alt="Foto original enviada pelos pais"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    Foto enviada
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#F7932F] shadow-xl border-2 border-[#F7932F] flex items-center justify-center font-bold text-xs">
                    ↔
                  </div>
                </div>

                {/* Tag bottom right */}
                <div className="absolute bottom-3 right-3 bg-[#32190F]/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Capa do Livro
                </div>
              </div>

              {/* Slider Input Range */}
              <div className="mt-4 space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full accent-[#F7932F] cursor-ew-resize"
                  aria-label="Controle de antes e depois da transformação"
                />
                <p className="text-center text-xs text-[#8A542F] font-medium flex items-center justify-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#F7932F]" />
                  <span>Arraste para comparar o rostinho real com a ilustração final</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3 Pillars of Similarity & Quality */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/95 rounded-2xl p-5 border border-[#FFE5B8] shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100/70 border border-amber-200 flex items-center justify-center shrink-0 text-[#F7932F]">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#32190F] mb-1 font-serif">Traços e Sorriso Preservados</h4>
              <p className="text-xs text-[#32190F]/80 leading-relaxed">
                Capturamos a expressividade, o formato dos olhinhos, cabelo e sorriso para que a família reconheça a criança instantaneamente.
              </p>
            </div>
          </div>

          <div className="bg-white/95 rounded-2xl p-5 border border-[#FFE5B8] shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-orange-100/70 border border-orange-200 flex items-center justify-center shrink-0 text-[#F7932F]">
              <Wand2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#32190F] mb-1 font-serif">Tema e Roupinha Sob Medida</h4>
              <p className="text-xs text-[#32190F]/80 leading-relaxed">
                A paixão do pequeno ganha vida no enredo: dinossauros, futebol, floresta encantada, super-heróis, bichinhos e muito mais.
              </p>
            </div>
          </div>

          <div className="bg-white/95 rounded-2xl p-5 border border-[#FFE5B8] shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#32190F] mb-1 font-serif">Prévia em até 2h • Entrega 6h</h4>
              <p className="text-xs text-[#32190F]/80 leading-relaxed">
                Você recebe a prévia no WhatsApp em até 2 horas (e o livro completo em até 6 horas), com 2 rodadas de revisões gratuitas.
              </p>
            </div>
          </div>
        </div>

        {/* Direct CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F7932F] text-white text-base sm:text-lg font-bold tracking-wide shadow-lg shadow-orange-300/30 hover:bg-[#e68322] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>Quero ver meu pequeno como personagem</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-[#8A542F] mt-2.5 font-medium">
            Prévia gratuita no WhatsApp • Sem pagamento adiantado • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};
