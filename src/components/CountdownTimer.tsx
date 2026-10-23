import React, { useState, useEffect } from 'react';
import { Clock, Flame, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  className?: string;
  variant?: 'card' | 'compact' | 'banner';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours = 3,
  initialMinutes = 48,
  initialSeconds = 15,
  className = '',
  variant = 'card'
}) => {
  // Store remaining seconds in state, initializing from localStorage if exists to feel authentic
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('conto_de_ouro_timer');
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return initialHours * 3600 + initialMinutes * 60 + initialSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset to a realistic buffer so timer never awkwardly sits at 00:00:00
          const resetTime = 2 * 3600 + 45 * 60;
          try {
            localStorage.setItem('conto_de_ouro_timer', resetTime.toString());
          } catch {}
          return resetTime;
        }
        const next = prev - 1;
        try {
          localStorage.setItem('conto_de_ouro_timer', next.toString());
        } catch {}
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F49A87]/15 border border-[#F49A87]/30 text-xs font-bold text-[#653B2A] ${className}`}>
        <Flame className="w-3.5 h-3.5 text-[#F49A87] animate-pulse" />
        <span>Expira em:</span>
        <span className="font-mono tracking-tight font-extrabold text-[#653B2A]">
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-[#FFF6E6] via-[#FFF3E0] to-[#FFF6E6] border border-[#F6B83F]/50 p-3 sm:p-3.5 shadow-2xs ${className}`}
      aria-label="Cronômetro do desconto de lançamento"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-[#F6B83F]/30 flex items-center justify-center shrink-0">
            <Flame className="w-4 h-4 text-[#F49A87] fill-[#F49A87] animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-[#653B2A] block leading-tight">
              Desconto de Lançamento (50% OFF)
            </span>
            <span className="text-[11px] text-[#653B2A]/75">
              Válido por tempo limitado para novos pedidos:
            </span>
          </div>
        </div>

        {/* Digits Display */}
        <div className="flex items-center gap-1.5 font-mono select-none">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#653B2A]/15 flex items-center justify-center shadow-xs">
              <span className="text-sm sm:text-base font-black text-[#653B2A]">
                {pad(hours)}
              </span>
            </div>
            <span className="text-[9px] font-sans font-bold text-[#653B2A]/60 mt-0.5 uppercase tracking-wider">
              Horas
            </span>
          </div>

          <span className="text-base font-bold text-[#653B2A]/40 -mt-3.5">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#653B2A]/15 flex items-center justify-center shadow-xs">
              <span className="text-sm sm:text-base font-black text-[#653B2A]">
                {pad(minutes)}
              </span>
            </div>
            <span className="text-[9px] font-sans font-bold text-[#653B2A]/60 mt-0.5 uppercase tracking-wider">
              Min
            </span>
          </div>

          <span className="text-base font-bold text-[#653B2A]/40 -mt-3.5">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#653B2A] border border-[#653B2A] flex items-center justify-center shadow-xs">
              <span className="text-sm sm:text-base font-black text-[#FFF6E6]">
                {pad(seconds)}
              </span>
            </div>
            <span className="text-[9px] font-sans font-bold text-[#653B2A]/60 mt-0.5 uppercase tracking-wider">
              Seg
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
