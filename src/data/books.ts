import { LOCKED_IMAGES } from '../config/imageAssets';

export interface ParentReview {
  rating: number;
  text: string;
  author: string;
  relation: string;
}

export interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  ageRange: string;
  description: string;
  coverImage: string;
  accentColor: string;
  sampleSnippet: string;
  childName: string;
  childAge: string;
  childProfile: string;
  buttonLabel: string;
  spreadImage?: string;
  clientLocation: string;
  deliveryProof: string;
  parentReview: ParentReview;
  dedicationExample: string;
}

export const CONCEPTUAL_BOOKS: BookItem[] = [
  {
    id: 'lucas-futebol',
    title: 'Lucas no Mundo do Futebol',
    subtitle: 'Uma aventura mágica de gols, amizade e muita emoção',
    tag: 'Esporte & Aventura',
    ageRange: '4 a 10 anos',
    childName: 'Lucas',
    childAge: '6 anos',
    childProfile: 'Apaixonado por futebol, sonha em ser craque e adora jogar bola com os amigos.',
    buttonLabel: '⚽ Lucas (Futebol)',
    description: 'No grande dia da final no Estádio dos Sonhos, Lucas entra em campo com seus melhores amigos para viver uma partida inesquecível, onde o verdadeiro troféu é o trabalho em equipe.',
    coverImage: LOCKED_IMAGES.capaLucasFutebol,
    accentColor: '#F7932F',
    sampleSnippet: 'Com a camisa 10 e o coração batendo forte, Lucas olhou para a arquibancada lotada de bichinhos torcedores. Ele respirou fundo, deu um drible mágico na bola brilhante e ouviu a torcida vibrar: "Vai, Lucas!"',
    clientLocation: 'Belo Horizonte, MG',
    deliveryProof: 'Entregue via WhatsApp em 4h',
    parentReview: {
      rating: 5,
      text: 'O Lucas é doido por futebol! Quando viu a capa com o nome dele e a camisa 10, quase não acreditou. Imprimimos em gráfica rápida e ficou perfeito!',
      author: 'Roberto S.',
      relation: 'Pai do Lucas'
    },
    dedicationExample: 'Para o nosso eterno camisa 10. Que você nunca deixe de sonhar alto e jogar com o coração. Com todo amor, Papai e Mamãe.'
  },
  {
    id: 'luna-floresta',
    title: 'Luna na Floresta Encantada',
    subtitle: 'Uma jornada cheia de magia, vaga-lumes e amizade pura',
    tag: 'Magia & Natureza',
    ageRange: '3 a 8 anos',
    childName: 'Luna',
    childAge: '5 anos',
    childProfile: 'Curiosa, meiga e carinhosa, ama a natureza, flores e conversar com os bichinhos.',
    buttonLabel: '🌿 Luna (Floresta)',
    description: 'Ao seguir uma trilha iluminada por vaga-lumes dourados, a pequena Luna descobre o segredo da floresta encantada e faz uma amizade eterna com um filhote de cervo.',
    coverImage: LOCKED_IMAGES.capaLunaFloresta,
    accentColor: '#8A542F',
    sampleSnippet: 'As folhas das árvores sussurravam canções suaves ao vento. Quando Luna estendeu a mão com carinho, o pequeno cervo aproximou-se devagar, e uma chuva de borboletas luminosas dançou ao redor dos dois.',
    clientLocation: 'São Paulo, SP',
    deliveryProof: 'Entregue via WhatsApp em 2h',
    parentReview: {
      rating: 5,
      text: 'A Luna pede para ler todas as noites. As ilustrações da floresta são mágicas e o jeitinho dela foi capturado com muita delicadeza.',
      author: 'Camila M.',
      relation: 'Mãe da Luna'
    },
    dedicationExample: 'Para nossa doce Luna, que ilumina nossa vida como os vaga-lumes da sua floresta encantada.'
  },
  {
    id: 'davi-dinossauros',
    title: 'Davi e os Dinossauros',
    subtitle: 'Coragem e companheirismo em um vale pré-histórico fascinante',
    tag: 'Dinossauros & Coragem',
    ageRange: '2 a 8 anos',
    childName: 'Davi',
    childAge: '4 anos',
    childProfile: 'Pequeno explorador corajoso, adora répteis pré-históricos e fósseis misteriosos.',
    buttonLabel: '🦖 Davi (Dinossauros)',
    description: 'Davi viaja em sua imaginação até uma terra ancestral onde os dinossauros são amigáveis e carinhosos, vivendo momentos de pura coragem e carinho.',
    coverImage: LOCKED_IMAGES.capaDaviDinossauros,
    accentColor: '#F7932F',
    sampleSnippet: 'O triceratops bebê encostou a cabecinha carinhosamente na mão de Davi. Naquele instante, o pequeno aventureiro soube que a coragem de verdade mora na amizade e na gentileza.',
    clientLocation: 'Curitiba, PR',
    deliveryProof: 'Entregue via WhatsApp em 3h',
    parentReview: {
      rating: 5,
      text: 'Melhor presente que já demos para o Davi. Ele ama dinossauros e se sentiu o próprio explorador corajoso!',
      author: 'Marisa C.',
      relation: 'Avó do Davi'
    },
    dedicationExample: 'Para o nosso pequeno e valente explorador Davi. A coragem de verdade mora no seu sorriso. Vovó Marisa.'
  },
  {
    id: 'theo-estrelas',
    title: 'Theo no Reino das Estrelas',
    subtitle: 'Um conto mágico sobre sonhos, constelações e luz própria',
    tag: 'Fantasia & Sonhos',
    ageRange: '3 a 9 anos',
    childName: 'Theo',
    childAge: '5 anos',
    childProfile: 'Sonhador e criativo, adora olhar as estrelas à noite e sonhar acordado.',
    buttonLabel: '✨ Theo (Estrelas)',
    description: 'Theo embarca em uma viagem pelo tapete celestial para acender as estrelinhas que estavam apagadas, descobrindo que o brilho mais lindo de todos é aquele que carregamos no peito.',
    coverImage: LOCKED_IMAGES.capaTheoEstrelas,
    accentColor: '#8A542F',
    sampleSnippet: 'Com sua varinha estelar e sua capa mágica, Theo caminhou pela estrada de nuvens. Ao tocar suavemente a estrela guia, ela brilhou com um calor dourado e sussurrou: "Obrigado por acreditar em nós, Theo!"',
    clientLocation: 'Rio de Janeiro, RJ',
    deliveryProof: 'Entregue via WhatsApp em 5h',
    parentReview: {
      rating: 5,
      text: 'A qualidade do arquivo em 300 DPI é impressionante no tablet. A história do reino das estrelas emocionou a família toda.',
      author: 'Patrícia & Carlos',
      relation: 'Pais do Theo'
    },
    dedicationExample: 'Ao nosso pequeno Theo: que você continue brilhando mais forte que qualquer estrela no céu.'
  },
  {
    id: 'helena-jardim',
    title: 'Helena no Jardim Encantado',
    subtitle: 'Um conto suave de delicadeza, flores cantantes e borboletas',
    tag: 'Delicadeza & Sonho',
    ageRange: '2 a 7 anos',
    childName: 'Helena',
    childAge: '4 anos',
    childProfile: 'Doce e delicada, ama vestir vestidinhos floridos, colher florzinhas e pintar.',
    buttonLabel: '🌸 Helena (Jardim)',
    description: 'Helena encontra uma passagem secreta no fundo do quintal que a leva a um jardim onde as flores cantam melodias de ninar e as borboletas espalham pó de alegria.',
    coverImage: LOCKED_IMAGES.capaHelenaJardim,
    accentColor: '#F7932F',
    sampleSnippet: 'A cada passo de Helena na grama macia, novas flores de pétalas luminosas se abriam em saudação. A flor mais alta inclinou-se suavemente: "Seja bem-vinda ao seu jardim, Helena!"',
    clientLocation: 'Porto Alegre, RS',
    deliveryProof: 'Entregue via WhatsApp em 2h',
    parentReview: {
      rating: 5,
      text: 'A Helena ficou encantada com as flores cantantes. O carinho do atendimento no WhatsApp foi impecável do início ao fim.',
      author: 'Juliana N.',
      relation: 'Madrinha da Helena'
    },
    dedicationExample: 'Para a nossa florzinha mais preciosa, Helena. Que a sua vida seja sempre um lindo jardim.'
  }
];

export interface BookSpreadPage {
  id: string;
  stepNumber: string;
  title: string;
  pageType: 'capa' | 'abertura' | 'aventura' | 'climax' | 'dedicatoria';
  badge: string;
  headline: string;
  textContent: string;
  detailsNote: string;
  illustrationImage: string;
}

export const BOOK_SPREAD_PAGES: BookSpreadPage[] = [
  {
    id: 'spread-1',
    stepNumber: '01',
    title: 'Capa Personalizada',
    pageType: 'capa',
    badge: 'Página Externa',
    headline: 'O nome do seu pequeno como o título do livro',
    textContent: 'A capa já traz a ilustração inspirada nas características da criança e seu nome em destaque com acabamento editorial sofisticado.',
    detailsNote: 'Tipografia expressiva, cores acolhedoras e composição de alta qualidade.',
    illustrationImage: LOCKED_IMAGES.spreadCapaReinoEstrelas
  },
  {
    id: 'spread-2',
    stepNumber: '02',
    title: 'Página de Abertura',
    pageType: 'abertura',
    badge: 'Apresentação Mágica',
    headline: 'Onde o mundo da imaginação começa',
    textContent: '“Para o pequeno Lucas, que ilumina nossos dias com a imaginação mais bonita do mundo. Esta aventura é toda sua.”',
    detailsNote: 'Dedicatória personalizada feita na primeira página com o nome de quem está presenteando.',
    illustrationImage: LOCKED_IMAGES.spreadHeroStorybookMagic
  },
  {
    id: 'spread-3',
    stepNumber: '03',
    title: 'Página de Aventura',
    pageType: 'aventura',
    badge: 'Narrativa Envolvente',
    headline: 'Descobertas e desafios que estimulam a imaginação',
    textContent: '“Lucas olhou ao redor e percebeu que as folhas sussurravam um enigma. Ele não hesitou: com coragem e um sorriso no rosto, deu o primeiro passo na trilha luminosa.”',
    detailsNote: 'Ilustrações ricas em detalhes visuais e texto adaptado à faixa etária da criança.',
    illustrationImage: LOCKED_IMAGES.spreadPequenoExplorador
  },
  {
    id: 'spread-4',
    stepNumber: '04',
    title: 'Momento Marcante',
    pageType: 'climax',
    badge: 'O Grande Clímax',
    headline: 'A criança como protagonista e heroína da jornada',
    textContent: '“Foi a bondade e a curiosidade de Lucas que desvendaram o mistério da grande árvore mãe. Todos os seres daquele reino se reuniram para aplaudir o novo herói.”',
    detailsNote: 'Valores positivos de empatia, amizade, curiosidade e bravura.',
    illustrationImage: LOCKED_IMAGES.spreadGuardiaoDinos
  },
  {
    id: 'spread-5',
    stepNumber: '05',
    title: 'Página Final com Mensagem',
    pageType: 'dedicatoria',
    badge: 'Lembrança Eterna',
    headline: 'Uma mensagem de amor para guardar para sempre',
    textContent: '“Nunca se esqueça: você é capaz de criar histórias incríveis todos os dias. Com todo o meu amor, de quem te ama além das estrelas. Vovó Helena.”',
    detailsNote: 'Espaço carinhoso para a assinatura e mensagem de quem presenteia.',
    illustrationImage: LOCKED_IMAGES.spreadJardimEncantado
  }
];

export interface CustomThemeOption {
  id: string;
  title: string;
  description: string;
  iconName: string;
  popularWith: string;
}

export const CUSTOM_THEMES: CustomThemeOption[] = [
  {
    id: 'fantasia',
    title: 'Fantasia & Contos de Fadas',
    description: 'Castelos nos céus, varinhas de condão, dragões bondosos e poções brilhantes.',
    iconName: 'Sparkles',
    popularWith: 'Muito pedido para 3 a 7 anos'
  },
  {
    id: 'dinossauros',
    title: 'Dinossauros & Exploração',
    description: 'Selvas ancestrais, pegadas gigantes, amizades pré-históricas e expedições científicas.',
    iconName: 'Compass',
    popularWith: 'Favorito absoluto de 2 a 8 anos'
  },
  {
    id: 'espaco',
    title: 'Espaço & Planetas',
    description: 'Foguetes velozes, anéis de Saturno, amizade com pequenos alienígenas e estrelas cadentes.',
    iconName: 'Rocket',
    popularWith: 'Adorado por pequenos curiosos de 4 a 9 anos'
  },
  {
    id: 'natureza',
    title: 'Animais & Natureza',
    description: 'Florestas encantadas, animais falantes, riachos cristalinos e aventuras ao ar livre.',
    iconName: 'Trees',
    popularWith: 'Perfeito para bebês e crianças de 2 a 6 anos'
  },
  {
    id: 'aventuras',
    title: 'Aventuras & Descobertas',
    description: 'Mapas de tesouros, mistérios na ilha misteriosa, coragem e espírito de equipe.',
    iconName: 'Map',
    popularWith: 'Ideal para 5 a 10 anos'
  }
];

export type FaqCategory = 'todas' | 'formato' | 'personalizacao' | 'previa' | 'seguranca';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'formato' | 'personalizacao' | 'previa' | 'seguranca';
}

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'formato',
    question: 'O livro é físico ou digital? Como recebo?',
    answer: 'O livro é 100% digital, entregue em arquivo PDF de altíssima definição (300 DPI profissional), enviado diretamente no seu WhatsApp e também por e-mail. Você não paga frete e não espera semanas de entrega dos Correios! Pode ler imediatamente no tablet, celular ou computador. Além disso, se desejar o livro físico para a criança folhear, o arquivo já vai 100% preparado e diagramado para você levar para imprimir e encadernar em qualquer gráfica rápida ou papelaria da sua cidade.'
  },
  {
    id: 'faq-2',
    category: 'previa',
    question: 'A solicitação da prévia tem algum custo ou compromisso?',
    answer: 'Não, absolutamente nenhum! O pedido de prévia é 100% gratuito e sem compromisso. Nossa equipe prepara uma proposta com o nome do seu filho(a), tema escolhido e amostra das ilustrações diretamente no WhatsApp. Você só adquire a história se realmente amar o resultado!'
  },
  {
    id: 'faq-3',
    category: 'personalizacao',
    question: 'Como funciona a semelhança da criança nas ilustrações? Preciso enviar foto?',
    answer: 'Sim, você pode nos enviar uma foto de referência pelo WhatsApp! A semelhança e a fidelidade dos traços são feitas conforme a qualidade da foto enviada: por isso, recomendamos fotos bem nítidas, de frente, com boa iluminação e sem filtros pesados. Nossos artistas capturam com carinho os traços marcantes (cor e textura do cabelo, penteado, corte, cor dos olhos, óculos, covinhas ou estilo de roupa) para desenhar o personagem no universo da história, mantendo toda a magia infantil.'
  },
  {
    id: 'faq-4',
    category: 'personalizacao',
    question: 'Posso incluir uma dedicatória personalizada? Tem custo adicional?',
    answer: 'A dedicatória é 100% gratuita e vem inclusa em todos os livros! Ela é feita na primeira página (abertura da história), com layout artístico especial e carinhoso. Você pode assinar como mamãe, papai, vovó, titios ou padrinhos, registrando uma mensagem de amor que ficará guardada para sempre.'
  },
  {
    id: 'faq-5',
    category: 'previa',
    question: 'Quanto tempo leva para receber a prévia e o livro completo?',
    answer: 'O nosso prazo para enviar a prévia inicial com a proposta da história no WhatsApp é de até 2 horas! O atendimento é ágil e humanizado para você conferir como ficará o livro. Pedidos enviados após as 21h são produzidos com todo o carinho e entregues na manhã seguinte (a partir das 8h). Após a sua aprovação dos textos e detalhes (com 2 revisões grátis inclusas), a entrega do livro completo em altíssima resolução (300 DPI) é realizada em até 6 horas!'
  },
  {
    id: 'faq-6',
    category: 'formato',
    question: 'Posso imprimir o PDF? Como funciona para fazer o livro físico?',
    answer: 'Sim, com certeza pode ser impresso! O arquivo que a gente envia já é 100% pronto para imprimir — diagramado em altíssima resolução (300 DPI, padrão de gráfica profissional), com margens corretas e cores vibrantes. Como nós entregamos o arquivo digital pronto, você economiza não tendo que pagar frete nem esperar semanas de entrega. Para ter o livro físico em mãos para a criança folhear, basta cotar com gráficas rápidas, copiadoras ou papelarias da sua cidade: você envia o PDF para eles pelo WhatsApp ou e-mail, escolhe o papel (sugerimos couché ou offset 150g a 180g) e o acabamento que preferir (espiral, grampo canoa estilo revistinha ou capa dura). É prático, econômico e você imprime quantas cópias quiser!'
  },
  {
    id: 'faq-7',
    category: 'formato',
    question: 'Quantas páginas tem o livro infantil personalizado? Como é a estrutura?',
    answer: 'O livro digital completo possui Capa oficial personalizada com o nome do pequeno, página de Dedicatória afetiva exclusiva na abertura + 15 páginas de história ricamente ilustradas em alta resolução (300 DPI). É uma narrativa completa com começo, meio e fim, no tamanho perfeito para prender a atenção das crianças na hora de dormir ou de brincar!'
  },
  {
    id: 'faq-8',
    category: 'seguranca',
    question: 'Como guardar o arquivo com segurança? E se eu perder ou trocar de celular?',
    answer: 'Para guardar e proteger essa linda recordação para a vida inteira, recomendamos estes passos simples ao receber o seu PDF: 1) Salve uma cópia na nuvem (Google Drive, iCloud ou OneDrive); 2) Envie o arquivo por e-mail para si mesmo ou familiares com o título "Livro Infantil [Nome da Criança]"; 3) Guarde uma cópia em um pen drive ou pasta de memórias no computador. Além disso, fique tranquilo: nossa equipe mantém uma cópia de segurança em nossos arquivos protegidos por até 12 meses. Se você trocar de aparelho ou apagar o arquivo sem querer, basta nos chamar no WhatsApp que reenviamos sem custo algum!'
  },
  {
    id: 'faq-9',
    category: 'personalizacao',
    question: 'Para quais idades os livros são recomendados?',
    answer: 'Atendemos com maestria desde bebês até crianças de 12 anos. Para os menorzinhos (0 a 3 anos), a linguagem é musical, suave, com foco em animais e cores. Para crianças de 4 a 7 anos, aventuras mágicas e vocabulário estimulante. Para 8 a 12 anos, tramas com desafios, mistérios e valores sobre empatia, coragem e perseverança.'
  },
  {
    id: 'faq-10',
    category: 'previa',
    question: 'Quanto custa o livro personalizado? E como funciona o pagamento?',
    answer: 'A solicitação da prévia é 100% gratuita e sem qualquer compromisso! Você nos envia as informações e recebe uma amostra no WhatsApp para ver a capa e a história. Se você amar e quiser o livro digital completo (Capa, Dedicatória + 15 páginas ilustradas em 300 DPI), o valor é de apenas R$ 29,90 em pagamento único promocional (de R$ 59,90 por R$ 29,90). Aceitamos PIX (com liberação imediata) e Cartão de Crédito. Sem assinaturas e sem frete!'
  },
  {
    id: 'faq-11',
    category: 'previa',
    question: 'E se eu quiser corrigir um nome ou trocar um detalhe no texto? Quantas revisões tenho direito?',
    answer: 'Você tem direito a 2 revisões grátis inclusas no seu pedido! Antes da finalização definitiva, você avalia a prévia com calma. Se desejar ajustar a grafia do nome, aprimorar a mensagem da dedicatória ou retocar algum detalhe da história, nossa equipe realiza até 2 rodadas de revisões gratuitas com todo o carinho e agilidade, garantindo que o livro fique perfeito.'
  },
  {
    id: 'faq-12',
    category: 'seguranca',
    question: 'Como as fotos e os dados do meu filho(a) são protegidos?',
    answer: 'Seguimos com total rigor a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018) e o ECA. As fotos e informações da criança são utilizadas exclusivamente pela equipe de criação para a produção da história encomendada. Seus dados jamais são repassados, comercializados ou exibidos publicamente sem a sua autorização explícita por escrito.'
  }
];
