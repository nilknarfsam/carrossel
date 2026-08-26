#!/usr/bin/env node
/**
 * exportar.mjs — monta a pasta de saída pronta pra subir no Google Drive.
 *
 *   node exportar.mjs <slug>     # exporta um carrossel
 *   node exportar.mjs --todos    # exporta todos os que já foram renderizados
 *
 * Sai em saida/<slug>/ com os PNGs renomeados (o nome do arquivo carrega o
 * slug, pra não virar um monte de "01.png" indistinguível dentro do Drive)
 * e um LEIA-ME.txt com tema, créditos e a origem de cada slide.
 */
import { readFile, writeFile, mkdir, readdir, copyFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

const alvos = args.includes("--todos")
  ? (await readdir(path.join(raiz, "carrosseis"), { withFileTypes: true }))
      .filter(d => d.isDirectory()).map(d => d.name)
  : args.filter(a => !a.startsWith("--"));

if (!alvos.length) {
  console.error("uso: node exportar.mjs <slug> | --todos");
  process.exit(1);
}

for (const slug of alvos) {
  const orig = path.join(raiz, "carrosseis", slug);
  if (!existsSync(path.join(orig, "roteiro.json"))) {
    console.warn(`  ! ${slug}: sem roteiro.json, pulando`);
    continue;
  }
  const roteiro = JSON.parse(await readFile(path.join(orig, "roteiro.json"), "utf8"));
  const dest = path.join(raiz, "saida", slug);

  // exportação é idempotente: refaz a pasta do zero a cada rodada
  await rm(dest, { recursive: true, force: true });

  let total = 0;
  for (const [pasta, nome] of [["slides", "feed"], ["slides-story", "story"]]) {
    const de = path.join(orig, pasta);
    if (!existsSync(de)) continue;
    const para = path.join(dest, nome);
    await mkdir(para, { recursive: true });
    for (const f of (await readdir(de)).filter(f => f.endsWith(".png")).sort()) {
      await copyFile(path.join(de, f), path.join(para, `${slug}-${nome}-${f}`));
      total++;
    }
  }

  if (!total) {
    console.warn(`  ! ${slug}: nada renderizado ainda — rode o render.mjs antes`);
    await rm(dest, { recursive: true, force: true });
    continue;
  }

  const legenda = path.join(orig, "legenda.txt");
  if (existsSync(legenda)) await copyFile(legenda, path.join(dest, "legenda.txt"));

  const origens = roteiro.slides
    .map((s, i) => `  ${String(i + 1).padStart(2, "0")}  ${s.tipo.padEnd(14)} ${s.origem ?? "(sem origem)"}`)
    .join("\n");

  await writeFile(path.join(dest, "LEIA-ME.txt"), [
    roteiro.tema ?? slug,
    "=".repeat((roteiro.tema ?? slug).length),
    "",
    `Série:   ${roteiro.serie ?? "—"}`,
    `Módulo:  ${roteiro.modulo ?? "—"}`,
    `Slides:  ${roteiro.slides.length}`,
    "",
    "Formatos:",
    "  feed/   1080x1440  — post do Instagram",
    "  story/  1080x1920  — story",
    "",
    "Ordem de publicação: a numeração do arquivo é a ordem dos slides.",
    "",
    "Origem de cada slide (para conferir fidelidade à aula antes de publicar):",
    origens,
    "",
  ].join("\n"), "utf8");

  console.log(`  ✓ saida/${slug}/ — ${total} imagens`);
}
