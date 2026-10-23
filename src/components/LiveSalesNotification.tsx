import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';
import { REALISTIC_LIVE_NOTIFICATIONS, OrderNotificationItem } from '../data/liveOrdersData';

interface LiveSalesNotificationProps {
  onSelectBook?: (title: string) => void;
}

export const LiveSalesNotification: React.FC<LiveSalesNotificationProps> = ({ onSelectBook }) => {
  const [currentNotification, setCurrentNotification] = useState<OrderNotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissedByUser, setIsDismissedByUser] = useState<boolean>(false);

  const isPausedRef = useRef<boolean>(false);
  const isNearInterruptionZoneRef = useRef<boolean>(false);
  const isDismissedRef = useRef<boolean>(false);
  const shownIndicesRef = useRef<number[]>([]);
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Monitor scroll position so it pauses while user is inside form or at footer
  useEffect(() => {
    const handleScroll = () => {
      const previaElement = document.getElementById('previa');
      const footerElement = document.getElementById('rodape') || document.querySelector('footer');

      let inSensitiveArea = false;

      if (previaElement) {
        const rect = previaElement.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 100) {
          inSensitiveArea = true;
        }
      }

      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          inSensitiveArea = true;
        }
      }

      isNearInterruptionZoneRef.current = inSensitiveArea;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pick next notification
  const getNextNotification = (): OrderNotificationItem => {
    const total = REALISTIC_LIVE_NOTIFICATIONS.length;
    if (shownIndicesRef.current.length >= total) {
      shownIndicesRef.current = [];
    }

    const availableIndices: number[] = [];
    for (let i = 0; i < total; i++) {
      if (!shownIndicesRef.current.includes(i)) {
        availableIndices.push(i);
      }
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    shownIndicesRef.current.push(randomIndex);
    return REALISTIC_LIVE_NOTIFICATIONS[randomIndex];
  };

  // Persistent, robust cycle loop
  useEffect(() => {
    let isMounted = true;

    const runNotificationCycle = () => {
      if (!isMounted || isDismissedRef.current) return;

      // Check if user is actively interacting in sensitive form/footer zone
      if (isNearInterruptionZoneRef.current) {
        // Retry in 6 seconds
        cycleTimeoutRef.current = setTimeout(runNotificationCycle, 6000);
        return;
      }

      // 1. Show next notification
      const nextItem = getNextNotification();
      setCurrentNotification(nextItem);
      setIsVisible(true);

      // 2. Keep visible for 4.2 seconds (unless paused by mouse/touch)
      let visibleTimeElapsed = 0;
      const checkInterval = 200;
      const targetDuration = 4200;

      const hideCheckInterval = setInterval(() => {
        if (!isMounted || isDismissedRef.current) {
          clearInterval(hideCheckInterval);
          return;
        }

        // If hovered/touched, pause timer
        if (!isPausedRef.current) {
          visibleTimeElapsed += checkInterval;
        }

        if (visibleTimeElapsed >= targetDuration) {
          clearInterval(hideCheckInterval);
          setIsVisible(false);

          // 3. Pause for 9 to 14 seconds before showing the next one
          const nextIntervalMs = Math.floor(Math.random() * (14000 - 9000 + 1)) + 9000;
          cycleTimeoutRef.current = setTimeout(runNotificationCycle, nextIntervalMs);
        }
      }, checkInterval);
    };

    // Initial first appearance 5.5 seconds after landing
    cycleTimeoutRef.current = setTimeout(runNotificationCycle, 5500);

    return () => {
      isMounted = false;
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissedByUser(true);
    isDismissedRef.current = true;
    if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
  };

  if (!currentNotification || isDismissedByUser) return null;

  return (
    <aside
      aria-live="polite"
      aria-atomic="true"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      onTouchStart={() => { isPausedRef.current = true; }}
      onTouchEnd={() => { isPausedRef.current = false; }}
      className={`fixed bottom-[84px] left-3.5 sm:bottom-6 sm:left-6 z-50 transition-all duration-400 ease-out select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      {/* Super Compact, Minimalist Micro-Toast (Under 280px, clean & elegant) */}
      <div className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-2xl py-2 px-3 border border-[#653B2A]/15 shadow-lg shadow-[#653B2A]/10 text-[#653B2A] flex items-center gap-2.5 max-w-[285px] sm:max-w-[310px] ring-1 ring-black/5">
        
        {/* Compact Book Cover / Sparkle Avatar */}
        <div className="relative w-8 h-10 rounded-md overflow-hidden shrink-0 border border-[#653B2A]/15 bg-[#FFF6E6] shadow-2xs">
          <img
            src={currentNotification.bookCover}
            alt={currentNotification.bookTitle}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Crisp, clean single/two-line copy */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5 text-[11px] leading-tight">
            <span className="font-extrabold text-[#653B2A] truncate">
              {currentNotification.customerName}
            </span>
            <span className="text-[#653B2A]/40 text-[10px]">•</span>
            <span className="text-[10px] text-[#653B2A]/60 truncate">
              {currentNotification.city}
            </span>
          </div>

          <p className="text-[11px] text-[#653B2A]/90 truncate mt-0.5 leading-snug">
            <span className="text-[#2C6B58] font-semibold">adquiriu </span>
            <strong className="text-[#653B2A] font-bold">"{currentNotification.bookTitle}"</strong>
          </p>

          <span className="text-[9.5px] text-[#653B2A]/50 block">
            {currentNotification.timeAgo}
          </span>
        </div>

        {/* Minimal close button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Fechar notificação"
          className="text-[#653B2A]/40 hover:text-[#653B2A] p-0.5 rounded-full transition-colors cursor-pointer shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
