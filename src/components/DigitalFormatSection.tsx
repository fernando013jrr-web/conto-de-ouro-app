import React from 'react';
import { FileText, Tablet, Printer, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface DigitalFormatSectionProps {
  onOpenForm?: () => void;
}

export const DigitalFormatSection: React.FC<DigitalFormatSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="livro-digital" className="py-16 sm:py-20 bg-[#FFF6E6] border-y border-[#653B2A]/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6B83F]/20 text-[#653B2A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#F6B83F]/35">
            <FileText className="w-3.5 h-3.5 text-[#F6B83F]" />
            <span>Produto 100% Digital</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#653B2A] tracking-tight mb-3" style={{ textWrap: 'balance' }}>
            Como funciona o seu livro em arquivo digital?
          </h2>

          <p className="text-sm sm:text-base text-[#653B2A]/80 leading-relaxed font-normal">
            Você recebe o livro em um arquivo digital em PDF de altíssima definição (300 DPI), direto no WhatsApp e e-mail. Sem frete e sem espera de correios!
          </p>
        </div>

        {/* Big Showcase Card with "Lucas no Mundo do Futebol" on tablet and print */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#653B2A]/15 shadow-md bg-white mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Real photo of Lucas no Mundo do Futebol */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[400px] bg-stone-100">
              <img
                src={LOCKED_IMAGES.lucasTabletEImpresso}
                alt="Livro infantil personalizado Lucas no Mundo do Futebol da Conto de Ouro — Exibição do arquivo digital em PDF no tablet e impresso em alta definição"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#653B2A]/90 text-[#FFF6E6] text-[11px] font-semibold px-3 py-1.5 rounded-lg backdrop-blur-xs flex items-center gap-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#F6B83F]" />
                <span>Lucas no Mundo do Futebol — Arquivo digital no tablet ou impresso pela família</span>
              </div>
            </div>

            {/* Concise Benefits */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#FFFDF9] to-[#FFF6E6] h-full">
              <div>
                <span className="text-[11px] font-bold text-[#653B2A]/70 uppercase tracking-wider block mb-1">
                  Liberdade de Uso
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#653B2A] font-serif mb-2 leading-snug">
                  Um único arquivo, duas formas de aproveitar
                </h3>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF6E6] border border-[#653B2A]/15 text-xs font-bold text-[#653B2A] mb-4">
                  <FileText className="w-3.5 h-3.5 text-[#F6B83F]" />
                  <span>Estrutura: Capa + Dedicatória + 15 páginas</span>
                </div>

                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#653B2A]/85 leading-relaxed">
                      <strong>Entrega no WhatsApp e E-mail:</strong> download imediato em alta resolução (300 DPI), sem frete nem espera de correio.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#653B2A]/85 leading-relaxed">
                      <strong>Leitura na tela:</strong> cores vivas no tablet, iPad, smartphone ou computador para ler na cama antes de dormir.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#653B2A]/85 leading-relaxed">
                      <strong>Arquivo 100% Pronto para Impressão:</strong> entregamos a arte técnica finalizada em 300 DPI. Pode ser impresso perfeitamente — basta cotar com gráficas rápidas ou papelarias da sua cidade para fazer a impressão encadernada como quiser.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#653B2A]/10 flex items-center justify-between">
                <span className="text-xs text-[#653B2A]/70 font-medium">Arquivo salvo para sempre</span>
                <button
                  onClick={() => {
                    if (onOpenForm) onOpenForm();
                    else {
                      const el = document.getElementById('previa');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-xs font-bold text-[#653B2A] hover:text-[#ebb036] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Pedir minha história</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-[#653B2A]/15 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-3">
              <Tablet className="w-5 h-5 text-[#F6B83F]" />
            </div>
            <h4 className="text-sm font-bold text-[#653B2A] mb-1">1. Leitura no Tablet / Celular</h4>
            <p className="text-xs text-[#653B2A]/75 leading-relaxed">
              Prático para viagens, restaurantes e para a historinha de ninar com luz acolhedora.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#653B2A]/15 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-3">
              <Printer className="w-5 h-5 text-[#68BFA5]" />
            </div>
            <h4 className="text-sm font-bold text-[#653B2A] mb-1">2. 100% Pronto para Gráfica</h4>
            <p className="text-xs text-[#653B2A]/75 leading-relaxed">
              O arquivo já vai pronto para imprimir. Basta cotar com gráficas ou papelarias para ter o livro físico em mãos.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#653B2A]/15 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E6] border border-[#653B2A]/10 flex items-center justify-center text-[#653B2A] mb-3">
              <ShieldCheck className="w-5 h-5 text-[#F49A87]" />
            </div>
            <h4 className="text-sm font-bold text-[#653B2A] mb-1">3. Memória Eterna</h4>
            <p className="text-xs text-[#653B2A]/75 leading-relaxed">
              O arquivo digital não rasga nem amassa. Fica guardado com você para a criança recordar por toda a vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
