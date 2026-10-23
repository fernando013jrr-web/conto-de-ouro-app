# 🔒 DIRETRIZ DE PROTEÇÃO E CONGELAMENTO DE IMAGENS — CONTO DE OURO

Este documento estabelece o compromisso e a garantia de que as imagens do projeto **Conto de Ouro** estão permanentemente congeladas e preservadas, não sofrendo alterações em modificações futuras da página.

---

## 1. Regra Fundamental
> **Nenhuma imagem aprovada deste projeto deve ser removida, substituída, sobrescrita ou regenerada.**
> Qualquer futura alteração no design, textos, botões ou componentes deve manter intactas as imagens oficiais já configuradas.

---

## 2. Inventário de Imagens Oficiais e Definitivas

| Elemento / Seção | Arquivo Oficial | Descrição |
| :--- | :--- | :--- |
| **Logotipo da Marca** | `Logotipo_Conto_de_Ouro___20_Oct_2026__9.20_pm_e89f22d6.png` | Logo oficial com tipografia e cores da marca |
| **Hero Principal** | `hero_luna_camera_1792488715418.jpg` | Foto da menina Luna e avó lendo juntas a história |
| **Foto Real Enviada** | `IMG_1961_27afb22e.jpeg` | Foto do pequeno Bento sorrindo no roupão de dinossauro verde |
| **Capa Transformada** | `capa_theo_dino_transformado_1792526764978.jpg` | Capa ilustrada oficial "Bento e o Mundo dos Dinossauros" |
| **Livro: Futebol** | `capa_lucas_futebol_1792457865514.jpg` | Lucas no Mundo do Futebol |
| **Livro: Floresta** | `capa_luna_floresta_1792457865146.jpg` | Luna na Floresta Encantada |
| **Livro: Dinossauros** | `capa_davi_dinossauros_1792457814127.jpg` | Davi e os Dinossauros |
| **Livro: Estrelas** | `capa_theo_estrelas_1792457811985.jpg` | Theo no Reino das Estrelas |
| **Livro: Jardim** | `capa_helena_jardim_1792457813151.jpg` | Helena no Jardim Encantado |
| **Formato Digital & Impresso** | `lucas_futebol_tablet_impresso_1792457212780.jpg` | Tablet e livro físico lado a lado |
| **Seção Afetiva Família** | `emotional_grandma_reading_1792454763652.jpg` | Avó emocionada lendo com o neto |
| **Páginas Internas (Spreads)** | `capa_reino_estrelas_pt_...`, `hero_storybook_magic_...`, etc. | Demonstração das páginas internas do livro |

---

## 3. Arquitetura de Imutabilidade e Redundância

Para blindar o projeto contra quebras e perdas:
1. **Centralização**: Todas as referências estão centralizadas e congeladas em `src/config/imageAssets.ts` com `Object.freeze`.
2. **Redundância Quádrupla de Arquivos**: Os arquivos de mídia estão copiados e protegidos em:
   - `/public/assets/images/`
   - `/public/src/assets/images/`
   - `/src/assets/images/`
   - `/public/assets/aistudio/`
   - `/src/assets/aistudio/`
3. **Resistência a Alterações de Rota e Build**: Qualquer requisição de imagem (seja via `/assets/...` ou `/src/assets/...`) responderá com sucesso tanto em ambiente de desenvolvimento (Vite dev) quanto no bundle de produção.
