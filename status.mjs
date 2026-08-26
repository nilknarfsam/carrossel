#!/usr/bin/env node
/**
 * status.mjs — o que já virou carrossel e o que ainda está na fila.
 *
 *   node status.mjs              # tudo, agrupado por aula
 *   node status.mjs --fila       # só o que falta, por densidade
 *
 * Cruza o indice.json com o que existe em carrosseis/ e saida/. O estado sai
 * do disco, não de um campo que alguém precisa lembrar de atualizar: se os
 * PNGs estão lá, o tema está renderizado, e ponto.
 */
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.dirname(fileURLToPath(import.meta.url));
const soFila = process.argv.includes("--fila");

const indice = JSON.parse(await readFile(path.join(raiz, "indice.json"), "utf8"));

const ESTADOS = {
  entregue:    { rotulo: "entregue",    marca: "■" },
  renderizado: { rotulo: "renderizado", marca: "▣" },
  rascunho:    { rotulo: "rascunho",    marca: "▢" },
  fila:        { rotulo: "fila",        marca: "·" },
};

async function estadoDe(slug) {
  const dir = path.join(raiz, "carrosseis", slug);
  if (!existsSync(path.join(dir, "roteiro.json"))) return "fila";
  const slides = path.join(dir, "slides");
  const temPng = existsSync(slides) &&
    (await readdir(slides)).some(f => f.endsWith(".png"));
  if (!temPng) return "rascunho";
  return existsSync(path.join(raiz, "saida", slug)) ? "entregue" : "renderizado";
}

const linhas = [];
for (const aula of indice.aulas) {
  for (const tema of aula.temas) {
    linhas.push({ aula: aula.modulo, ...tema, estado: await estadoDe(tema.slug) });
  }
}

const contagem = Object.fromEntries(Object.keys(ESTADOS).map(k => [k, 0]));
for (const l of linhas) contagem[l.estado]++;

const pad = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s.padEnd(n));

if (soFila) {
  const fila = linhas
    .filter(l => l.estado === "fila")
    .sort((a, b) => (a.densidade === b.densidade ? 0 : a.densidade === "alta" ? -1 : 1));
  console.log(`\nNa fila — ${fila.length} temas\n`);
  for (const l of fila) {
    console.log(`  ${pad(l.densidade, 6)} ${pad(l.aula, 9)} ${l.titulo}`);
    console.log(`  ${" ".repeat(16)}${l.slug}`);
  }
} else {
  for (const aula of indice.aulas) {
    const doAula = linhas.filter(l => l.aula === aula.modulo);
    const feitos = doAula.filter(l => l.estado !== "fila").length;
    console.log(`\n${aula.modulo}  —  ${feitos}/${doAula.length}`);
    for (const l of doAula) {
      const e = ESTADOS[l.estado];
      console.log(`  ${e.marca} ${pad(e.rotulo, 12)} ${pad(l.densidade, 6)} ${l.titulo}`);
    }
  }
}

const total = linhas.length;
const fora = contagem.fila;
console.log(
  `\n${total} temas · ${contagem.entregue} entregues · ${contagem.renderizado} renderizados` +
  ` · ${contagem.rascunho} em rascunho · ${fora} na fila\n`
);
