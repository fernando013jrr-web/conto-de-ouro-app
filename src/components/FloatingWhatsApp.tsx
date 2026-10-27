import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';
import { trackMetaEvent, trackMetaCustomEvent } from '../utils/metaPixel';

interface FloatingWhatsAppProps {
  onOpenForm: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenForm }) => {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Start soft pulse animation a few seconds after the page loads to subtly draw attention
    const pulseTimer = setTimeout(() => {
      setIsPulsing(true);
    }, 2500);

    const handleScroll = () => {
      // Must have scrolled past initial hero zone
      const hasScrolledPastHero = window.scrollY > 250;

      // 1. Check if user is viewing the preview form
      const previaElement = document.getElementById('previa');
      let isPreviaVisible = false;
      if (previaElement) {
        const rect = previaElement.getBoundingClientRect();
        isPreviaVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 80;
      }

      // 2. Check if user has reached the footer / rodapé (mobile experience optimization)
      const rodapeElement = document.getElementById('rodape') || document.querySelector('footer');
      let isRodapeVisible = false;
      if (rodapeElement) {
        const rectRodape = rodapeElement.getBoundingClientRect();
        // Hide as soon as the footer begins entering the viewport
        isRodapeVisible = rectRodape.top <= window.innerHeight;
      }

      // 3. Fallback: check if scroll reached near bottom of page (within 280px of total height)
      const isNearPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 280;

      // Hide button if at the form OR at the footer/bottom of page
      const shouldHide = !hasScrolledPastHero || isPreviaVisible || isRodapeVisible || isNearPageBottom;
      setShowStickyCta(!shouldHide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      clearTimeout(pulseTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const defaultMessage = '✨ Olá, equipe Conto de Ouro! Gostaria de saber como funciona para criar um livro personalizado.';
  const link = buildWhatsAppLink(defaultMessage);

  return (
    <aside
      aria-label="Ações de contato e prévia"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5"
    >
      {/* Sticky "Quero uma prévia" button that accompanies the user down the page */}
      <button
        onClick={onOpenForm}
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-xs sm:text-sm font-extrabold shadow-xl active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap border-2 border-white/90 ${
          showStickyCta
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none max-w-0 !px-0 !py-0 !border-0 overflow-hidden sm:max-w-none sm:!px-5 sm:!py-3 sm:!border-2 sm:invisible'
        }`}
      >
        <Sparkles className="w-4 h-4 text-[#653B2A]" />
        <span>Quero uma prévia</span>
      </button>

      {/* Floating Action Button for WhatsApp with soft pulse animation */}
      <div className="relative flex items-center justify-center">
        {/* Soft glowing ambient ripple ring when pulsing is active */}
        {isPulsing && (
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
            style={{ animationDuration: '2.5s' }}
            aria-hidden="true"
          />
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackMetaEvent('Contact', { content_name: 'WhatsApp Floating Button' });
            trackMetaCustomEvent('WhatsAppClick', { source: 'floating_button' });
          }}
          aria-label="Conversar no WhatsApp da Conto de Ouro"
          className={`relative z-10 w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-[#25D366] flex items-center justify-center shadow-xl active:scale-95 transition-all duration-300 border-2 border-white/90 shrink-0 ${
            isPulsing ? 'animate-soft-pulse' : 'hover:scale-105'
          }`}
        >
          <img
            src="/assets/aistudio/IMG_1984_19de7290.jpeg"
            alt="WhatsApp Oficial"
            className="w-full h-full object-cover scale-[1.48] pointer-events-none select-none"
          />
        </a>
      </div>
    </aside>
  );
};
