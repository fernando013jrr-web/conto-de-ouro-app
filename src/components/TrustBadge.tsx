import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TrustBadgeProps {
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ className = '' }) => {
  return (
    <div
      aria-label="Selo de Confiança e Segurança"
      className={`bg-[#FFF6E6]/80 rounded-2xl border border-[#653B2A]/15 px-3.5 py-2.5 shadow-2xs flex flex-col justify-center gap-1.5 shrink-0 ${className}`}
    >
      {/* 1. Avaliado com 5 estrelas */}
      <div className="flex items-center justify-center sm:justify-start gap-2">
        <div className="flex items-center text-[#F6B83F] gap-0.5" aria-label="5 estrelas">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#F6B83F] text-[#F6B83F]" />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs font-extrabold text-[#653B2A] tracking-tight whitespace-nowrap">
            Avaliado com 5 estrelas
          </span>
          <span className="text-[10px] font-bold text-[#653B2A]/70">(5.0)</span>
        </div>
      </div>

      {/* 2. Segurança Garantida */}
      <div className="flex items-center justify-center sm:justify-between gap-3 pt-1 border-t border-[#653B2A]/10 text-[11px]">
        <div className="flex items-center gap-1.5 font-bold text-[#653B2A] whitespace-nowrap">
          <ShieldCheck className="w-4 h-4 text-[#68BFA5] shrink-0" />
          <span>Segurança Garantida</span>
        </div>
        <span className="text-[10px] font-semibold text-[#68BFA5] bg-[#68BFA5]/15 px-1.5 py-0.5 rounded-md whitespace-nowrap">
          LGPD & ECA
        </span>
      </div>
    </div>
  );
};

export const SeloConfianca = TrustBadge;
export default TrustBadge;
