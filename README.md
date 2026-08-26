# Carrossel de ensino — kit

Pipeline: transcrições `.md` → índice de temas → roteiro → artes (Codex/gpt-image-2) → PNGs.

## Estrutura

```
seu-projeto/
├── base_docs/<curso>/        ← transcrições .md + o ebook em PDF
├── indice.json               ← gerado pela skill indexar-aulas
├── carrosseis/
│   └── <slug>/
│       ├── roteiro.json
│       ├── assets/           ← fundos gerados
│       ├── slides/           ← 1080x1440
│       ├── slides-story/     ← 1080x1920
│       └── legenda.txt
├── saida/<slug>/             ← entrega pronta pro Google Drive
├── template.html
├── render.mjs
├── exportar.mjs
├── status.mjs
└── .claude/skills/
    ├── indexar-aulas/SKILL.md
    └── carrossel/SKILL.md
```

## Instalação

```bash
npm i playwright
npx playwright install chromium
```

Copie `skills/` para `.claude/skills/` do seu projeto.

## Uso

```
> indexar as aulas
> faz um carrossel sobre aliança
```

Depois de renderizar, `node exportar.mjs <slug>` monta a pasta de entrega em
`saida/<slug>/`, e `node status.mjs` mostra o que já saiu e o que falta.

Ou renderizar direto, sem passar pelo Claude:

```bash
node render.mjs carrosseis/<slug>/roteiro.json --ambos
```

## Teste rápido

Crie `carrosseis/teste/` e copie `roteiro.exemplo.json` como `roteiro.json`.
Rode o render sem gerar nenhuma arte — os slides saem no ultramarino chapado,
que é o suficiente pra você validar tipografia e espaçamento antes de gastar
geração de imagem.

## A identidade visual

**Cores.** Ultramarino profundo (`#16256B`) como base — o pigmento que nos
manuscritos era reservado às passagens que importavam. Osso (`#EFE9DB`) no
texto. Ouro (`#C8A22B`) restrito a três lugares: a sobrancelha, o grifo do
termo-chave e a marca de posição na trilha. Se o ouro aparecer num quarto
lugar, ele deixa de significar "isto aqui é o ponto".

**Tipos.** Fraunces no display, com os eixos SOFT e WONK ligados — é o que
dá o desalinho de tipo desenhado à mão, em vez do serifado neutro. IBM Plex
Sans no apoio, IBM Plex Mono nas referências. A distinção é proposital: o
argumento é fala transcrita, a referência é dado. Fontes diferentes porque
são naturezas diferentes de texto.

**A assinatura: a trilha de proveniência.** A coluna fina na esquerda, com o
módulo em vertical e a marca dourada avançando a cada slide. Ela não é
decoração nem barra de progresso — é a afirmação de que todo slide vem de
uma aula real, com origem rastreável. É o mesmo princípio do campo `origem`
no roteiro, só que visível pra quem lê.

**A assinatura no rodapé.** O `@` do Instagram em mono, no canto inferior
esquerdo, no mesmo peso do marcador de posição no canto oposto. É a única
atribuição que entra no slide — nenhum nome de pessoa, de instituição ou de
curso. O rastro de origem existe no campo `origem` do roteiro, que é controle
de fidelidade de quem produz, não crédito de quem lê.

**A arte é dirigida.** `arte.md`, dentro da skill, traz a fórmula de prompt em
seis blocos, o parágrafo de DNA que mantém a série coesa e a tabela que traduz
argumento em objeto. A regra que resume: não desenhe a frase, desenhe a coisa
com que a frase pensa.

**A regra que não se quebra:** texto vive no template, nunca na imagem
generativa. A arte entra escurecida e dessaturada, como atmosfera atrás do
argumento.
