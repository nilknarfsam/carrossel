# Layout `lista`

Derivado do `modelos/modelo09`. Traduzido para a nossa paleta e as nossas
fontes.

**Serve para:** a sequência `Lista` — conjuntos nomeados pela própria aula.
*Os atributos naturais de Deus*, *as três ordens de prova*, *as quatro causas
de Pedro Lombardo*. É o layout que aguenta 8 páginas sem cansar.

---

## O que o modelo faz (leitura do original)

Canvas 1080×1350. Fundo cinza claro. Na borda direita, uma **forma orgânica
gigante** — uma elipse muito maior que o quadro, cortada pela borda — em cor
saturada. Ela não é decoração: é onde moram a seta de avanço e o marcador, e
é o que dá continuidade visual entre páginas, porque a curva muda de posição
conforme a página avança.

O cabeçalho é utilitário e simétrico: identificação à esquerda, **contador
`3/8`** à direita. Num carrossel de 8 páginas, o contador é o que segura o
leitor — ele sabe onde está e quanto falta.

O título é **sans condensada pesada em caixa alta**, e tem o truque mais
marcante do modelo: um **círculo de cor sólida atrás das primeiras letras**,
como se alguém tivesse marcado a palavra com um carimbo. A letra passa por
cima do círculo em cor escura. É barato de fazer e vale por um logotipo.

O corpo é longo — o modelo original comporta 12 linhas de texto corrido — em
sans regular com boa entrelinha. Este é o layout que mais aceita explicação.

O rodapé traz a assinatura com avatar circular, e um **marcador de página** no
canto inferior direito, sobre a forma.

## Nossa versão

| | |
|---|---|
| Fundo | `--osso` `#EFE9DB` |
| Forma | `--ultramar` `#16256B` |
| Título | `--ultramar-esc` `#0B1238` |
| Carimbo | `--ouro` `#C8A22B` |
| Corpo | `--ultramar-esc` a 80% |
| Título | Fraunces `opsz 144`, `WONK 1`, peso 700, caixa alta, `-.03em` |
| Corpo e cabeçalho | IBM Plex Sans 400 |
| Contador | IBM Plex Mono 500 |

Sem avatar: a nossa assinatura é só o `@` em mono, como nos outros layouts.
Avatar exigiria uma foto de pessoa, e a série não leva nome nem rosto.

O carimbo dourado é o único ouro da peça, e ele conta como o "termo grifado"
da regra de identidade — se o carimbo existe, **não há grifo no texto**.

## Grade

```
padding lateral      92px
cabeçalho            72px do topo, rótulo à esquerda, contador à direita
forma                elipse de 148% da altura do slide, largura 62% da altura,
                     centro em x=104% e y=50%, sangra pela direita
seta                 branca, 56px, sobre a forma, centro vertical
carimbo              círculo de 132px atrás das 2 ou 3 primeiras letras,
                     deslocado 18px para cima e 24px para a esquerda
coluna de texto      largura 58% — a elipse bojuda invade até 65% no centro
                     vertical, e 74% (a medida aparente) encosta nela
assinatura           92px do fundo, à esquerda
marcador             sobre a forma, canto inferior direito
```

## Escala tipográfica

| Elemento | Tamanho | Entrelinha |
|---|---|---|
| cabeçalho / contador | 24px | — |
| pílula da capa | 30px | — |
| título da capa | 92px | 0.96 |
| título interno | 62px | 1 |
| corpo | 30px | 1.5 |
| assinatura | 20px | — |

O corpo aqui é `apoio`, e ele pode ir a **10 linhas**. Nos outros dois layouts
o apoio é curto; aqui ele é o conteúdo. Aproveite: é neste layout que dá para
explicar um atributo inteiro sem espremer.

## A capa

A capa troca o carimbo por uma **pílula**: fundo ouro, texto em ultramarino
escuro, caixa alta, com o número do conjunto — `6 PASSOS`, `AS 4 CAUSAS`,
`7 ATRIBUTOS`. É a promessa que o carrossel vai cumprir, e prometer número na
capa é o que faz a lista funcionar.

Depois da pílula vem o título grande, em até 4 linhas.

## O contador

Obrigatório neste layout, em todas as páginas, formato `3/8`. Numa lista longa
ele não é enfeite: é o que impede o leitor de desistir no meio.

Sai automático do template — não precisa de campo no roteiro.

## O que não fazer

- Não usar `lista` para tema que não é lista. Sem itens numerados o layout
  fica vazio e a forma vira mancha sem função.
- Não colocar carimbo em toda página: ele marca a **primeira palavra do
  título**, uma vez por página, e só se o título tiver 2 palavras ou mais.
- **A marcação `**` tem que abrir a frase.** O carimbo é um círculo atrás das
  primeiras letras; se a marcação cair no meio, o círculo aparece no meio da
  linha e vira mancha. Se o termo-chave não for a primeira palavra, reescreva
  a frase para que seja — ou não marque nada nessa página.
- Não usar carimbo e grifo dourado na mesma página.
- Não deixar o corpo passar de 58% da largura: a elipse é bojuda e invade até
  65% na altura do meio, que é justamente onde o texto está.
- Não repetir a pílula nas internas — ela é exclusiva da capa.
