import React from 'react';
import { Sparkles, Heart, Shield, Lock, FileText, RefreshCw, Moon } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE } from '../config/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LegalDocType } from './LegalModal';
import { LOCKED_IMAGES } from '../config/imageAssets';

interface FinalCtaAndFooterProps {
  onOpenForm: () => void;
  onOpenLegal: (doc: LegalDocType) => void;
}

export const FinalCtaAndFooter: React.FC<FinalCtaAndFooterProps> = ({
  onOpenForm,
  onOpenLegal
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Memorable Final CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FFF6E6] via-[#FFF0D4] to-[#F6B83F]/20 border-t border-[#653B2A]/10 relative overflow-hidden text-center">
        {/* Floating background decorative stars */}
        <div className="absolute top-10 left-12 text-[#F6B83F]/40 text-2xl select-none">✦</div>
        <div className="absolute top-16 right-16 text-[#F6B83F]/30 text-3xl select-none">★</div>
        <div className="absolute bottom-12 left-1/4 text-[#653B2A]/20 text-xl select-none">✦</div>
        <div className="absolute bottom-10 right-1/4 text-[#F6B83F]/40 text-2xl select-none">★</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#F6B83F]/20 border border-[#F6B83F]/30 flex items-center justify-center mx-auto mb-6 text-[#653B2A] shadow-inner">
            <Sparkles className="w-8 h-8 text-[#F6B83F]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#653B2A] tracking-tight mb-6 leading-tight" style={{ textWrap: 'balance' }}>
            A próxima grande aventura pode começar com o{' '}
            <span className="text-[#653B2A] underline decoration-[#F6B83F] decoration-wavy decoration-3">nome do seu pequeno</span>.
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/85 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            Crie um presente inesquecível em arquivo digital (PDF 300 DPI) para ler em telas ou imprimir. Prévia 100% gratuita no WhatsApp e livro completo por apenas <strong>R$ 29,90</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={onOpenForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-base sm:text-lg font-extrabold tracking-wide shadow-lg shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap border border-[#653B2A]/10"
            >
              <WhatsAppIcon size="md" />
              <span>Solicitar Prévia Grátis no WhatsApp</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#653B2A]/80 font-medium pt-2">
            <span>✓ Prévia em até 2h</span>
            <span className="text-[#653B2A]/30">•</span>
            <span className="flex items-center gap-1">
              <Moon className="w-3.5 h-3.5 text-[#F6B83F]" />
              <span>Pedidos após as 21h: entregues na manhã seguinte</span>
            </span>
            <span className="text-[#653B2A]/30">•</span>
            <span>✓ 2 Revisões Grátis</span>
          </div>

          <p className="text-xs sm:text-sm text-[#653B2A]/80 font-serif italic mt-8">
            Conto de Ouro — Histórias feitas para pequenos grandes protagonistas.
          </p>
        </div>
      </section>

      {/* Brand Footer - Marrom Chocolate & Creme */}
      <footer id="rodape" className="bg-[#653B2A] text-[#FFF6E6] pt-14 pb-12 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-[#FFF6E6]/15">
            {/* Brand column (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFF6E6] p-1.5 rounded-2xl inline-flex items-center shadow-xs">
                  <img
                    src={LOCKED_IMAGES.logo}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== LOCKED_IMAGES.logoFallback) {
                        target.src = LOCKED_IMAGES.logoFallback;
                      }
                    }}
                    alt="Conto de Ouro — Estúdio Criativo de Livros Infantis Digitais Personalizados"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#FFF6E6]/85 leading-relaxed max-w-sm">
                Estúdio criativo especializado em livros infantis digitais personalizados. Conectando famílias através de histórias onde as crianças são as protagonistas de ouro.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#FFF6E6]/80 pt-1">
                <Heart className="w-3.5 h-3.5 text-[#F49A87] fill-[#F49A87]" />
                <span>Feito com carinho para inspirar a infância.</span>
              </div>
            </div>

            {/* Navigation Links (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6B83F]">Navegação</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FFF6E6]/85">
                <li>
                  <button
                    onClick={() => scrollTo('inicio')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('transformacao-foto')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left flex items-center gap-1 font-bold text-[#F6B83F]"
                  >
                    <span>Da Foto ao Livro</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('livros')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left"
                  >
                    Exemplos de Histórias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('como-funciona')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left"
                  >
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('livro-digital')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left"
                  >
                    Livro em PDF
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('previa')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left"
                  >
                    Solicitar Prévia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('faq')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left"
                  >
                    Perguntas Frequentes
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal & Transparência (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6B83F]">Transparência</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FFF6E6]/85">
                <li>
                  <button
                    onClick={() => onOpenLegal('termos')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#F6B83F]" />
                    <span>Termos de Uso</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegal('privacidade')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#68BFA5]" />
                    <span>Privacidade & LGPD</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegal('trocas')}
                    className="hover:text-[#F6B83F] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-[#F49A87]" />
                    <span>Trocas & Entrega</span>
                  </button>
                </li>
              </ul>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#68BFA5]/20 text-[11px] text-[#FFF6E6] border border-[#68BFA5]/30">
                  <Shield className="w-3 h-3 text-[#68BFA5]" />
                  ECA & LGPD
                </span>
              </div>
            </div>

            {/* Contact & Transparency (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6B83F]">Atendimento</h4>
              <p className="text-xs text-[#FFF6E6]/85 leading-relaxed">
                Nossos pedidos e prévias são atendidos de forma humanizada pelo WhatsApp comercial:
              </p>
              <p className="text-sm font-bold text-[#F6B83F]">
                WhatsApp: {WHATSAPP_DISPLAY_PHONE}
              </p>
              <p className="text-xs text-[#FFF6E6]/90 font-medium">
                CNPJ: 68.047.006/0001-58
              </p>
              <div className="pt-1 text-[11px] text-[#FFF6E6]/70 leading-relaxed">
                Produto 100% digital entregue em arquivo PDF de alta definição (versão A4 para impressão). Sem frete e com envio imediato.
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF6E6]/70 gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left">
              <p>© {new Date().getFullYear()} Conto de Ouro. Todos os direitos reservados.</p>
              <span className="hidden sm:inline text-[#FFF6E6]/40">•</span>
              <p className="text-[#FFF6E6]/85 font-medium">CNPJ: 68.047.006/0001-58</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
              <button
                onClick={() => onOpenLegal('termos')}
                className="hover:text-[#F6B83F] transition-colors cursor-pointer"
              >
                Termos de Uso
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('privacidade')}
                className="hover:text-[#F6B83F] transition-colors cursor-pointer"
              >
                Privacidade & LGPD
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('trocas')}
                className="hover:text-[#F6B83F] transition-colors cursor-pointer"
              >
                Entrega & Trocas
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
