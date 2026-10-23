/**
 * WhatsApp configuration for Conto de Ouro
 * You can set your actual commercial WhatsApp number here or via VITE_WHATSAPP_PHONE in .env.
 * Format: Country code (55 for Brazil) + DDD + Number (digits only, e.g. '5511999998888')
 */
export const DEFAULT_WHATSAPP_PHONE = '5519994427772';

export const WHATSAPP_DISPLAY_PHONE = '(19) 99442-7772';

export interface PreviewFormData {
  parentName: string;
  childName: string;
  childAge: string;
  relationship: string;
  childInterests: string;
  storyTheme: string;
  whatsappNumber: string;
  notes?: string;
  consent: boolean;
}

export function buildWhatsAppLink(message: string, phone: string = DEFAULT_WHATSAPP_PHONE): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function generatePreviewWhatsAppMessage(data: PreviewFormData): string {
  const lines = [
    '✨ *Olá, equipe Conto de Ouro!*',
    'Gostaria de solicitar uma prévia personalizada para criar uma história mágica!',
    '',
    `*Meu Nome:* ${data.parentName.trim()}`,
    `*Grau de Parentesco:* ${data.relationship}`,
    `*Nome do Pequeno(a):* ${data.childName.trim()}`,
    `*Idade:* ${data.childAge} anos`,
    `*Tema Escolhido:* ${data.storyTheme}`,
    `*O que ele(a) mais ama:* ${data.childInterests.trim()}`,
    data.whatsappNumber ? `*WhatsApp para Contato:* ${data.whatsappNumber.trim()}` : '',
    data.notes?.trim() ? `*Detalhes / Dedicatória:* ${data.notes.trim()}` : '',
    '',
    'Poderiam me passar mais informações sobre a prévia e como prosseguir?',
    'Agradeço muito!'
  ].filter(line => line !== '');

  return lines.join('\n');
}

export function generateDirectThemeWhatsAppMessage(themeName: string): string {
  return [
    '✨ *Olá, Conto de Ouro!*',
    `Me apaixonei pelo tema *"${themeName}"* e gostaria de saber como criar um livro personalizado para uma criança especial.`,
    'Poderiam me mostrar uma prévia?'
  ].join('\n');
}
