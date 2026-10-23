import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Heart,
  ArrowRight,
  Lock,
  FileText,
  BadgePercent
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CountdownTimer } from './CountdownTimer';

interface PricingSectionProps {
  onOpenForm: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="preco" className="py-16 sm:py-24 bg-[#FFF6E6] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F6B83F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#68BFA5]/20 text-[#653B2A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#68BFA5]/30">
            <BadgePercent className="w-3.5 h-3.5 text-[#68BFA5]" />
            <span>Preço Justo e Sem Surpresas</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#653B2A] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Memórias de ouro que cabem no bolso de toda família.
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/80 leading-relaxed font-normal">
            Você experimenta sem pagar nada adiantado: solicite a prévia gratuita e só adquira o livro completo se realmente amar o resultado!
          </p>
        </div>

        {/* Pricing Card Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#653B2A]/15 shadow-xl">
            {/* Top Badge: Oferta Especial */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F6B83F] text-[#653B2A] px-5 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-md border border-[#653B2A]/10 flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#653B2A]" />
              <span>Oferta Especial de Lançamento</span>
            </div>

            {/* Countdown Urgency Timer Component */}
            <CountdownTimer className="mb-6 sm:mb-8 mt-1" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Price & Value Anchor (5 cols) */}
              <div className="md:col-span-5 text-center md:text-left flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#653B2A]/15 pb-6 md:pb-0 md:pr-8">
                <span className="text-xs font-bold text-[#653B2A]/70 uppercase tracking-wider block mb-1">
                  Livro Digital Personalizado
                </span>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#653B2A] font-serif mb-1">
                  História Completa
                </h3>

                <p className="text-xs font-extrabold text-[#68BFA5] mb-2 flex items-center justify-center md:justify-start gap-1">
                  <span>📖 Capa + Dedicatória + 15 páginas</span>
                </p>

                <p className="text-xs text-[#653B2A]/75 mb-4">
                  Pagamento único • Sem mensalidades • Sem cobranças ocultas
                </p>

                {/* Strikethrough & Highlight Price */}
                <div className="my-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#653B2A]/60">
                    <span>De</span>
                    <span className="line-through font-semibold text-sm">R$ 59,90</span>
                    <span className="bg-[#F49A87]/20 text-[#653B2A] font-bold px-2 py-0.5 rounded-md text-[10px]">
                      50% OFF
                    </span>
                  </div>

                  <div className="flex items-baseline justify-center md:justify-start gap-1 mt-1">
                    <span className="text-lg font-bold text-[#653B2A]">R$</span>
                    <span className="text-5xl sm:text-6xl font-black text-[#653B2A] tracking-tight">
                      29
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#653B2A]">
                      ,90
                    </span>
                  </div>
                </div>

                <div className="mt-2 inline-flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#68BFA5] font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>PIX ou Cartão de Crédito</span>
                </div>

                {/* Zero Risk Callout */}
                <div className="mt-4 p-3 rounded-2xl bg-[#FFF6E6] border border-[#653B2A]/10 text-center md:text-left">
                  <p className="text-[11px] font-bold text-[#653B2A] flex items-center justify-center md:justify-start gap-1 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#68BFA5]" />
                    <span>Prévia 100% Gratuita</span>
                  </p>
                  <p className="text-[10px] text-[#653B2A]/75 leading-tight">
                    Você não paga nada agora. Avalie a capa e as páginas no WhatsApp antes de decidir.
                  </p>
                </div>
              </div>

              {/* Right Column: Inclusions Checklist & CTA (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#653B2A] mb-3 block">
                  Tudo o que está incluso por R$ 29,90:
                </span>

                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#653B2A]/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span>
                      <strong>Livro completo (Capa, Dedicatória + 15 páginas):</strong> arquivo digital em PDF (300 DPI) com resolução editorial para telas ou impressão.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span>
                      <strong>Semelhança inspirada na foto:</strong> características do pequeno capturadas com carinho artístico.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span>
                      <strong>Dedicatória feita na 1ª página:</strong> sua mensagem afetiva eternizada na abertura da história.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span>
                      <strong>2 Rodadas de revisões gratuitas:</strong> ajustes de nome, dedicatória ou detalhes do texto inclusos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span>
                      <strong>Entrega total em até 6 horas:</strong> diretamente no seu WhatsApp e e-mail sem frete (pedidos após as 21h são entregues na manhã seguinte).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#68BFA5] shrink-0 mt-0.5" />
                    <span>
                      <strong>Arquivo salvo para sempre:</strong> guarde no Google Drive, celular ou imprima quantas cópias quiser.
                    </span>
                  </li>
                </ul>

                {/* Direct CTA Button */}
                <button
                  onClick={onOpenForm}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl sm:rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-sm sm:text-base font-extrabold tracking-wide shadow-md shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer group border border-[#653B2A]/10 text-center"
                >
                  <WhatsAppIcon size="md" />
                  <span>Pedir Minha Prévia Grátis no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#653B2A] group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-[#653B2A]/70 text-center mt-2.5 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#68BFA5]" />
                  <span>Solicitação sem compromisso financeiro • Atendimento humanizado</span>
                </p>
              </div>
            </div>
          </div>

          {/* Micro 3 Guarantees below Pricing Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 text-center">
            <div className="p-3 rounded-2xl bg-white border border-[#653B2A]/10 text-xs text-[#653B2A]">
              <span className="font-bold block text-[#653B2A]">Sem Frete</span>
              <span className="text-[11px] text-[#653B2A]/70">Envio digital imediato</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-[#653B2A]/10 text-xs text-[#653B2A]">
              <span className="font-bold block text-[#653B2A]">Risco Zero</span>
              <span className="text-[11px] text-[#653B2A]/70">Aprove a prévia primeiro</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-[#653B2A]/10 text-xs text-[#653B2A]">
              <span className="font-bold block text-[#653B2A]">Pagamento Seguro</span>
              <span className="text-[11px] text-[#653B2A]/70">PIX ou Cartão em até 3x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
