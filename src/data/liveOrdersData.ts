import { LOCKED_IMAGES } from '../config/imageAssets';

export interface OrderNotificationItem {
  id: string;
  customerName: string;
  relation: string;
  city: string;
  state: string;
  actionText: string;
  bookTitle: string;
  childName: string;
  bookCover: string;
  timeAgo: string;
  isCustomTheme?: boolean;
  themeTag: string;
}

export const REALISTIC_LIVE_NOTIFICATIONS: OrderNotificationItem[] = [
  // 1. Temas Exclusivos & Personalizados - Todos adquiridos
  {
    id: 'ord-custom-1',
    customerName: 'Renata & Tiago',
    relation: 'Pais',
    city: 'Campinas',
    state: 'SP',
    actionText: 'adquiriu o livro',
    bookTitle: 'Gael e o Cachorrinho Astronauta',
    childName: 'Gael (3 anos)',
    bookCover: LOCKED_IMAGES.capaTheoEstrelas,
    timeAgo: 'há 2 minutos',
    isCustomTheme: true,
    themeTag: 'Tema Exclusivo'
  },
  {
    id: 'ord-custom-2',
    customerName: 'Mariana P.',
    relation: 'Mãe',
    city: 'Curitiba',
    state: 'PR',
    actionText: 'adquiriu o livro sob medida',
    bookTitle: 'Maya, a Bailarina e o Leão Amigo',
    childName: 'Maya (4 anos)',
    bookCover: LOCKED_IMAGES.capaLunaFloresta,
    timeAgo: 'há 5 minutos',
    isCustomTheme: true,
    themeTag: 'Tema Exclusivo'
  },
  {
    id: 'ord-custom-3',
    customerName: 'Vovó Helena',
    relation: 'Avó',
    city: 'Porto Alegre',
    state: 'RS',
    actionText: 'adquiriu o livro para irmãos',
    bookTitle: 'Gêmeos Noah e Theo no Fundo do Mar',
    childName: 'Noah & Theo (3 anos)',
    bookCover: LOCKED_IMAGES.capaHelenaJardim,
    timeAgo: 'há 8 minutos',
    isCustomTheme: true,
    themeTag: 'Para Gêmeos'
  },
  {
    id: 'ord-custom-4',
    customerName: 'Eduardo M.',
    relation: 'Pai',
    city: 'Belo Horizonte',
    state: 'MG',
    actionText: 'adquiriu o livro',
    bookTitle: 'Enzo e a Pista de Carros Velozes',
    childName: 'Enzo (5 anos)',
    bookCover: LOCKED_IMAGES.capaLucasFutebol,
    timeAgo: 'há 11 minutos',
    isCustomTheme: true,
    themeTag: 'Tema Exclusivo'
  },
  {
    id: 'ord-custom-5',
    customerName: 'Dinda Camila',
    relation: 'Madrinha',
    city: 'Florianópolis',
    state: 'SC',
    actionText: 'adquiriu de presente',
    bookTitle: 'Alice e o Castelo das Borboletas',
    childName: 'Alice (4 anos)',
    bookCover: LOCKED_IMAGES.capaLunaFloresta,
    timeAgo: 'há 14 minutos',
    isCustomTheme: true,
    themeTag: 'Presente de Dinda'
  },
  {
    id: 'ord-custom-6',
    customerName: 'Rodrigo B.',
    relation: 'Pai',
    city: 'Ribeirão Preto',
    state: 'SP',
    actionText: 'adquiriu o livro personalizado',
    bookTitle: 'Arthur e seu Golden Retriever Max',
    childName: 'Arthur (6 anos)',
    bookCover: LOCKED_IMAGES.capaLucasFutebol,
    timeAgo: 'há 17 minutos',
    isCustomTheme: true,
    themeTag: 'Criança & Pet'
  },

  // 2. Histórias Clássicas do Catálogo - Livros adquiridos
  {
    id: 'ord-cat-1',
    customerName: 'Juliana S.',
    relation: 'Mãe',
    city: 'São Paulo',
    state: 'SP',
    actionText: 'adquiriu o livro completo em PDF',
    bookTitle: 'Bento e o Mundo dos Dinossauros',
    childName: 'Bento (2 anos)',
    bookCover: LOCKED_IMAGES.bentoCapaTransformada,
    timeAgo: 'há 20 minutos',
    themeTag: 'Capa Aprovada'
  },
  {
    id: 'ord-cat-2',
    customerName: 'Felipe G.',
    relation: 'Pai',
    city: 'Santos',
    state: 'SP',
    actionText: 'adquiriu o livro',
    bookTitle: 'Lucas no Mundo do Futebol',
    childName: 'Lucas (6 anos)',
    bookCover: LOCKED_IMAGES.capaLucasFutebol,
    timeAgo: 'há 23 minutos',
    themeTag: 'Adquirido'
  },
  {
    id: 'ord-cat-3',
    customerName: 'Vovó Carmen',
    relation: 'Avó',
    city: 'Brasília',
    state: 'DF',
    actionText: 'adquiriu com dedicatória especial',
    bookTitle: 'Davi e os Dinossauros',
    childName: 'Davi (4 anos)',
    bookCover: LOCKED_IMAGES.capaDaviDinossauros,
    timeAgo: 'há 27 minutos',
    themeTag: 'Presente de Avó'
  },
  {
    id: 'ord-cat-4',
    customerName: 'Beatriz L.',
    relation: 'Mãe',
    city: 'Rio de Janeiro',
    state: 'RJ',
    actionText: 'adquiriu o livro',
    bookTitle: 'Luna na Floresta Encantada',
    childName: 'Luna (5 anos)',
    bookCover: LOCKED_IMAGES.capaLunaFloresta,
    timeAgo: 'há 31 minutos',
    themeTag: 'Adquirido'
  },
  {
    id: 'ord-cat-5',
    customerName: 'Carlos Henrique',
    relation: 'Pai',
    city: 'Goiânia',
    state: 'GO',
    actionText: 'adquiriu o livro digital',
    bookTitle: 'Theo no Reino das Estrelas',
    childName: 'Theo (5 anos)',
    bookCover: LOCKED_IMAGES.capaTheoEstrelas,
    timeAgo: 'há 35 minutos',
    themeTag: 'Adquirido'
  },
  {
    id: 'ord-cat-6',
    customerName: 'Titia Letícia',
    relation: 'Tia',
    city: 'Salvador',
    state: 'BA',
    actionText: 'adquiriu para aniversário',
    bookTitle: 'Helena no Jardim Encantado',
    childName: 'Helena (3 anos)',
    bookCover: LOCKED_IMAGES.capaHelenaJardim,
    timeAgo: 'há 39 minutos',
    themeTag: 'Aniversário'
  },

  // 3. Mais Temas Criativos - Todos adquiridos
  {
    id: 'ord-custom-7',
    customerName: 'Priscilla & Daniel',
    relation: 'Pais',
    city: 'Joinville',
    state: 'SC',
    actionText: 'adquiriu o livro sob medida',
    bookTitle: 'Bernardo e a Fazendinha dos Tratores',
    childName: 'Bernardo (4 anos)',
    bookCover: LOCKED_IMAGES.capaDaviDinossauros,
    timeAgo: 'há 43 minutos',
    isCustomTheme: true,
    themeTag: 'Tema Exclusivo'
  },
  {
    id: 'ord-custom-8',
    customerName: 'Vanessa R.',
    relation: 'Mãe',
    city: 'Vitória',
    state: 'ES',
    actionText: 'adquiriu o livro',
    bookTitle: 'Cecília, a Protetora dos Animais',
    childName: 'Cecília (5 anos)',
    bookCover: LOCKED_IMAGES.capaLunaFloresta,
    timeAgo: 'há 48 minutos',
    isCustomTheme: true,
    themeTag: 'Tema Exclusivo'
  },
  {
    id: 'ord-cat-7',
    customerName: 'Marcelo T.',
    relation: 'Pai',
    city: 'Londrina',
    state: 'PR',
    actionText: 'adquiriu em alta resolução (300 DPI)',
    bookTitle: 'Lucas no Mundo do Futebol',
    childName: 'Mateus (7 anos)',
    bookCover: LOCKED_IMAGES.capaLucasFutebol,
    timeAgo: 'há 52 minutos',
    themeTag: 'PDF 300 DPI'
  },
  {
    id: 'ord-custom-9',
    customerName: 'Vovô Geraldo',
    relation: 'Avô',
    city: 'Sorocaba',
    state: 'SP',
    actionText: 'adquiriu o livro personalizado',
    bookTitle: 'Pedro e o Mapa do Tesouro Dourado',
    childName: 'Pedro (5 anos)',
    bookCover: LOCKED_IMAGES.capaTheoEstrelas,
    timeAgo: 'há 57 minutos',
    isCustomTheme: true,
    themeTag: 'Tema Exclusivo'
  },
  {
    id: 'ord-cat-8',
    customerName: 'Aline & Fabiano',
    relation: 'Pais',
    city: 'Caxias do Sul',
    state: 'RS',
    actionText: 'adquiriu o livro completo',
    bookTitle: 'Davi e os Dinossauros',
    childName: 'Davi (3 anos)',
    bookCover: LOCKED_IMAGES.capaDaviDinossauros,
    timeAgo: 'há 1 hora',
    themeTag: 'Adquirido'
  },
  {
    id: 'ord-cat-9',
    customerName: 'Dinda Patrícia',
    relation: 'Madrinha',
    city: 'Niterói',
    state: 'RJ',
    actionText: 'adquiriu o livro digital',
    bookTitle: 'Helena no Jardim Encantado',
    childName: 'Manuela (4 anos)',
    bookCover: LOCKED_IMAGES.capaHelenaJardim,
    timeAgo: 'há 1 hora',
    themeTag: 'Livro Completo'
  }
];
