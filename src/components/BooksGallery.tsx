import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Heart,
  ArrowRight,
  CheckCircle2,
  User,
  Star
} from 'lucide-react';
import { CONCEPTUAL_BOOKS, BookItem } from '../data/books';

interface BooksGalleryProps {
  onSelectThemeForForm: (themeTitle: string) => void;
}

export const BooksGallery: React.FC<BooksGalleryProps> = ({ onSelectThemeForForm }) => {
  const [selectedBookIndex, setSelectedBookIndex] = useState<number>(0);

  const activeBook: BookItem = CONCEPTUAL_BOOKS[selectedBookIndex] || CONCEPTUAL_BOOKS[0];

  return (
    <section id="livros" className="py-14 sm:py-20 bg-[#FFF6E6] relative scroll-mt-20 overflow-hidden">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#F6B83F]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#68BFA5]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header: Clean & Inspiring */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#653B2A]/15 shadow-2xs text-xs font-bold text-[#653B2A] uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#F6B83F]" />
            <span>Histórias Criadas com Afeto</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#653B2A] font-serif tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Exemplos de Livros Personalizados
          </h2>

          <p className="text-sm sm:text-base text-[#653B2A]/80 leading-relaxed font-normal">
            Cada história ganha vida com o nome, características e o universo favorito da criança como protagonista. Veja alguns exemplos já entregues:
          </p>
        </div>

        {/* 1. Theme Navigation Tabs (Clean Pill Selector) */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1.5 bg-white/80 backdrop-blur-xs rounded-2xl border border-[#653B2A]/15 shadow-xs gap-1.5">
            {CONCEPTUAL_BOOKS.map((book, idx) => {
              const isSelected = selectedBookIndex === idx;
              return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => setSelectedBookIndex(idx)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#F6B83F] text-[#653B2A] shadow-xs scale-102 ring-1 ring-[#653B2A]/10'
                      : 'text-[#653B2A]/75 hover:text-[#653B2A] hover:bg-[#FFF6E6]'
                  }`}
                >
                  <span>{book.buttonLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Editorial Book Spotlight Card */}
        <div
          key={activeBook.id}
          className="bg-white rounded-3xl border border-[#653B2A]/15 p-6 sm:p-8 md:p-10 shadow-lg relative animate-fade-in-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Premium 3:4 Hardcover Visual */}
            <div className="md:col-span-5 max-w-[280px] sm:max-w-[320px] mx-auto w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#653B2A]/15 bg-[#FFF6E6] group">
                <img
                  src={activeBook.coverImage}
                  alt={`Capa do livro personalizado ${activeBook.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />

                {/* Tactile Book Spine Gradient */}
                <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none" />

                {/* Top Theme Badge */}
                <div className="absolute top-3 left-3 bg-[#653B2A]/90 backdrop-blur-xs text-[#FFF6E6] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-white/15">
                  {activeBook.tag}
                </div>

                {/* Bottom Protagonist Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#653B2A]/90 backdrop-blur-xs text-[#FFF6E6] text-xs py-2 px-3 rounded-xl text-center border border-white/15 flex items-center justify-center gap-1.5">
                  <span className="text-[#F6B83F] font-bold">Protagonista:</span>
                  <span>{activeBook.childName} ({activeBook.childAge})</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Details, Story Snippet & Action */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                {/* Child identity badge & City */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF6E6] border border-[#653B2A]/12 text-xs font-bold text-[#653B2A] mb-3">
                  <User className="w-3.5 h-3.5 text-[#F6B83F]" />
                  <span>{activeBook.childName} • {activeBook.clientLocation}</span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#653B2A] font-serif mb-1.5 leading-snug">
                  {activeBook.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#653B2A]/75 italic mb-4 leading-relaxed font-normal">
                  {activeBook.subtitle}
                </p>

                {/* Story premise */}
                <p className="text-xs sm:text-sm text-[#653B2A]/85 leading-relaxed mb-4 font-normal">
                  {activeBook.description}
                </p>

                {/* Story Sample Snippet (Editorial Style) */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFF6E6] border border-[#653B2A]/12 mb-4 relative">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#653B2A] mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#F6B83F]" />
                    <span>Trecho da história:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#653B2A] font-serif italic leading-relaxed">
                    "{activeBook.sampleSnippet}"
                  </p>
                </div>

                {/* Dedication on page 1 */}
                <div className="p-3 rounded-xl bg-white border border-[#653B2A]/10 mb-6 flex items-start gap-2.5 text-xs text-[#653B2A]/85">
                  <Heart className="w-4 h-4 text-[#F49A87] shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <span className="font-bold text-[#653B2A] block mb-0.5 text-[11px]">
                      Dedicatória gravada na 1ª página:
                    </span>
                    <span className="italic font-serif text-[#653B2A]/80 text-xs">
                      "{activeBook.dedicationExample}"
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onSelectThemeForForm(activeBook.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] text-[#653B2A] text-sm sm:text-base font-extrabold shadow-md shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer border border-[#653B2A]/10 group"
                >
                  <Sparkles className="w-4 h-4 text-[#653B2A] group-hover:rotate-12 transition-transform" />
                  <span>Quero um livro com este tema</span>
                  <ArrowRight className="w-4 h-4 text-[#653B2A] group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-[#653B2A]/70 mt-2.5 font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#68BFA5]" />
                  <span>Prévia 100% grátis no WhatsApp • Livro completo por R$ 29,90</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Quick Navigation Row (Tap any cover to preview) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {CONCEPTUAL_BOOKS.map((book, idx) => {
            const isSelected = selectedBookIndex === idx;
            return (
              <button
                key={book.id}
                type="button"
                onClick={() => setSelectedBookIndex(idx)}
                className={`p-2 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-white border-2 border-[#F6B83F] shadow-sm ring-2 ring-[#F6B83F]/20'
                    : 'bg-white/60 hover:bg-white border border-[#653B2A]/10'
                }`}
              >
                <div className="w-10 h-13 rounded-lg overflow-hidden shrink-0 border border-[#653B2A]/10 bg-[#FFF6E6]">
                  <img
                    src={book.coverImage}
                    alt={book.childName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-[#653B2A] truncate">
                    {book.childName}
                  </p>
                  <p className="text-[10px] text-[#653B2A]/70 truncate">
                    {book.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
