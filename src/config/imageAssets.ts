/**
 * ============================================================================
 * CONTO DE OURO — REGISTRO CENTRAL E IMUTÁVEL DE IMAGENS DO SITE
 * ============================================================================
 * 
 * ⚠️ DIRETRIZ CRÍTICA DE IMUTABILIDADE DE ASSETS ⚠️
 * TODAS as imagens registradas neste arquivo foram aprovadas e consolidadas
 * para a identidade visual da Conto de Ouro.
 * 
 * REGRAS INVIOLÁVEIS PARA TODAS AS ALTERAÇÕES FUTURAS:
 * 1. NUNCA alterar, substituir, sobrescrever ou regenerar os arquivos de imagem listados aqui.
 * 2. NUNCA trocar esses caminhos por imagens temporárias, geradas por IA ou de bancos genéricos.
 * 3. Qualquer nova edição de layout, texto, estilo ou funcionalidade DEVE continuar apontando
 *    obrigatoriamente para as constantes deste arquivo.
 * 4. Todas as imagens possuem cópias seguras e idênticas em /public/assets/images,
 *    /public/src/assets/images e /src/assets/images para imunidade total a quebras de build.
 * ============================================================================
 */

export const LOCKED_IMAGES = Object.freeze({
  /** Logotipo Oficial da Conto de Ouro */
  logo: '/assets/aistudio/Logotipo_Conto_de_Ouro___20_Oct_2026__9.20_pm_e89f22d6.png',
  logoFallback: '/assets/aistudio/logo_conto_de_ouro_clean.png',

  /** Imagem de Destaque da Hero (Luna lendo com a avó o livro digital e impresso) */
  heroLunaCamera: '/assets/images/hero_luna_camera_1792488715418.jpg',

  /** Seção da Transformação: Foto real do Bento no roupão de dinossauro enviada no WhatsApp */
  bentoFotoRealCelular: '/assets/aistudio/IMG_1961_27afb22e.jpeg',

  /** Seção da Transformação: Capa ilustrada oficial gerada "Bento e o Mundo dos Dinossauros" */
  bentoCapaTransformada: '/assets/images/capa_theo_dino_transformado_1792526764978.jpg',

  /** Catálogo de Livros - Capa Lucas no Mundo do Futebol */
  capaLucasFutebol: '/assets/images/capa_lucas_futebol_1792457865514.jpg',

  /** Catálogo de Livros - Capa Luna na Floresta Encantada */
  capaLunaFloresta: '/assets/images/capa_luna_floresta_1792457865146.jpg',

  /** Catálogo de Livros - Capa Davi e os Dinossauros */
  capaDaviDinossauros: '/assets/images/capa_davi_dinossauros_1792457814127.jpg',

  /** Catálogo de Livros - Capa Theo no Reino das Estrelas */
  capaTheoEstrelas: '/assets/images/capa_theo_estrelas_1792457811985.jpg',

  /** Catálogo de Livros - Capa Helena no Jardim Encantado */
  capaHelenaJardim: '/assets/images/capa_helena_jardim_1792457813151.jpg',

  /** Seção Formato Digital: Tablet + Livro Impresso (Lucas no Mundo do Futebol) */
  lucasTabletEImpresso: '/assets/images/lucas_futebol_tablet_impresso_1792457212780.jpg',

  /** Seção Afetiva / Família: Avó lendo carinhosamente com a criança */
  avoEmocionadaLendo: '/assets/images/emotional_grandma_reading_1792454763652.jpg',

  /** Páginas Internas do Livro (Por Dentro da Obra) */
  spreadCapaReinoEstrelas: '/assets/images/capa_reino_estrelas_pt_1792456545084.jpg',
  spreadHeroStorybookMagic: '/assets/images/hero_storybook_magic_1792454759657.jpg',
  spreadPequenoExplorador: '/assets/images/capa_pequeno_explorador_pt_1792456545572.jpg',
  spreadGuardiaoDinos: '/assets/images/capa_guardiao_dinos_pt_1792456546072.jpg',
  spreadJardimEncantado: '/assets/images/capa_jardim_encantado_pt_1792456546778.jpg',
} as const);

export type LockedImageKey = keyof typeof LOCKED_IMAGES;

/**
 * Função utilitária para obter a URL da imagem com garantia de não quebrar
 */
export function getLockedImageUrl(key: LockedImageKey): string {
  return LOCKED_IMAGES[key];
}
