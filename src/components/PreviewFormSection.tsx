import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  ShieldCheck,
  Heart,
  AlertCircle,
  ExternalLink,
  Star,
  Award,
  CheckCircle2,
  Lightbulb,
  HelpCircle,
  FileText,
  Moon,
  ArrowRight,
  RotateCcw,
  Clock,
  Send
} from 'lucide-react';
import {
  PreviewFormData,
  buildWhatsAppLink,
  generatePreviewWhatsAppMessage,
  DEFAULT_WHATSAPP_PHONE,
  WHATSAPP_DISPLAY_PHONE
} from '../config/whatsapp';

import { LegalDocType } from './LegalModal';
import { TrustBadge } from './TrustBadge';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PreviewFormSectionProps {
  selectedThemeFromGallery?: string;
  onOpenLegal?: (doc: LegalDocType) => void;
}

export const PreviewFormSection: React.FC<PreviewFormSectionProps> = ({
  selectedThemeFromGallery,
  onOpenLegal
}) => {
  const [formData, setFormData] = useState<PreviewFormData>({
    parentName: '',
    childName: '',
    childAge: '4',
    relationship: 'Mãe',
    childInterests: '',
    storyTheme: selectedThemeFromGallery || 'Lucas no Mundo do Futebol',
    whatsappNumber: '',
    notes: '',
    consent: true
  });

  type FormErrors = Partial<Record<keyof PreviewFormData | 'customTheme', string>>;
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<PreviewFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<'theme' | 'interests' | 'childName' | null>(null);
  const [isCustomTheme, setIsCustomTheme] = useState(
    selectedThemeFromGallery === 'Outro tema personalizado' ||
    selectedThemeFromGallery === 'Tema Personalizado / Outro'
  );
  const [customThemeInput, setCustomThemeInput] = useState('');
  const [activeParentsCount, setActiveParentsCount] = useState<number>(17);

  // Subtle natural live visitor count fluctuation (between 14 and 21)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveParentsCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 13 && next <= 22 ? next : 17;
      });
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  const appendInterest = (interest: string) => {
    setFormData((prev) => {
      const current = prev.childInterests.trim();
      if (!current) return { ...prev, childInterests: interest };
      if (current.toLowerCase().includes(interest.toLowerCase())) return prev;
      return { ...prev, childInterests: `${current}, ${interest}` };
    });
  };

  // Sync if selectedThemeFromGallery changes
  React.useEffect(() => {
    if (selectedThemeFromGallery) {
      if (
        selectedThemeFromGallery === 'Outro tema personalizado' ||
        selectedThemeFromGallery === 'Tema Personalizado / Outro'
      ) {
        setIsCustomTheme(true);
        setFormData((prev) => ({ ...prev, storyTheme: 'Tema Personalizado / Outro' }));
      } else {
        setIsCustomTheme(false);
        setFormData((prev) => ({ ...prev, storyTheme: selectedThemeFromGallery }));
      }
    }
  }, [selectedThemeFromGallery]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Por favor, informe o seu nome.';
    }
    if (!formData.childName.trim()) {
      newErrors.childName = 'Por favor, informe o nome da criança.';
    }
    if (!formData.childAge.trim()) {
      newErrors.childAge = 'Informe a idade.';
    }
    if (!formData.childInterests.trim()) {
      newErrors.childInterests = 'Conte do que o pequeno mais gosta (ex: dinossauros, bichinhos, estrelas).';
    }
    if (isCustomTheme && !customThemeInput.trim()) {
      newErrors.customTheme = 'Por favor, digite o tema que você gostaria de criar.';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Informe seu WhatsApp com DDD.';
    } else if (formData.whatsappNumber.replace(/\D/g, '').length < 10) {
      newErrors.whatsappNumber = 'Número de WhatsApp incompleto (mínimo 10 dígitos com DDD).';
    }
    if (!formData.consent) {
      newErrors.consent = 'É necessário autorizar o contato para atendimento.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    const finalTheme = isCustomTheme && customThemeInput.trim()
      ? `Tema Exclusivo: ${customThemeInput.trim()}`
      : formData.storyTheme;

    // Sanitize and limit lengths to prevent URI overflow and script injection
    const sanitizedData: PreviewFormData = {
      ...formData,
      storyTheme: finalTheme,
      parentName: formData.parentName.replace(/[<>]/g, '').trim().slice(0, 70),
      childName: formData.childName.replace(/[<>]/g, '').trim().slice(0, 50),
      childInterests: formData.childInterests.replace(/[<>]/g, '').trim().slice(0, 180),
      notes: formData.notes ? formData.notes.replace(/[<>]/g, '').trim().slice(0, 350) : '',
      whatsappNumber: formData.whatsappNumber.trim().slice(0, 16)
    };

    const message = generatePreviewWhatsAppMessage(sanitizedData);
    const link = buildWhatsAppLink(message, DEFAULT_WHATSAPP_PHONE);

    setSubmittedData(sanitizedData);
    setSubmittedLink(link);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Scroll smoothly to success state container
    setTimeout(() => {
      const formBox = document.getElementById('previa');
      if (formBox) {
        const yOffset = -80;
        const y = formBox.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);

    // Try opening WhatsApp in new window safely
    try {
      window.open(link, '_blank', 'noopener,noreferrer');
    } catch {
      // In case iframe or mobile popup blocker intercepts,
      // the dedicated WhatsApp button on the success screen will handle the transition
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
  };

  const handlePhoneChange = (val: string) => {
    // Basic friendly mask
    const numbers = val.replace(/\D/g, '');
    let formatted = numbers;
    if (numbers.length > 2) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length > 7) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
    setFormData((prev) => ({ ...prev, whatsappNumber: formatted }));
  };

  return (
    <section id="previa" className="py-16 sm:py-24 bg-gradient-to-b from-[#F6B83F]/15 via-[#FFF6E6] to-[#FFF6E6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#653B2A] mb-3">
            <Sparkles className="w-4 h-4 text-[#F6B83F]" />
            <span>Atendimento Personalizado no WhatsApp</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#653B2A] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Vamos criar uma aventura inesquecível?
          </h2>

          <p className="text-base sm:text-lg text-[#653B2A]/80 leading-relaxed font-normal">
            Conte um pouquinho sobre a criança que você quer surpreender. Vamos usar essas informações para iniciar seu atendimento e apresentar as opções de personalização.
          </p>
        </div>

        {/* Centered Form Container */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#653B2A]/15 shadow-md transition-all duration-500">
          {isSubmitted && submittedData ? (
            /* Visual Success State with Animated Checkmark */
            <div className="py-2 sm:py-4 animate-fade-in-up text-center">
              {/* Elegant Checkmark with Ambient Ripple */}
              <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full bg-[#68BFA5]/25 animate-ping opacity-60"
                  style={{ animationDuration: '2.5s' }}
                />
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#F6B83F]/30 to-[#68BFA5]/30 blur-md pointer-events-none" />
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#2C6B58] via-[#68BFA5] to-[#8fd4bf] text-white flex items-center justify-center shadow-lg shadow-[#68BFA5]/35 border-3 border-white">
                  <Check className="w-10 h-10 sm:w-12 sm:h-12 stroke-[3] animate-fade-in-up" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#68BFA5]/15 border border-[#68BFA5]/30 text-[#2C6B58] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
                <span>Solicitação Registrada com Sucesso!</span>
              </div>

              {/* Warm Confirmation Message */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#653B2A] font-serif mb-2 leading-tight">
                Tudo pronto, {submittedData.parentName}!
              </h3>

              <p className="text-sm sm:text-base text-[#653B2A]/85 max-w-lg mx-auto leading-relaxed mb-6 font-normal">
                A história mágica de <strong>{submittedData.childName}</strong> já foi recebida com carinho por nossa equipe criativa.
              </p>

              {/* Order Details Confirmation Card */}
              <div className="bg-[#FFF6E6] rounded-2xl p-4 sm:p-5 border border-[#653B2A]/15 text-left mb-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#653B2A]/10 text-xs font-bold text-[#653B2A]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
                    <span>Detalhes da sua Prévia</span>
                  </span>
                  <span className="text-[#68BFA5] bg-white px-2.5 py-0.5 rounded-full border border-[#68BFA5]/30 flex items-center gap-1 font-extrabold text-[11px]">
                    <CheckCircle2 className="w-3 h-3" />
                    100% Grátis
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#653B2A]">
                  <div className="bg-white/80 p-2.5 rounded-xl border border-[#653B2A]/8">
                    <span className="text-[#653B2A]/60 block text-[10.5px] uppercase tracking-wider font-semibold">
                      Criança Protagonista:
                    </span>
                    <strong className="text-[#653B2A] font-bold text-sm">
                      {submittedData.childName} ({submittedData.childAge} anos)
                    </strong>
                  </div>

                  <div className="bg-white/80 p-2.5 rounded-xl border border-[#653B2A]/8">
                    <span className="text-[#653B2A]/60 block text-[10.5px] uppercase tracking-wider font-semibold">
                      Tema Escolhido:
                    </span>
                    <strong className="text-[#653B2A] font-bold text-sm truncate block">
                      {submittedData.storyTheme}
                    </strong>
                  </div>

                  <div className="bg-white/80 p-2.5 rounded-xl border border-[#653B2A]/8">
                    <span className="text-[#653B2A]/60 block text-[10.5px] uppercase tracking-wider font-semibold">
                      WhatsApp para Recebimento:
                    </span>
                    <strong className="text-[#653B2A] font-bold text-sm">
                      {submittedData.whatsappNumber}
                    </strong>
                  </div>

                  <div className="bg-white/80 p-2.5 rounded-xl border border-[#653B2A]/8">
                    <span className="text-[#653B2A]/60 block text-[10.5px] uppercase tracking-wider font-semibold">
                      Previsão de Envio:
                    </span>
                    <strong className="text-[#653B2A] font-bold text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F6B83F]" />
                      Em até 2 horas
                    </strong>
                  </div>
                </div>

                {submittedData.childInterests && (
                  <div className="pt-2 border-t border-[#653B2A]/8 text-xs text-[#653B2A]/85">
                    <span className="font-bold text-[#653B2A]">Gostos e preferências incluídos:</span>{' '}
                    <span>{submittedData.childInterests}</span>
                  </div>
                )}
              </div>

              {/* Direct Primary CTA Button to WhatsApp */}
              <div className="space-y-3 mb-6">
                <a
                  href={submittedLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-extrabold shadow-lg shadow-[#25D366]/30 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <WhatsAppIcon size="md" />
                  <span>Continuar conversa no WhatsApp</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>

                <p className="text-xs text-[#653B2A]/70 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#68BFA5]" />
                  <span>Nossa equipe responderá com a capa personalizada do pequeno!</span>
                </p>
              </div>

              {/* Reset / Edit Button */}
              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#653B2A]/80 hover:text-[#653B2A] py-2.5 px-5 rounded-full border border-[#653B2A]/20 hover:bg-[#FFF6E6] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Solicitar outra história ou editar dados</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Informação Clara: Produto 100% Digital & Transparência de Preço */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFF6E6] border border-[#68BFA5]/40 flex items-start sm:items-center gap-3 text-xs text-[#653B2A] shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#68BFA5]/20 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#68BFA5]" />
                </div>
                <div className="flex-1 leading-snug">
                  <span className="font-extrabold text-[#653B2A] block text-xs sm:text-sm">
                    Prévia 100% Gratuita • Livro Completo (Capa, Dedicatória + 15 Páginas) por R$ 29,90
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#653B2A]/80 mt-0.5 block">
                    Você não paga nada agora! Avalie a prévia no WhatsApp sem compromisso. Se amar o resultado, o livro digital completo contendo <strong>capa oficial personalizada, dedicatória afetiva + 15 páginas ilustradas</strong> em alta resolução (300 DPI) custa apenas R$ 29,90 (pagamento único via PIX ou Cartão).
                  </span>
                </div>
              </div>

              {/* Row 1: Parent name & Kinship */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold text-[#653B2A] mb-1.5">
                    Seu nome <span className="text-[#F6B83F]">*</span>
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    inputMode="text"
                    autoComplete="name"
                    maxLength={70}
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Ex: Helena Costa"
                    className={`w-full px-4 py-3 sm:py-2.5 rounded-xl border text-base sm:text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all ${
                      errors.parentName ? 'border-red-400' : 'border-[#653B2A]/15'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.parentName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="relationship" className="block text-xs font-bold text-[#653B2A] mb-1.5">
                    Seu parentesco com ela <span className="text-[#F6B83F]">*</span>
                  </label>
                  <select
                    id="relationship"
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#653B2A]/15 text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all cursor-pointer"
                  >
                    <option value="Mãe">Mãe</option>
                    <option value="Pai">Pai</option>
                    <option value="Avó">Avó</option>
                    <option value="Avô">Avô</option>
                    <option value="Madrinha">Madrinha</option>
                    <option value="Padrinho">Padrinho</option>
                    <option value="Tia">Tia</option>
                    <option value="Tio">Tio</option>
                    <option value="Amigo(a) da família">Amigo(a) da família</option>
                    <option value="Outro">Outro grau de afeto</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Child name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <label htmlFor="childName" className="block text-xs font-bold text-[#653B2A]">
                      Nome da criança <span className="text-[#F6B83F]">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setActiveTooltip(activeTooltip === 'childName' ? null : 'childName')}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#653B2A] hover:bg-[#F6B83F]/20 bg-[#FFF6E6] px-2.5 py-0.5 rounded-full border border-[#653B2A]/15 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
                      <span>{activeTooltip === 'childName' ? 'Fechar dica' : '👑 Protagonista'}</span>
                    </button>
                  </div>

                  {activeTooltip === 'childName' && (
                    <div className="mb-2 p-3 rounded-2xl bg-[#FFF6E6] border border-[#F6B83F]/40 text-xs text-[#653B2A] shadow-xs animate-in fade-in duration-200">
                      <p className="text-[11px] text-[#653B2A]/85 leading-relaxed">
                        <strong>Nome de capa:</strong> O nome da criança aparecerá na capa do livro e como o protagonista principal em cada página! Se quiser colocar um apelido carinhoso pelo qual ela é chamada (ex: <em>"Bento (Bentinho)"</em>), pode colocar aqui.
                      </p>
                    </div>
                  )}

                  <input
                    id="childName"
                    type="text"
                    inputMode="text"
                    maxLength={50}
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder="Ex: Lucas ou Luna"
                    className={`w-full px-4 py-3 sm:py-2.5 rounded-xl border text-base sm:text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all ${
                      errors.childName ? 'border-red-400' : 'border-[#653B2A]/15'
                    }`}
                  />
                  {errors.childName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.childName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-xs font-bold text-[#653B2A] mb-1.5">
                    Idade da criança <span className="text-[#F6B83F]">*</span>
                  </label>
                  <select
                    id="childAge"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#653B2A]/15 text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((age) => (
                      <option key={age} value={age}>
                        {age} {age === 1 ? 'ano' : 'anos'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: What child likes */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <label htmlFor="childInterests" className="block text-xs font-bold text-[#653B2A]">
                    O que a criança mais gosta? <span className="text-[#F6B83F]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'interests' ? null : 'interests')}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#653B2A] hover:bg-[#F6B83F]/20 bg-[#FFF6E6] px-2.5 py-0.5 rounded-full border border-[#653B2A]/15 transition-colors cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-[#F6B83F]" />
                    <span>{activeTooltip === 'interests' ? 'Fechar dica' : '💡 Dica mágica'}</span>
                  </button>
                </div>

                {/* Tooltip / Inspiração para Interesses */}
                {activeTooltip === 'interests' && (
                  <div className="mb-2.5 p-3.5 rounded-2xl bg-[#FFF6E6] border border-[#F6B83F]/40 text-xs text-[#653B2A] shadow-xs animate-in fade-in duration-200">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#F6B83F] mt-0.5 shrink-0" />
                      <div className="space-y-1.5">
                        <p className="font-bold text-[#653B2A]">Como esses detalhes transformam a criança no herói:</p>
                        <p className="text-[#653B2A]/85 leading-relaxed">
                          Cite o que o pequeno mais ama! Pode ser o <strong>animal de estimação</strong> (ex: <em>"nosso cachorrinho Bob"</em>), um <strong>brinquedo inseparável</strong>, uma <strong>habilidade</strong> (chutar forte, dançar, desenhar) ou a <strong>profissão dos sonhos</strong> (astronauta, bombeiro, cientista).
                        </p>
                        <p className="text-[#653B2A]/75 text-[11px] leading-relaxed">
                          🌟 <em>Esses detalhes reais viram os superpoderes que a criança usará para superar desafios e ser aclamada como a heroína da aventura!</em>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <input
                  id="childInterests"
                  type="text"
                  maxLength={180}
                  value={formData.childInterests}
                  onChange={(e) => setFormData({ ...formData, childInterests: e.target.value })}
                  placeholder="Ex: Dinossauros, cachorrinho caramelo Bob, desenhar, espaço sideral..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all ${
                    errors.childInterests ? 'border-red-400' : 'border-[#653B2A]/15'
                  }`}
                />

                {/* Sugestões rápidas (chips auxiliares) */}
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px]">
                  <span className="text-[#653B2A]/70 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F6B83F]" />
                    Toque para adicionar:
                  </span>
                  {[
                    '🦖 Dinossauros',
                    '⚽ Futebol',
                    '🐾 Bichinho de estimação',
                    '🚀 Espaço & Estrelas',
                    '🎨 Desenhar & Colorir',
                    '👑 Princesas & Fadas',
                    '🦸 Heróis & Aventura'
                  ].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => appendInterest(tag.replace(/^[^\s]+\s/, ''))}
                      className="px-2 py-0.5 rounded-lg bg-[#FFF6E6] border border-[#653B2A]/15 text-[#653B2A] hover:bg-[#F6B83F]/20 transition-all cursor-pointer font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {errors.childInterests && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.childInterests}
                  </p>
                )}
              </div>

              {/* Row 4: Theme choice & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <label htmlFor="storyTheme" className="block text-xs font-bold text-[#653B2A]">
                      Tema desejado para a história <span className="text-[#F6B83F]">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setActiveTooltip(activeTooltip === 'theme' ? null : 'theme')}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#653B2A] hover:bg-[#F6B83F]/20 bg-[#FFF6E6] px-2.5 py-0.5 rounded-full border border-[#653B2A]/15 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F6B83F]" />
                      <span>{activeTooltip === 'theme' ? 'Fechar dica' : '⭐ Como vira herói?'}</span>
                    </button>
                  </div>

                  {/* Tooltip / Explicação de como a criança vira protagonista */}
                  {activeTooltip === 'theme' && (
                    <div className="mb-2.5 p-3.5 rounded-2xl bg-[#FFF6E6] border border-[#F6B83F]/40 text-xs text-[#653B2A] shadow-xs animate-in fade-in duration-200">
                      <div className="flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#F6B83F] mt-0.5 shrink-0" />
                        <div className="space-y-1.5">
                          <p className="font-bold text-[#653B2A]">Como seu filho(a) se torna o protagonista:</p>
                          <p className="text-[#653B2A]/85 leading-relaxed">
                            No livro, seu pequeno não é um coadjuvante: <strong>ele é o líder corajoso e inteligente de toda a aventura!</strong> Ele recebe um chamado mágico, encontra amigos leais, toma decisões nobres e resolve o grande enigma com sua bondade e imaginação.
                          </p>
                          <p className="text-[#653B2A]/75 text-[11px] leading-relaxed">
                            💡 Escolha um tema abaixo ou selecione <em>"Quero sugerir outro tema exclusivo"</em> para inventar o universo favorito dele(a)!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <select
                    id="storyTheme"
                    value={isCustomTheme ? 'Tema Personalizado / Outro' : formData.storyTheme}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === 'Tema Personalizado / Outro') {
                        setIsCustomTheme(true);
                        setFormData((prev) => ({ ...prev, storyTheme: 'Tema Personalizado / Outro' }));
                      } else {
                        setIsCustomTheme(false);
                        setFormData((prev) => ({ ...prev, storyTheme: val }));
                      }
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#653B2A]/15 text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all cursor-pointer"
                  >
                    <option value="Lucas no Mundo do Futebol">Lucas no Mundo do Futebol (Esportes)</option>
                    <option value="Luna na Floresta Encantada">Luna na Floresta Encantada (Magia & Natureza)</option>
                    <option value="Davi e os Dinossauros">Davi e os Dinossauros (Aventura Pré-Histórica)</option>
                    <option value="Theo no Reino das Estrelas">Theo no Reino das Estrelas (Fantasia Cósmica)</option>
                    <option value="Helena no Jardim Encantado">Helena no Jardim Encantado (Flores & Sonhos)</option>
                    <option value="Tema Personalizado / Outro">Quero sugerir outro tema exclusivo ✨</option>
                  </select>

                  {/* Campo de digitação imediata quando tema personalizado é selecionado */}
                  {isCustomTheme && (
                    <div className="mt-2.5 p-3 rounded-2xl bg-gradient-to-r from-[#FFF6E6] to-white border-2 border-[#F6B83F] shadow-xs animate-in fade-in duration-200">
                      <label htmlFor="customThemeInput" className="block text-xs font-bold text-[#653B2A] mb-1">
                        ✨ Digite o tema exclusivo dos sonhos:
                      </label>
                      <input
                        id="customThemeInput"
                        type="text"
                        autoFocus
                        maxLength={120}
                        value={customThemeInput}
                        onChange={(e) => {
                          setCustomThemeInput(e.target.value);
                          if (errors.customTheme) {
                            setErrors((prev) => ({ ...prev, customTheme: undefined }));
                          }
                        }}
                        placeholder="Ex: Aventura no fundo do mar com baleias e castelos de areia..."
                        className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-[#653B2A] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all ${
                          errors.customTheme ? 'border-red-400' : 'border-[#653B2A]/20'
                        }`}
                      />
                      {errors.customTheme && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.customTheme}
                        </p>
                      )}
                      <p className="text-[10px] text-[#653B2A]/70 mt-1">
                        Nosso roteirista e artista criarão a capa e a história exatamente no universo que você pedir!
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="whatsappNumber" className="block text-xs font-bold text-[#653B2A] mb-1.5">
                    Seu WhatsApp <span className="text-[#F6B83F]">*</span>
                  </label>
                  <input
                    id="whatsappNumber"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.whatsappNumber}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                    className={`w-full px-4 py-3 sm:py-2.5 rounded-xl border text-base sm:text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all ${
                      errors.whatsappNumber ? 'border-red-400' : 'border-[#653B2A]/15'
                    }`}
                  />
                  {errors.whatsappNumber && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.whatsappNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 5: Notes / Dedication */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <label htmlFor="notes" className="block text-xs font-bold text-[#653B2A]">
                    Dedicatória & Detalhes Especiais{' '}
                    <span className="text-xs text-[#653B2A]/70 font-normal">(opcional • gravada na 1ª página)</span>
                  </label>
                </div>

                <textarea
                  id="notes"
                  rows={2}
                  maxLength={350}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ex: 'Para o amor das nossas vidas, Luna: nunca deixe de sonhar! Com todo amor da mamãe e do papai.' (Opcional: ela tem cachinhos e usa óculos vermelhos)."
                  className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-[#653B2A]/15 text-base sm:text-sm text-[#653B2A] bg-[#FFF6E6]/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F6B83F] transition-all resize-none"
                />

                <p className="text-[11px] text-[#653B2A]/70 mt-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F6B83F] shrink-0" />
                  <span>A dedicatória é feita na primeira página como lembrança para toda a vida.</span>
                </p>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#F6B83F] focus:ring-[#F6B83F] border-[#653B2A]/20 cursor-pointer"
                  />
                  <span className="text-xs text-[#653B2A]/80 leading-relaxed">
                    Concordo com os{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onOpenLegal?.('termos');
                      }}
                      className="text-[#653B2A] font-bold underline hover:text-[#ebb036] cursor-pointer"
                    >
                      Termos de Uso
                    </button>{' '}
                    e a{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onOpenLegal?.('privacidade');
                      }}
                      className="text-[#653B2A] font-bold underline hover:text-[#ebb036] cursor-pointer"
                    >
                      Política de Privacidade (LGPD)
                    </button>
                    , e autorizo a equipe da Conto de Ouro a elaborar a prévia e me atender no WhatsApp.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Area with TrustBadge Component Beside Button */}
              <div className="pt-2 space-y-3">
                {/* Micro-callout: Link to real photo transformation */}
                <div className="px-3.5 py-2 rounded-xl bg-[#FFF6E6]/60 border border-[#653B2A]/15 flex items-center justify-between text-xs shadow-2xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src="/assets/aistudio/IMG_1961_27afb22e.jpeg"
                      alt="Exemplo foto real da criança no celular"
                      className="w-7 h-7 rounded-lg object-cover border border-[#653B2A]/15 shrink-0"
                    />
                    <p className="text-[11px] text-[#653B2A]/90 truncate">
                      <span className="font-bold text-[#653B2A]">Dúvida sobre a foto?</span> Veja a foto do Bento transformada na capa!
                    </p>
                  </div>
                  <a
                    href="#transformacao-foto"
                    className="text-[11px] font-bold text-[#653B2A] hover:underline shrink-0 ml-2"
                  >
                    Ver exemplo ➔
                  </a>
                </div>

                {/* Gatilho Sutil de Atividade em Tempo Real */}
                <div className="flex items-center justify-between flex-wrap gap-2 px-1 pt-1">
                  <div className="inline-flex items-center gap-2 text-xs text-[#653B2A]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                    </span>
                    <span className="text-[11.5px] sm:text-xs text-[#653B2A]/90">
                      <strong className="font-extrabold text-[#653B2A]">{activeParentsCount} pais</strong> personalizando uma história agora
                    </span>
                  </div>

                  <span className="text-[10.5px] font-semibold text-[#2C6B58] bg-[#68BFA5]/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#68BFA5]" />
                    <span>Fila rápida no WhatsApp</span>
                  </span>
                </div>

                {/* Submit CTA Button with TrustBadge beside it */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl sm:rounded-full bg-[#F6B83F] hover:bg-[#ebb036] disabled:opacity-75 disabled:cursor-wait text-[#653B2A] text-sm sm:text-base font-extrabold tracking-wide shadow-md shadow-[#F6B83F]/30 active:scale-[0.98] transition-all cursor-pointer group border border-[#653B2A]/10 text-center"
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#25D366] shadow-2xs group-hover:scale-110 transition-transform">
                      <WhatsAppIcon size="sm" />
                    </div>
                    <span>{isSubmitting ? 'Preparando sua prévia...' : 'Solicitar Prévia Grátis no WhatsApp'}</span>
                  </button>

                  {/* Selo de Confiança */}
                  <TrustBadge />
                </div>
              </div>

              {/* Human-directed WhatsApp confirmation note & Satisfaction Pledge */}
              <div className="space-y-1.5 pt-1 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#653B2A]/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                      <img
                        src="/assets/aistudio/IMG_1984_19de7290.jpeg"
                        alt="WhatsApp"
                        className="w-full h-full object-cover scale-[1.48]"
                      />
                    </div>
                    <span>Abre diretamente no seu WhatsApp para você conversar com nossa equipe.</span>
                  </div>
                  <span className="hidden sm:inline text-[#653B2A]/30">•</span>
                  <span className="text-[#653B2A] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#68BFA5] inline" />
                    <span>100% gratuito e sem compromisso</span>
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#653B2A]/80 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#68BFA5]" />
                  <span>Satisfação garantida: você visualiza a prévia da história antes de qualquer decisão</span>
                </div>

                {/* Aviso Transparente de Horário Noturno */}
                <div className="pt-1.5 flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-[#653B2A]/85 bg-[#FFF6E6] px-3.5 py-1.5 rounded-full border border-[#653B2A]/10 text-center">
                    <Moon className="w-3.5 h-3.5 text-[#F6B83F] shrink-0" />
                    <span>
                      <strong>Atendimento noturno:</strong> Pedidos feitos após as 21h são produzidos com carinho e entregues na manhã seguinte (a partir das 8h).
                    </span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Trust & Guarantee Badges below Form */}
        <div className="max-w-2xl mx-auto mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white rounded-2xl p-3 border border-[#653B2A]/15 text-xs text-[#653B2A] shadow-xs">
            <span className="font-bold text-[#653B2A] block mb-0.5">✓ Prévia em até 2h</span>
            <span className="text-[11px] text-[#653B2A]/70">Após 21h: na manhã seguinte</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-[#653B2A]/15 text-xs text-[#653B2A] shadow-xs">
            <span className="font-bold text-[#653B2A] block mb-0.5">✓ Capa + Dedicatória</span>
            <span className="text-[11px] text-[#653B2A]/70">+ 15 páginas ilustradas</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-[#653B2A]/15 text-xs text-[#653B2A] shadow-xs">
            <span className="font-bold text-[#653B2A] block mb-0.5">✓ 2 Revisões Grátis</span>
            <span className="text-[11px] text-[#653B2A]/70">Ajustes de texto inclusos</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-[#653B2A]/15 text-xs text-[#653B2A] shadow-xs">
            <span className="font-bold text-[#653B2A] block mb-0.5">✓ Entrega em até 6h</span>
            <span className="text-[11px] text-[#653B2A]/70">PDF 300 DPI sem frete</span>
          </div>
        </div>
      </div>
    </section>
  );
};
