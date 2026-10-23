import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  Heart,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles
} from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenForm: () => void;
}

interface Review {
  id: string;
  author: string;
  relation: string;
  location: string;
  stars: number;
  bookTitle: string;
  quote: string;
  highlight: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenForm }) => {
  const reviews: Review[] = [
    {
      id: 'rev-1',
      author: 'Camila Mendonça',
      relation: 'Mãe da Luna (5 anos)',
      location: 'São Paulo, SP',
      stars: 5,
      bookTitle: 'Luna na Floresta Encantada',
      quote:
        'A reação da Luna quando abriu o livrinho e viu o nome dela com as ilustrações que pareciam com o jeitinho dela foi indescritível! Os olhinhos dela brilharam. Ela pede para ler todas as noites antes de dormir. O melhor presente que já dei!',
      highlight: '“Os olhinhos dela brilharam!”'
    },
    {
      id: 'rev-2',
      author: 'Roberto Silveira',
      relation: 'Pai do Lucas (6 anos)',
      location: 'Belo Horizonte, MG',
      stars: 5,
      bookTitle: 'Lucas no Mundo do Futebol',
      quote:
        'O Lucas é louco por futebol. Quando viu o livro com ele na camisa 10, levou no outro dia para a escola para mostrar aos coleguinhas. Imprimimos numa papelaria do bairro por menos de R$ 20 e ficou um livro capa dura lindo!',
      highlight: '“Levou pra escola pra mostrar pros amigos!”'
    },
    {
      id: 'rev-3',
      author: 'Marisa Carvalho',
      relation: 'Avó do Davi (4 anos)',
      location: 'Curitiba, PR',
      stars: 5,
      bookTitle: 'Davi e os Dinossauros',
      quote:
        'Eu não queria dar mais um brinquedo plástico que ele enjoa em dois dias. Queria algo que ficasse guardado para a vida toda. O atendimento no WhatsApp foi super atencioso e carinhoso do começo ao fim.',
      highlight: '“Uma lembrança para toda a vida!”'
    },
    {
      id: 'rev-4',
      author: 'Patrícia & Carlos',
      relation: 'Pais do Theo (3 anos)',
      location: 'Rio de Janeiro, RJ',
      stars: 5,
      bookTitle: 'Theo no Reino das Estrelas',
      quote:
        'A historinha do Theo antes de dormir agora é sagrada! Ele se sente o próprio astronauta explorador. A qualidade do arquivo em 300 DPI ficou fantástica no iPad e a dedicatória na primeira página emocionou a família toda.',
      highlight: '“Emocionou toda a família!”'
    },
    {
      id: 'rev-5',
      author: 'Juliana Nogueira',
      relation: 'Madrinha da Helena (4 anos)',
      location: 'Porto Alegre, RS',
      stars: 5,
      bookTitle: 'Helena no Jardim Encantado',
      quote:
        'Dei de presente no aniversário de 4 aninhos e a mãe dela chorou de emoção lendo a dedicatória na abertura. Foi o presente mais especial da festinha, todo mundo elogiou o capricho das ilustrações!',
      highlight: '“O presente mais elogiado da festinha!”'
    },
    {
      id: 'rev-6',
      author: 'Fernando Albuquerque',
      relation: 'Pai do Bento (5 anos)',
      location: 'Florianópolis, SC',
      stars: 5,
      bookTitle: 'Bento e os Dinossauros',
      quote:
        'A semelhança dos traços inspirados na foto foi incrível! O Bentinho tem cachinhos e usa óculos, e vê-lo desenhado assim como o herói que salvou os dinos não tem preço. Valeu cada centavo dos R$ 29,90.',
      highlight: '“Vê-lo como herói não tem preço!”'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items count calculation
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Auto-advance carousel every 4.5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF6E6] via-white to-[#FFF6E6] border-b border-[#653B2A]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F49A87]/20 text-[#653B2A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#F49A87]/35">
            <Heart className="w-3.5 h-3.5 text-[#F49A87] fill-[#F49A87]" />
            <span>Famílias Encantadas</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#653B2A] tracking-tight mb-3 font-serif"
            style={{ textWrap: 'balance' }}
          >
            O que dizem os pais e avós que já presentearam
          </h2>

          <p className="text-sm sm:text-base text-[#653B2A]/80 leading-relaxed font-normal">
            Histórias reais de quem transformou a rotina de leitura e criou memórias inesquecíveis em família.
          </p>

          {/* Social Proof Aggregate Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#653B2A]/15 shadow-xs text-xs font-medium text-[#653B2A]">
            <div className="flex text-[#F6B83F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F6B83F]" />
              ))}
            </div>
            <span className="font-bold">4.9 / 5.0</span>
            <span className="text-[#653B2A]/70">• Mais de 1.450 pequenos homenageados</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Navigation Arrows (Header / Side Bar) */}
          <div className="flex items-center justify-between sm:justify-end gap-2 mb-4">
            <span className="text-xs text-[#653B2A]/70 font-medium sm:hidden">
              Arraste ou use as setas para ver mais:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Avaliação anterior"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F6B83F] border border-[#653B2A]/15 text-[#653B2A] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próxima avaliação"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F6B83F] border border-[#653B2A]/15 text-[#653B2A] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl py-2 -mx-2 sm:-mx-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-[#653B2A]/15 shadow-xs hover:shadow-md hover:border-[#F6B83F]/50 transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Top quotation icon watermark */}
                    <div className="absolute top-4 right-4 text-[#F6B83F]/15 pointer-events-none group-hover:text-[#F6B83F]/25 transition-colors">
                      <Quote className="w-8 h-8 rotate-180" />
                    </div>

                    <div>
                      {/* 5 Stars and book badge */}
                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#653B2A]/10">
                        <div className="flex text-[#F6B83F]" aria-label="5 estrelas">
                          {[...Array(rev.stars)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#F6B83F]" />
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#653B2A] bg-[#FFF6E6] px-2 py-0.5 rounded-md border border-[#653B2A]/15 truncate max-w-[150px]">
                          {rev.bookTitle}
                        </span>
                      </div>

                      {/* Highlight */}
                      <p className="text-sm sm:text-base font-bold text-[#653B2A] font-serif mb-2">
                        {rev.highlight}
                      </p>

                      {/* Full Quote */}
                      <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed italic mb-6">
                        "{rev.quote}"
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="pt-4 border-t border-[#653B2A]/10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F6B83F]/25 flex items-center justify-center text-[#653B2A] font-extrabold text-sm shadow-xs shrink-0 border border-[#F6B83F]/40">
                        {rev.author.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#653B2A] flex items-center gap-1.5 truncate">
                          <span>{rev.author}</span>
                          <span title="Compra Verificada">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#68BFA5] inline shrink-0" />
                          </span>
                        </h4>
                        <p className="text-[11px] text-[#653B2A]/70 truncate">
                          {rev.relation} • {rev.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para grupo de depoimentos ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-7 bg-[#F6B83F]'
                      : 'w-2.5 bg-[#653B2A]/20 hover:bg-[#653B2A]/40'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Risk-Reversal Guarantee Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#FFF6E6] border-2 border-[#653B2A]/15 p-6 sm:p-8 max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#F6B83F]/20 flex items-center justify-center text-[#653B2A] shrink-0 border border-[#F6B83F]/30">
              <ShieldCheck className="w-8 h-8 text-[#653B2A]" />
            </div>

            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-[#653B2A] mb-1 font-serif">
                Garantia e Tranquilidade: Você aprova antes de fechar!
              </h3>
              <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed">
                Nosso atendimento no WhatsApp é 100% humanizado. Você envia as informações, nós preparamos a prévia personalizada e você analisa cada detalhe com toda calma.
              </p>
            </div>

            <button
              onClick={onOpenForm}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-xs sm:text-sm font-extrabold shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 border border-[#653B2A]/10"
            >
              <Sparkles className="w-4 h-4 text-[#653B2A]" />
              <span>Quero minha prévia</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
