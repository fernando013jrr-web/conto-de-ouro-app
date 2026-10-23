import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
  BookOpen,
  Sparkles,
  CreditCard,
  ShieldCheck,
  X
} from 'lucide-react';
import { FAQ_LIST, FaqCategory } from '../data/books';
import { buildWhatsAppLink } from '../config/whatsapp';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('todas');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories: { id: FaqCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'todas', label: 'Todas as Dúvidas', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'formato', label: 'Formato & Impressão', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'personalizacao', label: 'Personalização & Fotos', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'previa', label: 'Prévia & Pagamentos', icon: <CreditCard className="w-3.5 h-3.5" /> },
    { id: 'seguranca', label: 'Segurança & LGPD', icon: <ShieldCheck className="w-3.5 h-3.5" /> }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_LIST.filter((item) => {
      const matchesCategory = selectedCategory === 'todas' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFF6E6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#653B2A] mb-3">
            <HelpCircle className="w-4 h-4 text-[#F6B83F]" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#653B2A] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Tudo o que você precisa saber antes de criar a história
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/80 leading-relaxed font-normal">
            Respostas claras e transparentes sobre formato digital, personalização, prazos, impressão e segurança.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Quick Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-[#653B2A]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite sua dúvida (ex: impressão, fotos, dedicatória, valores)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[#653B2A]/15 text-sm text-[#653B2A] placeholder-[#653B2A]/50 focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#653B2A]/60 hover:text-[#653B2A] p-0.5 cursor-pointer"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#653B2A] text-[#FFF6E6] shadow-xs'
                      : 'bg-white text-[#653B2A] border border-[#653B2A]/15 hover:bg-[#F6B83F]/20'
                  }`}
                >
                  <span className={isActive ? 'text-[#F6B83F]' : 'text-[#653B2A]'}>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border bg-white overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-[#F6B83F] shadow-xs' : 'border-[#653B2A]/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-[#FFF6E6]/40 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#653B2A] font-serif pr-4 leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#FFF6E6] border border-[#653B2A]/15 flex items-center justify-center shrink-0 text-[#653B2A] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#F6B83F] text-[#653B2A] border-[#F6B83F]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#653B2A]/85 leading-relaxed border-t border-[#653B2A]/10 pt-4 bg-[#FFFDF9]">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-white border border-[#653B2A]/15">
            <HelpCircle className="w-8 h-8 text-[#F6B83F] mx-auto mb-2 opacity-70" />
            <p className="text-sm font-bold text-[#653B2A]">Nenhuma pergunta encontrada para sua busca.</p>
            <p className="text-xs text-[#653B2A]/70 mt-1">Experimente buscar por outros termos ou fale diretamente conosco pelo WhatsApp.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todas');
              }}
              className="mt-3 px-4 py-1.5 rounded-full bg-[#FFF6E6] border border-[#653B2A]/15 text-xs font-semibold text-[#653B2A] hover:bg-[#F6B83F]/20 cursor-pointer"
            >
              Ver todas as 12 perguntas
            </button>
          </div>
        )}

        {/* Support direct question callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#653B2A]/15 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#653B2A]">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-[#653B2A]/70 mt-0.5">
              Nossa equipe atende pessoalmente pelo WhatsApp para tirar dúvidas sobre temas, prazos ou pedidos com mais de uma criança.
            </p>
          </div>

          <a
            href={buildWhatsAppLink('Olá! Estive no site da Conto de Ouro e gostaria de tirar uma dúvida sobre os livros.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#653B2A] text-[#FFF6E6] text-xs font-extrabold hover:bg-[#7d4833] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shadow-xs border border-white/10"
          >
            <MessageCircle className="w-4 h-4 text-[#F6B83F]" />
            <span>Falar com nossa equipe</span>
          </a>
        </div>
      </div>
    </section>
  );
};
