/**
 * Conto de Ouro — Landing Page Oficial
 * Uma experiência mágica que transforma crianças em protagonistas de histórias inesquecíveis.
 */
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BooksGallery } from './components/BooksGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorks } from './components/HowItWorks';
import { ExemploCapaTransformada } from './components/ExemploCapaTransformada';
import { DigitalFormatSection } from './components/DigitalFormatSection';
import { PricingSection } from './components/PricingSection';
import { PreviewFormSection } from './components/PreviewFormSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { LiveSalesNotification } from './components/LiveSalesNotification';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [selectedThemeForForm, setSelectedThemeForForm] = useState<string>('');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; doc: LegalDocType }>({
    isOpen: false,
    doc: 'termos'
  });

  const handleOpenLegal = (doc: LegalDocType) => {
    setLegalModal({ isOpen: true, doc });
  };

  const scrollToForm = (themeName?: string) => {
    if (themeName) {
      setSelectedThemeForForm(themeName);
    }
    const formElement = document.getElementById('previa');
    if (formElement) {
      const yOffset = -70;
      const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToBooks = () => {
    const booksElement = document.getElementById('livros');
    if (booksElement) {
      const yOffset = -70;
      const y = booksElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6E6] text-[#653B2A] flex flex-col font-sans selection:bg-[#F6B83F]/30 selection:text-[#653B2A]">
      {/* 1. Header Navigation Bar */}
      <Header onOpenForm={() => scrollToForm()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section (Instant above-the-fold for high LCP) */}
        <Hero
          onOpenForm={() => scrollToForm()}
          onExploreBooks={scrollToBooks}
        />

        {/* 3. Exemplo de Capa Transformada: Antes e Depois Interativo */}
        <ScrollReveal>
          <ExemploCapaTransformada onOpenForm={() => scrollToForm()} />
        </ScrollReveal>

        {/* 4. Books Gallery (Crie sua história personalizada) */}
        <ScrollReveal>
          <BooksGallery onSelectThemeForForm={(theme) => scrollToForm(theme)} />
        </ScrollReveal>

        {/* 5. Como Funciona (4 Etapas Simples) */}
        <ScrollReveal>
          <HowItWorks onOpenForm={() => scrollToForm()} />
        </ScrollReveal>

        {/* 6. O Presente em Formato Digital & Impressão */}
        <ScrollReveal>
          <DigitalFormatSection onOpenForm={() => scrollToForm()} />
        </ScrollReveal>

        {/* 7. Depoimentos & Prova Social */}
        <ScrollReveal>
          <TestimonialsSection onOpenForm={() => scrollToForm()} />
        </ScrollReveal>

        {/* 8. Preço Transparente & Acessível */}
        <ScrollReveal>
          <PricingSection onOpenForm={() => scrollToForm()} />
        </ScrollReveal>

        {/* 9. Formulário de Solicitação de Prévia com Feedback Visual */}
        <ScrollReveal>
          <PreviewFormSection
            selectedThemeFromGallery={selectedThemeForForm}
            onOpenLegal={handleOpenLegal}
          />
        </ScrollReveal>

        {/* 10. Perguntas Frequentes (FAQ) */}
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>

        {/* 11. Chamada Final e Rodapé */}
        <ScrollReveal>
          <FinalCtaAndFooter
            onOpenForm={() => scrollToForm()}
            onOpenLegal={handleOpenLegal}
          />
        </ScrollReveal>
      </main>

      {/* Floating Sticky Actions (Quero uma prévia + WhatsApp) */}
      <FloatingWhatsApp onOpenForm={() => scrollToForm()} />

      {/* Live Subtle Order & Preview Notifications */}
      <LiveSalesNotification onSelectBook={(theme) => scrollToForm(theme)} />

      {/* Legal & Compliance Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        initialDoc={legalModal.doc}
        onClose={() => setLegalModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
