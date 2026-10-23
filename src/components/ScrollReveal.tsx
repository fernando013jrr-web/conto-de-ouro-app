import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported or prefers reduced motion, reveal immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const currentElem = domRef.current;

    // Check if element is already within or near viewport
    if (currentElem) {
      const rect = currentElem.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (currentElem) observer.unobserve(currentElem);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '120px 0px 120px 0px'
      }
    );

    if (currentElem) {
      observer.observe(currentElem);
    }

    // Safety fallback: ensure content is always visible and never stuck
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => {
      clearTimeout(fallbackTimer);
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delayMs}ms`
      }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
};

