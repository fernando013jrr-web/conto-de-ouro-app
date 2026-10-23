import React from 'react';
import { UserCheck, MessageCircle, Sparkles, Download, ArrowRight, Heart, Zap, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onOpenForm: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenForm }) => {
  const steps = [
    {
      number: '01',
      title: 'Conte quem é a criança',
      description: 'Informe nome, idade, interesses e temas favoritos do pequeno.',
      icon: UserCheck,
      pill: 'Perfil do Herói',
      bgNormal: 'bg-[#F6B83F]/15 text-[#653B2A] border-[#F6B83F]/30',
      bgHover: 'group-hover:bg-[#F6B83F] group-hover:text-white group-hover:border-[#F6B83F] group-hover:ring-4 group-hover:ring-[#F6B83F]/25',
      iconHoverRotate: 'group-hover:-rotate-12 group-hover:scale-110',
      tagColor: 'bg-[#F6B83F]/15 text-[#7A4B1A]'
    },
    {
      number: '02',
      title: 'Solicite uma prévia',
      description: 'Preencha o formulário e receba sua prévia no WhatsApp em até 2 horas (pedidos feitos após as 21h são entregues na manhã seguinte).',
      icon: MessageCircle,
      pill: 'WhatsApp em até 2h',
      bgNormal: 'bg-[#68BFA5]/15 text-[#256855] border-[#68BFA5]/30',
      bgHover: 'group-hover:bg-[#68BFA5] group-hover:text-white group-hover:border-[#68BFA5] group-hover:ring-4 group-hover:ring-[#68BFA5]/25',
      iconHoverRotate: 'group-hover:rotate-12 group-hover:scale-110',
      tagColor: 'bg-[#68BFA5]/15 text-[#1F5E4D]'
    },
    {
      number: '03',
      title: 'Personalizamos a aventura',
      description: 'Ilustramos o pequeno conforme a qualidade da foto enviada, criando uma história mágica com nome e dedicatória na primeira página.',
      icon: Sparkles,
      pill: 'Arte Exclusiva',
      bgNormal: 'bg-[#F49A87]/15 text-[#913F30] border-[#F49A87]/30',
      bgHover: 'group-hover:bg-[#F49A87] group-hover:text-white group-hover:border-[#F49A87] group-hover:ring-4 group-hover:ring-[#F49A87]/25',
      iconHoverRotate: 'group-hover:-rotate-12 group-hover:scale-110',
      tagColor: 'bg-[#F49A87]/15 text-[#8F3C2E]'
    },
    {
      number: '04',
      title: 'Receba seu livro digital',
      description: 'Arquivo 100% digital em PDF (300 DPI profissional). Sem frete, pronto para ler em telas ou levar para imprimir onde desejar.',
      icon: Download,
      pill: 'PDF 300 DPI sem frete',
      bgNormal: 'bg-[#653B2A]/10 text-[#653B2A] border-[#653B2A]/20',
      bgHover: 'group-hover:bg-[#653B2A] group-hover:text-[#FFF6E6] group-hover:border-[#653B2A] group-hover:ring-4 group-hover:ring-[#653B2A]/20',
      iconHoverRotate: 'group-hover:rotate-12 group-hover:scale-110',
      tagColor: 'bg-[#653B2A]/10 text-[#653B2A]'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#FFF6E6] border-b border-[#653B2A]/10 relative overflow-hidden">
      {/* Subtle playful background sparks */}
      <div className="absolute top-8 left-10 text-[#F6B83F]/25 text-2xl select-none pointer-events-none animate-pulse">✦</div>
      <div className="absolute bottom-8 right-12 text-[#68BFA5]/25 text-2xl select-none pointer-events-none">★</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6B83F]/20 border border-[#F6B83F]/35 text-xs font-bold uppercase tracking-wider text-[#653B2A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
            <span>Passo a Passo Simples</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#653B2A] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Da sua ideia a uma história feita especialmente para ela.
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/80 leading-relaxed font-normal">
            Sem processos complicados. Uma experiência próxima, ágil e atenciosa do início ao fim.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between hover:border-[#653B2A]/35 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div>
                  {/* Big Number & Playful Interactive Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl sm:text-5xl font-black font-serif text-[#F6B83F]/35 group-hover:text-[#F6B83F] group-hover:scale-105 transition-all duration-300 select-none">
                      {step.number}
                    </span>

                    {/* Interactive Animated Icon Container */}
                    <div className="relative">
                      {/* Floating ambient glow spark on hover */}
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#F6B83F] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 pointer-events-none" />

                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ease-out shadow-xs group-hover:shadow-md ${step.bgNormal} ${step.bgHover}`}
                      >
                        <Icon className={`w-6 h-6 transition-transform duration-300 ease-out ${step.iconHoverRotate}`} />
                      </div>
                    </div>
                  </div>

                  {/* Micro Pill Badge */}
                  <div className="mb-2.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase transition-all duration-300 group-hover:shadow-2xs ${step.tagColor}`}
                    >
                      {step.pill}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#653B2A] mb-2 font-serif group-hover:text-[#91501D] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed">
                    {step.description}
                  </p>

                  {step.number === '03' && (
                    <a
                      href="#transformacao-foto"
                      className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#653B2A] hover:bg-[#F6B83F]/30 bg-[#FFF6E6] px-3 py-1.5 rounded-full border border-[#F6B83F]/40 transition-all cursor-pointer shadow-2xs group/link"
                    >
                      <Sparkles className="w-3 h-3 text-[#F6B83F] group-hover/link:rotate-45 transition-transform" />
                      <span>Ver exemplo da foto do Bento ➔</span>
                    </a>
                  )}
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-6 border-t border-[#653B2A]/10 flex items-center justify-between text-xs font-semibold text-[#653B2A]/70">
                  <span className="group-hover:text-[#653B2A] transition-colors">Etapa {index + 1} de 4</span>
                  <span className="text-[#F6B83F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                    ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-base font-extrabold tracking-wide shadow-md shadow-[#F6B83F]/25 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap border border-[#653B2A]/10 group"
          >
            <span>Começar minha história</span>
            <ArrowRight className="w-4 h-4 text-[#653B2A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
