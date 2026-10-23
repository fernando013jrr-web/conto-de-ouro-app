import React, { useState } from 'react';
import {
  Heart,
  ChevronDown,
  Moon,
  Sparkles,
  Smile,
  Compass,
  MessageCircleHeart,
  BookOpen
} from 'lucide-react';

interface TipItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  content: string;
  practicalTip: string;
}

export const ParentingTipsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tips: TipItem[] = [
    {
      id: 'tip-1',
      icon: Moon,
      title: '1. O ritual sagrado dos 15 minutos antes de dormir',
      subtitle: 'Como desacelerar a rotina e criar uma transição serena para o sono.',
      content:
        'Reserve 15 minutos exclusivos, com iluminação suave e sem ruídos de televisão ou celulares de adultos por perto. Deite-se ao lado do pequeno e torne o momento previsível: o cérebro da criança reconhece o ritual de leitura como um sinal biológico de segurança, acalmando a ansiedade do dia.',
      practicalTip:
        '💡 Dica prática: Use uma luz amena indireta. Se estiver lendo no tablet, ative o filtro de luz noturna/quente da tela.'
    },
    {
      id: 'tip-2',
      icon: MessageCircleHeart,
      title: '2. Dê vida à leitura com perguntas e vozes divertidas',
      subtitle: 'Estimule a imaginação convidando a criança a co-criar a narrativa.',
      content:
        'Em vez de apenas ler o texto de forma contínua, mude a entonação: uma voz suave para os momentos mágicos, uma voz rápida para a correria da aventura. Faça pausas estratégicas e pergunte: "O que você faria se encontrasse essa criatura?" ou "Como você acha que o nosso herói vai resolver isso?".',
      practicalTip:
        '💡 Dica prática: Ouvir as hipóteses da criança valoriza as ideias dela e exercita a capacidade de resolução de problemas.'
    },
    {
      id: 'tip-3',
      icon: Smile,
      title: '3. Conecte o protagonismo do livro com a vida real',
      subtitle: 'Reforce a autoestima ao lembrar as virtudes que a criança já tem.',
      content:
        'Como a criança é a protagonista da história, você pode usar os acontecimentos do livro como âncoras no dia a dia. Se ela teve coragem de experimentar algo novo ou foi carinhosa com um amigo, comente: "Você viu só como você agiu igualzinho ao herói da sua história hoje?".',
      practicalTip:
        '💡 Dica prática: Isso fixa valores como empatia, paciência e determinação de forma natural e sem sermões.'
    },
    {
      id: 'tip-4',
      icon: Compass,
      title: '4. Explore os detalhes visuais e ilustrações juntos',
      subtitle: 'Desenvolva a percepção espacial, a curiosidade e o foco.',
      content:
        'As ilustrações personalizadas guardam detalhes ricos: o jeitinho do cabelo, a cor favorita ou pistas escondidas no cenário. Convide o pequeno a encontrar elementos na página: "Onde está a estrelinha dourada?" ou "Quantas borboletas você consegue contar?".',
      practicalTip:
        '💡 Dica prática: A leitura visual é tão importante quanto a textual no desenvolvimento cognitivo da primeira infância.'
    },
    {
      id: 'tip-5',
      icon: BookOpen,
      title: '5. Incentive a criança a ser o narrador da vez',
      subtitle: 'Exercite a memória afetiva, a oratória e a expressão de sentimentos.',
      content:
        'Depois de algumas leituras, peça para ela "ler" o livro para você, para os avós no WhatsApp ou até para os bichinhos de pelúcia. Mesmo que ela ainda não seja alfabetizada, ela recontará a história com o próprio vocabulário, baseando-se nas ilustrações e na memória afetiva.',
      practicalTip:
        '💡 Dica prática: Grave um áudio ou vídeo curtinho dela contando a história. É um registro inestimável para recordar daqui a dez anos!'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF6E6] via-white to-[#FFF6E6] border-y border-[#653B2A]/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6B83F]/20 text-[#653B2A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#F6B83F]/35">
            <Heart className="w-3.5 h-3.5 text-[#F49A87] fill-[#F49A87]" />
            <span>Guia Afetivo • Dicas para Pais</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#653B2A] tracking-tight mb-3 font-serif"
            style={{ textWrap: 'balance' }}
          >
            Como criar momentos inesquecíveis de conexão através da leitura
          </h2>

          <p className="text-sm sm:text-base text-[#653B2A]/80 leading-relaxed font-normal">
            Pequenos rituais diários que fortalecem o vínculo emocional, acolhem o sono e transformam o livro em uma ponte de amor em família.
          </p>
        </div>

        {/* Compact Accordion Component */}
        <div className="space-y-3">
          {tips.map((tip, index) => {
            const isOpen = openIndex === index;
            const Icon = tip.icon;

            return (
              <div
                key={tip.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white border-[#F6B83F]/50 shadow-md ring-1 ring-[#F6B83F]/30'
                    : 'bg-white/80 border-[#653B2A]/15 hover:border-[#653B2A]/30 shadow-xs'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#F6B83F] text-[#653B2A]'
                          : 'bg-[#FFF6E6] text-[#653B2A]/80'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#653B2A] leading-snug">
                        {tip.title}
                      </h3>
                      <p className="text-xs text-[#653B2A]/70 truncate mt-0.5 font-normal">
                        {tip.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#FFF6E6] text-[#653B2A] rotate-180'
                        : 'text-[#653B2A]/50 hover:bg-[#FFF6E6]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#653B2A]/85 leading-relaxed border-t border-[#653B2A]/8 animate-in fade-in duration-200">
                    <p className="mb-3 text-[#653B2A]/85">
                      {tip.content}
                    </p>

                    <div className="p-3 rounded-xl bg-[#FFF6E6] border border-[#F6B83F]/35 text-xs text-[#653B2A] font-medium leading-relaxed">
                      {tip.practicalTip}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer Quote */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#653B2A]/75 italic font-serif flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
            <span>"As histórias que contamos aos nossos filhos são os abraços que eles levam para a vida inteira."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParentingTipsSection;
