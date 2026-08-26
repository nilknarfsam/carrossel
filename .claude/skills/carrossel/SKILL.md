---
name: carrossel
description: Gera um carrossel de ensino pro Instagram a partir de um tema do indice.json — roteiro, artes pelo Codex/gpt-image-2 e PNGs finais. Palavras-gatilho: fazer carrossel, gerar post, criar carrossel sobre.
allowed-tools: Read, Write, Glob, Bash(codex:*), Bash(node:*), Bash(mkdir:*), Bash(ls:*), Bash(pwd:*), Bash(find:*)
---

# Carrossel de ensino

Pipeline: **tema → roteiro → artes → PNGs**. Cada etapa fecha antes da
seguinte começar, e o roteiro é aprovado pelo Franklin antes de gastar
geração de imagem.

## 1. Escolher o tema

Ler `indice.json`. Se o Franklin nomeou o tema, achar o slug correspondente.
Se ele só disse "faz um carrossel", sugerir 3 temas com `usado: false` e
maior densidade, e esperar a escolha.

Abrir **só as linhas indicadas** da transcrição, não a aula inteira.

## 2. Escrever o roteiro

Gravar `carrosseis/<slug>/roteiro.json` no formato de `roteiro.exemplo.json`.
De 4 a 8 slides, conforme a sequência.

**Escolher a sequência antes de escrever a primeira frase.** A estrutura vem
do formato do argumento, não do gosto do dia — as seis estão em
[sequencias.md](sequencias.md), com o tipo de tema que cada uma serve:

| Sequência | Quando o tema é |
|---|---|
| **Argumento** | um raciocínio que se desenvolve (padrão) |
| **Distinção** | uma palavra que parece dizer uma coisa e diz outra |
| **Lista** | um conjunto nomeado pela própria aula |
| **Comparação** | duas ou três posições diante da mesma questão |
| **História** | uma coisa que aconteceu, e a data ou a ordem surpreende |
| **Texto** | uma passagem cujo original ou contexto vira a chave |

O `fecho` pode levar um campo `convite` — uma linha pedindo **uma** coisa.
A seta `→` de avanço é automática e some no último slide.

Regras de escrita:

- **Um movimento por slide.** Se o slide tem duas ideias, são dois slides.
- `frase` é curta e carrega o argumento sozinha — no máximo duas linhas.
  Use `**asteriscos**` no termo que merece o grifo dourado, um por slide.
- `apoio` é o que sustenta a frase. Máximo ~2 linhas de texto corrido.
- Termo técnico (grego, hebraico, nome de doutrina) sempre vem explicado
  na mesma tela em que aparece.
- Escrever no português do ensino, não no do marketing. Sem "você não vai
  acreditar", sem "a verdade que ninguém te contou", sem emoji no slide.
- **Campo `origem` é obrigatório em todo slide**: arquivo e linhas da
  transcrição que originaram aquele slide. É por ele que o Franklin confere
  fidelidade antes de publicar.
- Se algum slide precisar de uma afirmação que a aula não sustenta:
  não inventar. Cortar o slide ou avisar que aquele ponto ficou fora.

### Conferir antes de escrever

As transcrições são ASR e erram feio em nome próprio, data e citação
("Inisseia" = Niceia, "ao gusto estronde" = Augustus Strong). O argumento da
aula é confiável; a grafia não.

Cada curso tem o **ebook em PDF** na mesma pasta da transcrição, e é ele que
manda. Antes de escrever o roteiro:

```bash
pdftotext -layout -enc UTF-8 "base_docs/<curso>/<ebook>.pdf" ebook.txt
grep -n -i "<termo>" ebook.txt
```

Todo nome próprio, data, termo técnico e referência bíblica que for para um
slide precisa aparecer no ebook com essa grafia. O que só existe na
transcrição entra como argumento, nunca como citação literal.

Referência bíblica que o professor não citou e o ebook não traz: ou fica de
fora, ou vai para o Franklin conferir na tradução dele antes de renderizar.

Mostrar o roteiro no chat e **esperar aprovação** antes de seguir.

## 3. Gerar as artes

Uma arte por slide, em `carrosseis/<slug>/assets/`.

```bash
mkdir -p carrosseis/<slug>/assets
codex exec -C "$(pwd)" -s workspace-write --skip-git-repo-check \
  "Use a ferramenta de geração de imagem para gerar: <PROMPT>. \
   Formato retrato 3:4. Salve como ./carrosseis/<slug>/assets/01-fundo.png"
```

**Ler [arte.md](arte.md) antes de escrever o primeiro prompt.** Ele traz a
fórmula de seis blocos, o parágrafo de DNA que mantém a série coesa, a tabela
que traduz argumento em objeto e o checklist de aceitação.

O resumo, que não substitui a leitura:

- Cada imagem tem **um sujeito concreto**, escolhido pelo que o slide
  argumenta. Metonímia, não legenda: desenhe a coisa com que a frase pensa,
  não a frase.
- O template mata cor e detalhe fino. O que sobrevive é **valor** e
  **silhueta**, e só na faixa dos 38% de altura. Massa na metade de cima.
- **Nunca pedir texto, letras ou números.** Nenhum.
- **Sem rosto humano**, sem representação de Jesus, sem cena bíblica literal,
  sem clichê evangélico (cruz em contraluz, pomba, Bíblia aberta iluminada).

Gerar o **slide 1 primeiro** e olhar antes de seguir. O DNA da série é o
mesmo parágrafo colado em todos os seis prompts — é ele que segura a unidade.

Depois de gerar, **olhar cada imagem** e regerar a que não passar no
checklist do `arte.md`.

## 4. Renderizar

```bash
node render.mjs carrosseis/<slug>/roteiro.json
```

Sai `slides/` (1080x1440), que é o formato do feed. **Story não se gera por
padrão** — só quando o Franklin pedir, e aí é `--story` ou `--ambos`.
Conferir os PNGs — principalmente se alguma frase estourou o slide.
Se estourou, encurtar a frase no roteiro e rodar de novo. Nunca diminuir a
fonte no template: o tamanho do tipo é a identidade da série.

Mostrar os slides e perguntar **quais precisam de ajuste**. Corrigir só os
citados e renderizar de novo — não reescrever o carrossel inteiro por causa de
um slide. Refazer do zero só se a direção mudar de fato.

## 5. Fechar

- Gravar `legenda.txt`: abertura que puxa pro carrossel, o desenvolvimento
  em texto corrido, o crédito ao professor e ao curso, e as hashtags.
- Marcar `usado: true` no tema dentro do `indice.json`.
- Montar a pasta de entrega:

```bash
node exportar.mjs <slug>
```

  Sai em `saida/<slug>/` com `feed/`, `story/`, `legenda.txt` e um
  `LEIA-ME.txt` com tema, créditos e a origem de cada slide. É essa pasta
  que o Franklin sobe no Google Drive.

- Reportar o caminho dos arquivos.

## Autoria e assinatura

O autor do carrossel é o Franklin: ele estudou o curso e está reescrevendo o
conteúdo mastigado para quem não vai assistir sete aulas. Não é uma citação
de professor — é ensino de segunda mão, assumido como tal.

- **Nenhum nome nos slides.** Nem de pessoa, nem de instituição, nem de curso.
- A identidade é o **@ do Instagram no rodapé**, em todo slide: campo
  `assinatura` no roteiro, hoje `@samfiledsoak`. É a única atribuição.
- O campo `credito` do `fecho` fica **vazio por padrão** — o fecho é a frase
  e mais nada. Ele existe no template para o dia em que um carrossel precisar
  creditar alguma fonte, e só entra se o Franklin pedir.
- A legenda também não cita curso nem instituição.

A rastreabilidade continua existindo onde ela serve para o trabalho: o campo
`origem` de cada slide, que aponta arquivo e linhas da transcrição. Isso é
controle interno de fidelidade, não crédito público — nunca vai para o slide
nem para a legenda.
