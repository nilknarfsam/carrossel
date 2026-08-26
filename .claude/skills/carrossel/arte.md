# Direção de arte

Referência para o passo 3 da skill. Ler antes de escrever qualquer prompt.

## O que a arte precisa aguentar

O template não mostra a imagem — ele a enterra. Vale conferir no
`template.html`, porque é daqui que sai toda regra abaixo:

```css
.arte { opacity:.30; filter:saturate(.35) contrast(1.05); }
.veu  { linear-gradient(to bottom,
          rgba(11,18,56,.55) 0%,    /* topo: meio velado   */
          rgba(11,18,56,.20) 38%,   /* a janela            */
          rgba(11,18,56,.88) 78%,   /* o texto começa aqui */
          rgba(11,18,56,.97) 100%); /* fundo: quase opaco  */
}
```

Quatro consequências, e elas não são negociáveis:

1. **Cor não sobrevive.** 30% de opacidade e 35% de saturação sobre
   ultramarino chapado. O que chega no slide é valor — claro contra escuro.
   Peça imagem de estrutura tonal forte, não de paleta bonita.
2. **A janela fica em 38% da altura.** É a única faixa onde a imagem
   respira. O sujeito vai ali. O terço inferior é território do texto:
   qualquer coisa desenhada abaixo de 60% é trabalho jogado fora.
3. **Na capa, o texto sobe pro meio.** O `.corpo` da capa é centrado, não
   alinhado embaixo — então o sujeito não pode ficar no centro-esquerda, onde
   o título vai cair. Empurre a massa pra direita do centro ou pro alto.
4. **Detalhe fino morre.** Textura microscópica, ornamento, rendilhado —
   tudo vira ruído cinza. A imagem precisa ler como **uma silhueta só**,
   à distância de um braço.

## A fórmula do prompt

Seis blocos, sempre nesta ordem. Prompt sem um dos blocos sai genérico.

| # | Bloco | O que decide |
|---|-------|--------------|
| 1 | **Sujeito** | um objeto concreto que carrega o conceito do slide |
| 2 | **Material** | pedra, bronze, gesso, linho, cera, madeira, vidro fosco |
| 3 | **Luz** | direção, dureza e fonte — é o que dá o valor |
| 4 | **Composição** | enquadramento, onde está a massa, onde está o vazio |
| 5 | **Tratamento** | linguagem de lente e acabamento |
| 6 | **Negativos** | o que não pode aparecer |

## O DNA da série

Este parágrafo entra em **todo** prompt do mesmo carrossel, sem alterar uma
palavra. É ele que faz seis imagens parecerem um conjunto e não seis buscas
diferentes num banco de imagem:

> Fotografia de estúdio em formato retrato 3:4. Uma única fonte de luz dura
> vindo da esquerda alta, como janela alta de pedra; sombra longa e definida.
> Paleta quase monocromática de pedra e osso — cinzas quentes, areia, um
> único acento escuro. Fundo liso, sem cenário. Massa concentrada na metade
> superior do quadro, o terço inferior vazio e escuro. Foco nítido no sujeito,
> profundidade rasa. Acabamento fosco, sem brilho especular, sem reflexo
> espelhado. Grão fino de filme.

## Traduzir o argumento em objeto

A regra que separa peça dirigida de ilustração de banco: **não desenhe a
frase — desenhe a coisa com que a frase pensa.** Metonímia, não legenda.

| O slide argumenta | A imagem mostra |
|---|---|
| uma definição, um limite | a forma que delimita: aresta, moldura, borda de pedra |
| origem, primeiro, fonte | o bruto antes do corte: bloco, veio, matéria não trabalhada |
| dependência, composição | junta, encaixe, argamassa, costura, o ponto onde duas peças se tocam |
| unidade, indivisível | monólito, peça inteiriça, superfície sem junta |
| revelação, o que se mostra | luz entrando: fresta, trapézio de luz no chão, véu levantado |
| autoridade, o que não se dobra | prumo, coluna aprumada, contrapeso, bigorna |
| tempo, história, transmissão | camada, sedimento, marca de uso, pátina |
| erro, desvio | a linha que sai do esquadro — sutil, uma só |

Se o conceito não couber em nenhuma família, a imagem provavelmente está
tentando ilustrar em vez de sustentar. Volte para a frase.

## O que nunca entra

- **Texto, letra, número, glifo, símbolo escrito.** Nenhum. Nem "ilegível".
- **Rosto humano.** Mão ou vulto distante, se a composição pedir; rosto não.
- **Representação de Jesus** e cena bíblica literal.
- **Clichê evangélico:** cruz em contraluz, pomba, Bíblia aberta com luz
  divina, mãos postas em prece, raio de sol entre nuvens.
- **Lixo de prompt:** "cinematic", "8k", "hyperrealistic", "trending on
  artstation", "masterpiece". Não dirigem nada e puxam a saída pro genérico.
- Render 3D com aspecto de CGI, lens flare, vinheta pesada, HDR.

## Consistência da série

Gerar o **slide 1 primeiro** e olhar. Só depois de aprovado, gerar os
demais — com o DNA idêntico e citando o arquivo do slide 1 como referência
de luz e material no prompt. Se o slide 1 não estiver certo, nenhum estará.

## Checklist antes de aceitar uma imagem

1. Aperte os olhos: lê como **uma** forma, ou virou sopa?
2. A massa está na metade de cima?
3. Tem letra, número ou marca d'água em algum canto? Rejeita.
4. Colocada no template a 30% de opacidade, ainda dá pra perceber o que ela é?
   Na dúvida, renderizar e olhar — é barato, a geração é que não é.
5. Ao lado das outras cinco, parece a mesma sessão de fotos?
