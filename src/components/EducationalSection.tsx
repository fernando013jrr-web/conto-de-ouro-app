import React from 'react';
import { BookOpenCheck, Brain, Sparkles, HeartHandshake, Award, CheckCircle2 } from 'lucide-react';

export const EducationalSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-22 bg-[#FFF6E6] border-t border-[#653B2A]/10 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#F6B83F]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#68BFA5]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6B83F]/20 text-[#653B2A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#F6B83F]/35">
            <Award className="w-4 h-4 text-[#F6B83F]" />
            <span>Desenvolvimento & Pedagogia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#653B2A] tracking-tight mb-4 leading-tight" style={{ textWrap: 'balance' }}>
            Mais que um presente: um incentivo real à leitura e à imaginação.
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/85 leading-relaxed font-normal">
            Nossas histórias unem afeto e cuidado pedagógico para transformar o momento da leitura em uma das experiências mais ricas da infância.
          </p>
        </div>

        {/* 4 Pedagogical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1: Revisão Pedagógica */}
          <div className="bg-white rounded-2xl p-6 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between hover:border-[#653B2A]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-4 group-hover:scale-105 transition-transform">
                <BookOpenCheck className="w-6 h-6 text-[#F6B83F]" />
              </div>
              <h3 className="text-lg font-bold text-[#653B2A] mb-2 font-serif group-hover:text-[#653B2A] transition-colors">
                Revisão Pedagógica
              </h3>
              <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed">
                Textos estruturados com cuidado gramatical, ritmo agradável para leitura em voz alta e vocabulário enriquecedor adaptado à fase de desenvolvimento da criança.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#653B2A]/10 text-[11px] font-bold text-[#653B2A]/70">
              Estrutura narrativa adequada
            </div>
          </div>

          {/* Pillar 2: Incentivo à Leitura */}
          <div className="bg-white rounded-2xl p-6 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between hover:border-[#653B2A]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-4 group-hover:scale-105 transition-transform">
                <Brain className="w-6 h-6 text-[#68BFA5]" />
              </div>
              <h3 className="text-lg font-bold text-[#653B2A] mb-2 font-serif group-hover:text-[#653B2A] transition-colors">
                Incentivo à Leitura
              </h3>
              <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed">
                Ao se ver como herói da história, a criança cria uma conexão afetiva imediata com o livro. Ler deixa de ser uma obrigação e se torna um hábito prazeroso.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#653B2A]/10 text-[11px] font-bold text-[#653B2A]/70">
              Gosto pelos livros desde cedo
            </div>
          </div>

          {/* Pillar 3: Imaginação Ativa */}
          <div className="bg-white rounded-2xl p-6 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between hover:border-[#653B2A]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-[#F6B83F]" />
              </div>
              <h3 className="text-lg font-bold text-[#653B2A] mb-2 font-serif group-hover:text-[#653B2A] transition-colors">
                Estímulo à Imaginação
              </h3>
              <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed">
                Ao contrário das telas com estímulos rápidos e passivos, as histórias ilustradas convidam a criança a sonhar, fazer perguntas e criar seus próprios mundos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#653B2A]/10 text-[11px] font-bold text-[#653B2A]/70">
              Criatividade e pensamento crítico
            </div>
          </div>

          {/* Pillar 4: Valores & Emoções */}
          <div className="bg-white rounded-2xl p-6 border border-[#653B2A]/15 shadow-xs flex flex-col justify-between hover:border-[#653B2A]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-4 group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-6 h-6 text-[#F49A87]" />
              </div>
              <h3 className="text-lg font-bold text-[#653B2A] mb-2 font-serif group-hover:text-[#653B2A] transition-colors">
                Valores & Afeto
              </h3>
              <p className="text-xs sm:text-sm text-[#653B2A]/80 leading-relaxed">
                Enredos que celebram coragem, empatia, respeito à natureza, amizade sincera e o amor entre familiares, fortalecendo a inteligência socioemocional.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#653B2A]/10 text-[11px] font-bold text-[#653B2A]/70">
              Mensagens que ficam para a vida
            </div>
          </div>
        </div>

        {/* Detailed Pedagogical Reassurance Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#653B2A]/15 max-w-4xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#68BFA5] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#653B2A] uppercase tracking-wider">Linguagem Positiva</h4>
                <p className="text-xs text-[#653B2A]/80 mt-1">Histórias sem violência, com resolução pacífica de conflitos e acolhimento.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#68BFA5] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#653B2A] uppercase tracking-wider">Ritual do Sono</h4>
                <p className="text-xs text-[#653B2A]/80 mt-1">Duração ideal de 10 a 15 minutos para acalmar a mente antes de dormir.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#68BFA5] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#653B2A] uppercase tracking-wider">Memória Afetiva</h4>
                <p className="text-xs text-[#653B2A]/80 mt-1">Um momento precioso de conexão entre pais, avós e pequenos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
