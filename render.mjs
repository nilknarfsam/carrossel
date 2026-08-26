#!/usr/bin/env node
/**
 * render.mjs — roteiro.json -> PNGs prontos pro Instagram
 *
 *   node render.mjs carrosseis/<slug>/roteiro.json            # feed 1080x1440
 *   node render.mjs carrosseis/<slug>/roteiro.json --story     # story 1080x1920
 *   node render.mjs carrosseis/<slug>/roteiro.json --ambos
 *
 * Requer: npm i playwright && npx playwright install chromium
 */
import { chromium } from "playwright";
import { readFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE = path.join(__dirname, "template.html");

const args = process.argv.slice(2);
const roteiroPath = args.find(a => !a.startsWith("--"));
if (!roteiroPath) {
  console.error("uso: node render.mjs <caminho/roteiro.json> [--story|--ambos]");
  process.exit(1);
}

const formatos = args.includes("--ambos") ? ["feed", "story"]
               : args.includes("--story") ? ["story"]
               : ["feed"];

const DIMS = { feed: { w: 1080, h: 1440 }, story: { w: 1080, h: 1920 } };

const base = path.dirname(path.resolve(roteiroPath));
const roteiro = JSON.parse(await readFile(roteiroPath, "utf8"));

/* Resolve a arte de cada slide para file:// absoluto. Slide sem arte renderiza
   no ultramarino chapado — o que é um resultado válido, não um erro. */
for (const s of roteiro.slides) {
  if (!s.arte) continue;
  const abs = path.resolve(base, s.arte);
  if (existsSync(abs)) {
    s.arte = pathToFileURL(abs).href;
  } else {
    console.warn(`  ! arte não encontrada, seguindo sem ela: ${s.arte}`);
    delete s.arte;
  }
}

const browser = await chromium.launch();

for (const formato of formatos) {
  const { w, h } = DIMS[formato];
  const outDir = path.join(base, formato === "feed" ? "slides" : "slides-story");
  await mkdir(outDir, { recursive: true });

  const page = await browser.newPage({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
  });

  // o roteiro precisa existir ANTES do script do template rodar
  await page.addInitScript(r => { window.ROTEIRO = r; }, { ...roteiro, formato });
  await page.goto(pathToFileURL(TEMPLATE).href, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);

  const slides = await page.$$(".slide");
  if (!slides.length) throw new Error("nenhum slide renderizado — confira o roteiro.json");

  for (let i = 0; i < slides.length; i++) {
    const nome = `${String(i + 1).padStart(2, "0")}.png`;
    await slides[i].screenshot({ path: path.join(outDir, nome) });
    console.log(`  ✓ ${formato}/${nome}`);
  }
  await page.close();
}

await browser.close();

const feitos = await readdir(path.join(base, "slides")).catch(() => []);
console.log(`\n${feitos.length} slides em ${base}/slides/`);
