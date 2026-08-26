# Layout `bloco`

Derivado do `modelos/modelo05`. Traduzido para a nossa paleta e as nossas
fontes.

**Serve para:** temas de comparação e de lista curta, e para qualquer carrossel
que precise de peso institucional. É o mais firme dos três.

---

## O que o modelo faz (leitura do original)

Canvas 1080×1350. Dois planos: um fundo cinza quase branco e, sobre ele, um
**bloco de cor chapada com cantos muito arredondados** que sangra por três
bordas e deixa uma margem fina aparecendo à esquerda e no topo. É essa margem
estreita de fundo que faz o bloco parecer um cartão empilhado, e não uma cor
de fundo.

A capa inverte: o bloco vira uma **faixa vertical estreita** na borda esquerda,
e o texto fica escuro sobre o cinza. O contraste de tratamento entre capa e
internas é o que anuncia "a capa é outra coisa".

O texto interno é **branco sobre a cor**, e a hierarquia acontece **dentro da
mesma frase**: parte em peso regular, parte em peso bold. Não há mudança de
tamanho nem de família — só de peso. É econômico e funciona.

Abaixo da frase, uma **régua horizontal curta** (cerca de 25% da largura) e,
depois dela, o apoio em bold menor. A régua é o que separa argumento de dado.

A imagem é um objeto que **sangra pela borda direita por cima do bloco**, sem
moldura, com sombra própria. Ela invade o cartão em vez de ser contida por ele.

## Nossa versão

| | |
|---|---|
| Fundo | `--osso` `#EFE9DB` |
| Bloco | `--ultramar` `#16256B` |
| Texto no bloco | `--osso` `#EFE9DB` |
| Texto na capa | `--ultramar-esc` `#0B1238` |
| Acento | `--ouro` `#C8A22B` — **só na palavra-chave da capa** |
| Display e apoio | IBM Plex Sans (300 / 600) |
| Rótulo | IBM Plex Mono, caps, `letter-spacing .22em` |

Este é o único layout dos três **sem Fraunces**. O modelo original é
inteiramente grotesco, e trocar por serifada desmancharia a firmeza que é a
razão de existir dele. A identidade se mantém pela cor, não pela fonte.

O ouro entra uma vez só, na capa, na palavra que o `**asterisco**` marca. Nas
internas o destaque é peso, como no original.

## Grade

```
margem do fundo      esquerda 52px, topo 40px (o bloco sangra nas outras)
raio do bloco        56px
padding interno      112px lateral, 96px vertical
faixa da capa        56px de largura, sangra em cima e embaixo, borda esquerda
régua                1.5px, 25% da largura, 48px acima e abaixo
imagem               painel de 34% × 58%, canto arredondado 40px, sangra
                     40px pela direita, com sombra projetada
```

## Escala tipográfica

| Elemento | Tamanho | Peso | Entrelinha |
|---|---|---|---|
| rótulo / hashtag | 22px | 500 | — |
| título da capa | 84px | 300 + 600 | 1.05 |
| frase interna | 60px | 300 + 600 | 1.12 |
| apoio | 30px | 600 | 1.4 |
| assinatura | 24px | 600 | — |

A frase interna vai **no meio vertical do bloco**, não no rodapé. É outra
diferença em relação aos outros dois layouts, e ela é deliberada: o bloco tem
espaço de sobra, e centrar o texto é o que dá o ar institucional.

## O peso misto

A regra que faz este layout funcionar: **a frase começa leve e endurece na
parte que importa.**

```json
"frase": "O que a gente chama de poder **não é o que a teologia chama**."
```

O trecho entre asteriscos vira peso 600; o resto fica em 300. Uma marcação por
frase, no máximo duas. Se a frase inteira for bold, não há hierarquia nenhuma.

## O que não fazer

- Não usar Fraunces aqui. O layout é grotesco de ponta a ponta.
- Não colocar ouro nas internas — sobre o ultramarino ele vira decoração.
- No original a imagem é um recorte 3D com fundo transparente, que invade o
  cartão sem moldura. As nossas artes são **fotografias retangulares**, e um
  retângulo cru colado sobre o cartão lê como erro. Por isso aqui ela vira um
  painel com canto arredondado e sombra: o volume vem da sombra, não do
  recorte. Se um dia houver arte com alfa, volte ao recorte sem moldura.
- Não encostar o texto no canto arredondado: os 112px de padding lateral
  existem porque o raio de 56px come o canto.
- Não usar este layout para tema com muita explicação. O bloco pede frase
  curta e apoio de duas linhas — para explicação longa, use `editorial`.
