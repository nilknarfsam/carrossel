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
De 4 a 6 slides. Estrutura que funciona:

| # | tipo | função |
|---|------|--------|
| 1 | `capa` | a tensão — o que o leitor pensa que sabe |
| 2-4 | `ponto` | o desenvolvimento, um movimento por slide |
| — | `texto-biblico` | opcional, quando a aula ancora num texto |
| último | `fecho` | o fechamento + crédito |

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

O template escurece e dessatura a arte, e o texto fica por cima. Então:

- **Nunca pedir texto, letras ou números na imagem.** Nenhum.
- Pedir textura e atmosfera, não ilustração narrativa: materiais, luz,
  superfícies, formas abstratas. Composição com o peso na metade de cima —
  a de baixo fica coberta pelo véu.
- Ancorar no mundo do assunto: pergaminho, pedra, tinta, tecido, arquitetura,
  paisagem do Oriente Próximo, luz de janela alta.
- **Sem figuras humanas com rosto**, sem representação de Jesus, sem cenas
  bíblicas literais.

Consistência da série: gerar o slide 1 primeiro, revisar, e passar ele como
referência (`--ref`) nos demais, pra paleta e textura não mudarem no meio
do carrossel.

Depois de gerar, **olhar cada imagem** e regerar a que não servir.

## 4. Renderizar

```bash
node render.mjs carrosseis/<slug>/roteiro.json --ambos
```

Sai `slides/` (1080x1440) e `slides-story/` (1080x1920).
Conferir os PNGs — principalmente se alguma frase estourou o slide.
Se estourou, encurtar a frase no roteiro e rodar de novo. Nunca diminuir a
fonte no template: o tamanho do tipo é a identidade da série.

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

- **Nenhum nome de pessoa nos slides.** Nem o do Franklin, nem o do professor.
- A identidade é o **@ do Instagram no rodapé**, em todo slide: campo
  `assinatura` no roteiro, hoje `@samfiledsoak`.
- No `fecho`, o campo `credito` diz **onde o conteúdo foi estudado** — a
  instituição e o curso, não uma pessoa. É o que separa "reescrevi o que
  aprendi" de "inventei".
- A legenda repete a fonte por extenso.

Se um dia o carrossel não vier de um curso (assunto próprio, outro tema),
o `credito` sai e sobra a assinatura.
