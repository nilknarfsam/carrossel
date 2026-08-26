# carrossel — kit de carrosséis de ensino

Pipeline: transcrições em `base_docs/` → `indice.json` → `carrosseis/<slug>/roteiro.json`
→ artes → PNGs 1080x1440 (feed) e 1080x1920 (story).

## Onde fica o quê

- `base_docs/<NN Curso>/*.md` — transcrições das aulas (uma pasta por curso).
  Não editar; é a fonte.
- `indice.json` — índice de temas, gerado pela skill `indexar-aulas`.
- `carrosseis/<slug>/` — roteiro, assets, slides e legenda de cada carrossel.
- `template.html` + `render.mjs` — a identidade visual e o renderizador.
- `.claude/skills/` — as duas skills do fluxo.

## Skills

- **indexar-aulas** — varre `base_docs/**/*.md` e monta o `indice.json`.
  Rodar de novo só quando entrarem aulas novas.
- **carrossel** — tema → roteiro → artes → PNGs. O roteiro é aprovado
  antes de gastar geração de imagem.

## Renderizar

```bash
node render.mjs carrosseis/<slug>/roteiro.json --ambos
```

Slide sem arte renderiza no ultramarino chapado — isso é um resultado
válido, serve pra validar tipografia antes de gerar imagem.

## Regras da identidade (não negociáveis)

- Texto vive no template, **nunca** na imagem generativa.
- Ouro (`#C8A22B`) só em três lugares: sobrancelha, termo grifado, marca da trilha.
- Frase estourou o slide? Encurtar a frase — nunca diminuir a fonte.
- Campo `origem` obrigatório em todo slide (arquivo + linhas da transcrição).
- **Nenhum nome nos slides** — nem pessoa, nem instituição, nem curso. A única
  atribuição é o `@` do Instagram no rodapé (`assinatura` no roteiro, hoje
  `@samfiledsoak`). O `credito` do fecho fica vazio salvo pedido explícito.
- A arte de cada slide é dirigida, não decorativa: ver
  `.claude/skills/carrossel/arte.md`.
- Nome próprio, data, termo técnico e referência bíblica se conferem no **ebook
  em PDF** do curso antes de virar slide — a transcrição é ASR e erra grafia.

## Entregar (pasta pro Google Drive)

```bash
node exportar.mjs <slug>      # ou --todos
```

Monta `saida/<slug>/` com `feed/` (1080x1440), `story/` (1080x1920),
`legenda.txt` e `LEIA-ME.txt`. Os PNGs saem renomeados com o slug, pra não
virarem um monte de `01.png` indistinguível dentro do Drive. A pasta `saida/`
não vai pro git — ela é a entrega, não o código.

## Acompanhar o que já saiu

```bash
node status.mjs
```

Cruza o `indice.json` com as pastas em `carrosseis/` e mostra, por aula, o que
já virou carrossel, o que está em rascunho e o que ainda está na fila.
