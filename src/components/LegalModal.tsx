import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Lock, CheckCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE } from '../config/whatsapp';

export type LegalDocType = 'termos' | 'privacidade' | 'trocas';

interface LegalModalProps {
  isOpen: boolean;
  initialDoc?: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialDoc = 'termos',
  onClose
}) => {
  const [activeTab, setActiveTab] = React.useState<LegalDocType>(initialDoc);

  useEffect(() => {
    if (initialDoc) {
      setActiveTab(initialDoc);
    }
  }, [initialDoc]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#653B2A]/15 flex flex-col overflow-hidden text-[#653B2A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-[#653B2A]/15 bg-[#FFF6E6] shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#F6B83F] shrink-0" />
            <h3 id="legal-modal-title" className="text-base sm:text-lg font-bold font-serif text-[#653B2A]">
              Informações Legais & Transparência
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#653B2A]/70 hover:text-[#653B2A] hover:bg-[#F6B83F]/20 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#653B2A]/15 bg-[#FFF6E6] px-3 sm:px-6 gap-1.5 sm:gap-4 overflow-x-auto text-xs sm:text-sm font-semibold shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('termos')}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
              activeTab === 'termos'
                ? 'border-[#F6B83F] text-[#653B2A] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#653B2A]/70 hover:text-[#653B2A]'
            }`}
          >
            <FileText className="w-4 h-4 shrink-0 text-[#F6B83F]" />
            <span>Termos de Uso</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacidade')}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
              activeTab === 'privacidade'
                ? 'border-[#68BFA5] text-[#653B2A] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#653B2A]/70 hover:text-[#653B2A]'
            }`}
          >
            <Lock className="w-4 h-4 shrink-0 text-[#68BFA5]" />
            <span>Privacidade & LGPD</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('trocas')}
            className={`py-3 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
              activeTab === 'trocas'
                ? 'border-[#F49A87] text-[#653B2A] font-bold bg-white rounded-t-lg'
                : 'border-transparent text-[#653B2A]/70 hover:text-[#653B2A]'
            }`}
          >
            <RefreshCw className="w-4 h-4 shrink-0 text-[#F49A87]" />
            <span>Entrega & Cancelamento</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 min-h-0 space-y-6 text-sm text-[#653B2A]/85 leading-relaxed">
          {/* TAB 1: TERMOS DE USO */}
          {activeTab === 'termos' && (
            <article className="space-y-5">
              <div>
                <h4 className="text-xl font-extrabold text-[#653B2A] mb-1">
                  Termos de Uso do Serviço
                </h4>
                <p className="text-xs text-[#653B2A]/70">
                  Última atualização: Outubro de 2026 • Conto de Ouro
                </p>
              </div>

              <div className="bg-[#FFF6E6] p-4 rounded-2xl border border-[#653B2A]/15 text-xs">
                <p className="font-semibold text-[#653B2A] mb-1">Resumo em linguagem simples:</p>
                <p>
                  Criamos livros infantis personalizados sob medida em arquivo digital (PDF). Você adquire o direito de ler, imprimir e compartilhar com sua família. Respeitamos a sua privacidade e nunca usamos os dados da criança fora do contexto do livro solicitado.
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">1. Objeto do Serviço e Identificação</h5>
                <p>
                  A <strong>Conto de Ouro</strong>, pessoa jurídica regularmente inscrita sob o <strong>CNPJ nº 68.047.006/0001-58</strong>, atua no desenvolvimento, redação e ilustração personalizada de histórias infantis digitais. O produto final consiste em um arquivo digital em formato PDF de alta resolução (300 DPI), diagramado em tamanho padrão A4, ideal para leitura em dispositivos eletrônicos (tablets, celulares, computadores) e preparado tecnicamente para impressão em papel.
                </p>
                <p className="text-xs text-[#653B2A]/70 italic">
                  * Importante: Nosso modelo principal é 100% digital. Não realizamos despacho físico via Correios, permitindo entrega rápida sem custos de frete.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">2. Fornecimento de Dados e Autorização</h5>
                <p>
                  Ao enviar o formulário ou entrar em contato pelo WhatsApp fornecendo nome, idade, traços ou fotos de referência para a ilustração da criança, o usuário declara e garante:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Ser o pai, mãe, avô/avó ou responsável legal pela criança, ou possuir expressa autorização destes;</li>
                  <li>Que as informações fornecidas são verídicas e destinam-se exclusivamente à homenagem e personalização da história infantil;</li>
                  <li>Que tem ciência de que a semelhança e a fidelidade dos traços nas ilustrações artísticas são desenvolvidas conforme a qualidade, nitidez e iluminação da foto de referência enviada pelo cliente.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">3. Propriedade Intelectual e Licença de Uso</h5>
                <p>
                  Os textos, roteiros originais, conceitos artísticos, identidade visual e layout dos livros são de titularidade da Conto de Ouro.
                </p>
                <p>
                  Ao adquirir a obra personalizada, o cliente recebe uma <strong>Licença de Uso Pessoal, Familiar e Não-Comercial</strong>, que confere o direito irrestrito de:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Ler o arquivo digital em qualquer dispositivo familiar;</li>
                  <li>Realizar impressões físicas (em casa ou gráfica rápida) para presentear o homenageado e familiares;</li>
                  <li>Armazenar cópias de segurança (backup).</li>
                </ul>
                <p className="text-xs text-red-700">
                  É expressamente vedada a revenda comercial, sublicenciamento, distribuição massificada ou publicação comercial sem prévia autorização por escrito.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">4. Canais de Atendimento e Comunicação</h5>
                <p>
                  Todo o alinhamento da personalização, envio de prévias conceituais e entrega do arquivo final ocorrem diretamente pelo canal oficial do WhatsApp ({WHATSAPP_DISPLAY_PHONE}).
                </p>
              </section>
            </article>
          )}

          {/* TAB 2: POLÍTICA DE PRIVACIDADE E LGPD */}
          {activeTab === 'privacidade' && (
            <article className="space-y-5">
              <div>
                <h4 className="text-xl font-extrabold text-[#653B2A] mb-1">
                  Política de Privacidade & Proteção de Dados (LGPD)
                </h4>
                <p className="text-xs text-[#653B2A]/70">
                  Em estrita conformidade com a Lei Federal nº 13.709/2018 (LGPD) e o Estatuto da Criança e do Adolescente (ECA)
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-950">
                <p className="font-bold flex items-center gap-1.5 text-emerald-800 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Compromisso Máximo com a Segurança de Menores:
                </p>
                <p>
                  Levamos a proteção da infância muito a sério. Tratamos dados de crianças exclusivamente sob a base legal do consentimento dos pais ou responsáveis, no melhor interesse da criança e apenas para a produção da obra literária contratada.
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">1. Quais Dados Coletamos</h5>
                <p>Coletamos unicamente os dados necessários para a prestação do serviço:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong>Dados do Solicitante (Adulto):</strong> Nome completo, parentesco com a criança e número de telefone/WhatsApp.</li>
                  <li><strong>Dados da Criança (Menor de idade):</strong> Primeiro nome, idade e preferências/interesses pessoais (ex.: esportes, animais favoritos, dinossauros, etc.) para personalizar a narrativa.</li>
                  <li><strong>Fotos de Referência (Opcionais):</strong> Fotos enviadas pelo responsável exclusivamente pelo canal criptografado do WhatsApp para guiar os traços artísticos da ilustração do personagem.</li>
                  <li><strong>Dedicatória Opcional:</strong> Mensagem afetiva fornecida pelo solicitante para ser incluída nas páginas iniciais da obra.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">2. Finalidade, Segurança e Não Compartilhamento</h5>
                <p>
                  Os dados e fotos fornecidos têm como <strong>única finalidade</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Atender à solicitação de prévia e orçamento via WhatsApp com criptografia de ponta-a-ponta;</li>
                  <li>Produzir a narrativa personalizada e a capa do livro infantil com a semelhança da criança;</li>
                  <li>Entregar o arquivo PDF final ao responsável.</li>
                </ul>
                <p className="font-semibold text-emerald-800">
                  NUNCA comercializamos, alugamos, cedemos ou compartilhamos fotos ou dados de crianças com terceiros, agências de publicidade, redes sociais públicas ou bancos de dados externos.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">3. Armazenamento e Exclusão</h5>
                <p>
                  Os dados ficam armazenados temporariamente para permitir o suporte e eventual reenvio de arquivo perdido a pedido do cliente. O responsável tem direito garantido pelo Artigo 18 da LGPD de solicitar, a qualquer momento, a confirmação, correção ou exclusão definitiva de seus dados por meio do nosso WhatsApp.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">4. Encarregado pelo Tratamento de Dados (DPO)</h5>
                <p>
                  Para quaisquer dúvidas, esclarecimentos ou requisições sobre seus direitos de privacidade, contate diretamente nossa equipe pelo WhatsApp ({WHATSAPP_DISPLAY_PHONE}).
                </p>
              </section>
            </article>
          )}

          {/* TAB 3: ENTREGA, CANCELAMENTO E TROCAS */}
          {activeTab === 'trocas' && (
            <article className="space-y-5">
              <div>
                <h4 className="text-xl font-extrabold text-[#653B2A] mb-1">
                  Política de Entrega, Ajustes e Cancelamento
                </h4>
                <p className="text-xs text-[#653B2A]/70">
                  Transparência de acordo com o Código de Defesa do Consumidor (CDC)
                </p>
              </div>

              <div className="bg-[#FFF6E6] p-4 rounded-2xl border border-[#653B2A]/15 text-xs">
                <p className="font-semibold text-[#653B2A] mb-1">Garantia de Satisfação com Prévia Sem Compromisso:</p>
                <p>
                  Para garantir total segurança e transparência, você recebe uma prévia inicial gratuita da história antes de qualquer decisão de compra. Você só fecha o pedido completo se amar a proposta!
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">1. Formato e Prazo de Entrega</h5>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong>Formato:</strong> Arquivo digital em PDF de alta qualidade (300 DPI - padrão gráfico profissional) enviado diretamente no seu WhatsApp ou e-mail.</li>
                  <li><strong>Prazo:</strong> A prévia personalizada no WhatsApp é apresentada em até 2 horas para sua avaliação inicial. Após a sua aprovação, a entrega total do livro completo em PDF de alta qualidade (300 DPI) é realizada em até 6 horas.</li>
                  <li><strong>Sem Frete:</strong> Não há cobrança de taxa de entrega física ou espera de frete.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">2. Revisões Gratuitas (2 Revisões Grátis)</h5>
                <p>
                  Oferecemos <strong>2 revisões gratuitas inclusas no pedido</strong> para você solicitar ajustes de grafia do nome, data de aniversário, idade, dedicatória ou detalhes da história antes da entrega do arquivo final definitivo.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">3. Cancelamento e Direito de Arrependimento (Produtos Sob Medida)</h5>
                <p>
                  Por se tratar de um <strong>produto digital e personalizado sob demanda</strong> (feito exclusivamente com o nome e características específicas de uma criança), a produção integral do livro tem início após a aprovação da prévia pelo cliente.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong>Antes da aprovação da prévia:</strong> Processo 100% gratuito e sem compromisso.</li>
                  <li><strong>Na etapa de revisão:</strong> O cliente usufrui de suas 2 revisões grátis para garantir que a história fique impecável.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-base text-[#653B2A]">4. Passos para Guardar o Arquivo & Reenvio Gratuito</h5>
                <p>
                  Ao receber seu PDF, recomendamos: 1) Salvar na nuvem (Google Drive, iCloud ou OneDrive); 2) Enviar por e-mail para si mesmo; 3) Guardar em pen drive ou pasta familiar. Além disso, mantemos backup protegido por até 12 meses para reenvio gratuito caso você troque de celular ou perca o arquivo.
                </p>
              </section>
            </article>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-t border-[#653B2A]/15 bg-[#FFF6E6] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#653B2A]/80 text-center sm:text-left">
            Conto de Ouro • CNPJ: 68.047.006/0001-58 • WhatsApp: {WHATSAPP_DISPLAY_PHONE}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#F6B83F] hover:bg-[#ebb036] active:scale-98 text-[#653B2A] text-xs sm:text-sm font-extrabold shadow-xs transition-all cursor-pointer border border-[#653B2A]/10"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
