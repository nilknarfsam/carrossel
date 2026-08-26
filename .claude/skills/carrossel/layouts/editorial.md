# Layout `editorial`

Derivado do `modelos/modelo01`. Traduzido para a nossa paleta e as nossas
fontes — a estrutura é de lá, a identidade é nossa.

**Serve para:** temas de argumento e distinção, onde a frase é curta e carrega
sozinha. É o layout mais silencioso dos três.

---

## O que o modelo faz (leitura do original)

Canvas 1080×1350. Fundo creme, tinta quase preta de tom quente. Nenhuma cor
de acento em lugar nenhum: o contraste inteiro é claro contra escuro, e a
hierarquia vem só do tamanho e da família do tipo.

A decisão que segura o layout é o **cabeçalho fixo**: um rótulo em sans caps
com entreletra larga, e logo abaixo uma régua fina que sangra pela borda
esquerda e para em cerca de 35% da largura. Ele se repete idêntico em todas as
páginas, e é o que faz cinco imagens diferentes lerem como uma peça só.

A foto nunca é fundo. Ela é um **painel** que sangra por uma borda lateral e
tem os dois cantos internos arredondados, ocupando cerca de 38% da largura e a
faixa vertical central. Na capa entra pela direita; nas internas, pela
esquerda. O texto ocupa a coluna que sobra.

O número do item vem em **script cursivo** — `01.`, `03.` — logo acima do
título serifado. É o único elemento manuscrito da peça, e ele existe para
quebrar a rigidez das caixas altas.

O rodapé é sempre uma **cápsula de contorno fino**, e o conteúdo dela muda com
a função da página: `SWIPE →` na capa, o número da próxima página com seta nas
internas, o `@` na última.

## Nossa versão

| | |
|---|---|
| Fundo | `--osso` `#EFE9DB` |
| Tinta | `--ultramar-esc` `#0B1238` |
| Acento | nenhum. **O ouro não entra neste layout.** |
| Display | Fraunces, `opsz 144`, `SOFT 20`, `WONK 1`, peso 600 |
| Script | Fraunces itálico, `SOFT 100`, `WONK 1`, peso 300 |
| Apoio | IBM Plex Sans 300 |
| Rótulo | IBM Plex Mono, caps, `letter-spacing .22em` |

O ouro fica de fora de propósito. Neste layout o grifo dourado brigaria com o
creme — o destaque do termo-chave sai em **peso**, não em cor: o termo vai a
Fraunces 700 dentro de uma linha 600.

## Grade

```
padding lateral      88px
topo do rótulo       84px
régua                20px abaixo do rótulo, 1px, 34% da largura, sangra à esquerda
painel de foto       38% da largura × 52% da altura, centro vertical em 46%
                     sangra por uma borda; cantos internos raio 44px
coluna de texto      a largura restante menos 88px de goteira
cápsula do rodapé    altura 76px, raio 38px, borda 1.5px, base a 84px do fundo
```

## Escala tipográfica

| Elemento | Tamanho | Entrelinha |
|---|---|---|
| rótulo | 20px | — |
| script (número) | 68px | 1 |
| título da capa | 96px | 0.94 |
| título interno | 68px | 0.98 |
| apoio | 32px | 1.5 |
| cápsula | 22px | — |

Título da capa em **caixa alta**, quebrado à mão em 3 ou 4 linhas curtas. O
título interno também em caixa alta, no máximo 2 linhas. O apoio é o único
texto em caixa mista, e aqui ele pode ir a **6 linhas** — é o layout que mais
comporta explicação.

## Alternância

Capa: foto à **direita**. Internas: foto à **esquerda**. Fecho: sem foto, o
texto centrado na largura inteira e a cápsula com o `@`.

Não alternar lado a cada slide. O modelo original mantém a foto à esquerda em
todas as internas, e é isso que dá o ritmo de leitura.

## A foto

Um painel estreito e alto. Vale tudo o que está no `arte.md`, com dois ajustes:

- A imagem **não** é escurecida aqui — ela aparece em opacidade cheia. É a
  única exceção à regra do véu, e existe porque o fundo é claro.
- Composição **vertical**: o sujeito precisa funcionar num recorte de 2:3
  estreito. Objeto alto, ou macro de textura. Paisagem larga não serve.

## O que não fazer

- Não colocar ouro. Nem no rótulo, nem no grifo, nem na cápsula.
- Não encher o painel de foto com detalhe: ele é estreito, detalhe fino some.
- Não usar a cápsula para frase — ela leva no máximo três palavras ou um
  número com seta.
- Não centralizar o título. Todo o layout é alinhado à esquerda.
