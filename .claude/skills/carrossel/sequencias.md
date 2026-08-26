# Sequências

Referência para o passo 2 da skill. A estrutura do carrossel não é uma só —
ela vem do **formato do argumento**, não do gosto do dia.

Antes de escrever, olhe o `resumo` do tema no `indice.json` e pergunte: que
tipo de coisa esse tema é? A resposta escolhe a sequência.

---

## A abertura, antes de escolher a sequência

Qualquer que seja o formato, **o carrossel abre com uma pergunta que o leitor
já se fez** — e os slides seguintes a respondem. Não com uma tese enunciada
de cara.

A diferença na prática:

| Não | Sim |
|---|---|
| "Deus não pode pecar." | "Se Deus pode tudo, ele poderia mentir?" |
| "Deus é simples." | "Deus é feito de quê?" |
| "A trindade não é triteísmo." | "Se são três, por que a gente diz um?" |

A tese vira o **fecho**, não a capa. É ela que o leitor ganha por ter chegado
até o fim, e é por isso que ele desliza.

Critérios para a pergunta da capa:

- **Alguém realmente já se perguntou isso.** Se a pergunta só ocorre a quem
  já estudou teologia, ela não é gancho — é sumário.
- **Cabe em uma linha e meia** no display de 104px.
- **A aula responde.** Pergunta que o material não fecha não entra.
- **Sem sensacionalismo.** "Você está orando errado" não é pergunta honesta,
  é isca. O gancho aqui é a curiosidade real, não o susto.

E os slides do meio **explicam**, não enunciam. Cada `frase` deve poder ser
lida como resposta parcial à pergunta da capa; o `apoio` mostra por quê. Slide
que só afirma uma proposição vira verbete de dicionário — e foi exatamente
esse o erro da primeira versão desta série.

---

## 1. Argumento — 5 a 6 slides

O tema é **um raciocínio que se desenvolve**. Um passo depende do anterior.

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | a pergunta que o leitor já se fez |
| 2–5 | `ponto` | um movimento por slide, na ordem em que a aula constrói |
| último | `fecho` | o fechamento que só faz sentido depois dos anteriores |

É o formato padrão. Na dúvida, é ele.
Serve: *onipotência moral*, *a fé não é cega*, *a Bíblia pressupõe Deus*.

---

## 2. Distinção — 5 slides

O tema é **uma palavra que parece dizer uma coisa e diz outra**. Todo o valor
está no deslocamento.

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | a pergunta que o termo levanta |
| 2 | `ponto` | o que quase todo mundo entende por ele |
| 3 | `ponto` | o que ele de fato quer dizer |
| 4 | `ponto` | a consequência de ter entendido errado |
| 5 | `fecho` | a frase que fixa a distinção |

Serve: *Deus é simples*, *Deus não existe — Deus É*, *antropomorfismo*,
*a palavra trindade não aparece na Bíblia*.

---

## 3. Lista — 6 a 8 slides

O tema é **um conjunto nomeado** na própria aula. A capa promete o número e
os slides entregam um item por vez.

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | o número + o que os itens são |
| 2–N | `ponto` | um item por slide, `sobrancelha` com o nome do item |
| último | `fecho` | o que o conjunto inteiro diz |

Regra: se um item não sustenta um slide sozinho, ele não é item — junte ou
corte. Lista com item fraco derruba a série toda.
Serve: *os atributos naturais de Deus*, *as três ordens de prova*,
*as quatro causas de Pedro Lombardo*, *os requisitos para estudar teologia*.

---

## 4. Comparação — 5 a 6 slides

O tema é **duas ou três posições diante da mesma questão**.

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | a questão em que elas divergem |
| 2–4 | `ponto` | uma posição por slide, sempre na mesma estrutura de frase |
| penúltimo | `ponto` | o que está em jogo na escolha |
| último | `fecho` | onde isso deixa o leitor |

A força vem do **paralelismo**: se o slide 2 começa com um verbo, os slides 3
e 4 começam com o mesmo verbo. Quebrar o paralelo mata a comparação.
Serve: *é, contém ou se torna*, *luterana x reformada*,
*teologia racionalista x liberal*.

---

## 5. História — 6 slides

O tema é **uma coisa que aconteceu**, e a surpresa está na data, na ordem ou
na causa.

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | a data ou o fato que desmonta a expectativa |
| 2 | `ponto` | o contexto — o que estava acontecendo |
| 3–5 | `ponto` | a sequência, em ordem cronológica, uma etapa por slide |
| último | `fecho` | o que herdamos daquilo |

Aqui o cuidado com nome próprio e data é máximo: **tudo conferido no ebook**,
sem exceção.
Serve: *a teologia sistemática começou no ano 120*, *Niceia*,
*a doutrina se formou no choque das controvérsias*, *as 95 teses*.

---

## 6. Texto — 5 a 6 slides

O tema **ancora numa passagem** e o ponto de virada está no original ou no
contexto dela.

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | a leitura corrente da passagem |
| 2 | `ponto` | o contexto que quase ninguém traz junto |
| 3 | `texto-biblico` | a passagem, com `fonte` |
| 4 | `ponto` | o que o termo original carrega |
| último | `fecho` | como isso muda a leitura |

O `texto-biblico` entra **uma vez só** por carrossel. Duas passagens em
tela cheia e nenhuma tem peso.
Serve: *pros ton theon*, *esvaziar-se não é perder*,
*a natureza reconheceu — os seus, não*.

---

## O último slide

O `fecho` fecha o argumento e **pede uma coisa só**. Campo `convite`, uma
linha em mono acima da assinatura:

```json
{ "tipo": "fecho", "frase": "...", "convite": "Salve para reler." }
```

- Uma linha, no máximo seis palavras.
- No tom do ensino: *Salve para reler*, *Comente o que ficou de pé*,
  *Envie para quem estuda com você*.
- Nada de "arrasta pra cima", "link na bio", "não perca". Se a frase envergonha
  o professor, ela não entra.
- O `convite` é opcional. Carrossel sem pedido nenhum é melhor que carrossel
  com pedido falso.

A seta `→` do canto inferior direito é automática: aparece em todo slide menos
no último. Não precisa de campo nenhum.

---

## Revisão

Depois de renderizar, mostrar e perguntar **quais slides precisam de ajuste**.

Corrigir **só os slides citados** e renderizar de novo. Não reescrever o
carrossel inteiro por causa de um slide — a série perde a mão quando cada
rodada refaz tudo. Refazer do zero só se a direção mudar de fato.
