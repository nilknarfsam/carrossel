---
name: indexar-aulas
description: Lê as transcrições em ./base_docs/**/*.md e monta o indice.json com os temas extraíveis de cada aula. Rodar uma vez, e de novo só quando entrarem aulas novas. Palavras-gatilho: indexar aulas, atualizar índice, que temas tem nas aulas.
allowed-tools: Read, Write, Glob, Bash(ls:*), Bash(wc:*), Bash(grep:*)
---

# Indexar aulas

O objetivo é nunca mais precisar carregar todas as transcrições no contexto.
Depois deste passo, cada carrossel lê só o `indice.json` e a aula específica.

## Passos

1. Varrer `base_docs/**/*.md` (Glob) e comparar com o `indice.json` existente (se houver).
   **Só processar aulas ainda não indexadas** — não reprocessar o que já está lá.

2. Para cada aula nova, ler o arquivo inteiro e extrair de 3 a 8 temas.
   Um tema entra no índice se atender aos três critérios:
   - o professor **desenvolve** o ponto (não só menciona de passagem);
   - dá pra sustentar 4 a 6 slides sem esticar o conteúdo;
   - tem um ponto de virada — algo que o leitor provavelmente não sabia,
     ou sabia de um jeito raso.

   Tema que não passa nos três fica de fora. Índice curto e bom vale mais
   que índice grande.

3. Gravar `indice.json`:

```json
{
  "atualizado": "2026-08-26",
  "aulas": [
    {
      "arquivo": "base_docs/01 Introdução a Teologia/Aula 07 - ....md",
      "curso": "Introdução à Teologia · Básico",
      "modulo": "Aula 07",
      "professor": "",
      "temas": [
        {
          "titulo": "A aliança como estrutura da narrativa bíblica",
          "slug": "alianca-estrutura-narrativa",
          "resumo": "Uma frase sobre o argumento central.",
          "linhas": "42-160",
          "densidade": "alta",
          "usado": false
        }
      ]
    }
  ]
}
```

- `linhas`: onde o tema está na transcrição. É o que permite abrir só o
  trecho certo depois, em vez da aula inteira.
- `densidade`: `alta` / `média` — quanto material de apoio existe.
- `usado`: vira `true` quando o carrossel daquele tema for gerado.

4. Ao terminar, reportar quantos temas entraram, quantas aulas foram lidas,
   e listar os 5 temas de maior densidade ainda com `usado: false`.

## Campo do professor

Se a transcrição identificar quem deu a aula, preencher `professor`.
Se não identificar, deixar vazio e avisar — o crédito no slide de fecho
depende disso.

## Onde estão as aulas

As transcrições ficam em `base_docs/<NN Nome do curso>/*.md`, uma pasta por
curso. O nome da pasta é o curso; o nome do arquivo carrega o número da aula.
PDFs de apoio (ebooks) ficam na mesma pasta e **não** entram no índice.

Arquivos terminados em `_2.md` são continuação/duplicata da mesma aula —
conferir antes de indexar, para não criar tema repetido.
