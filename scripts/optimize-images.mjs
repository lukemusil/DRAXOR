import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "src/assets/images");
const outDir = path.join(root, "public/images");

const jobs = [
  { key: "hero", file: "aframe_cabin_hero_1792270806419.jpg" },
  { key: "aframe", file: "aframe_cabin_50m2_1792420411215.jpg" },
  { key: "srub", file: "modern_srub_50m2_1792420411532.jpg" },
  { key: "timberHouse", file: "modern_timber_house_1788274013170.jpg" },
  { key: "acoustic", file: "acoustic_wood_panels_1788273959651.jpg" },
  { key: "pergola", file: "aluminum_pergola_1787994901750.jpg" },
  { key: "roof", file: "timber_cottage_roof_1788273742830.jpg" },
  { key: "brushed", file: "brushed_wood_texture_1788273998324.jpg" },
  { key: "wood", file: "wood_construction_1787995128643.jpg" },
];

const candidateWidths = [480, 768, 960, 1200, 1440];

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  return `${Math.round(bytes / 1024)} kB`;
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const manifest = {};
const report = [];
let originalTotal = 0;
let generatedTotal = 0;
const generatedByFormat = { avif: 0, webp: 0, jpg: 0 };

for (const job of jobs) {
  const input = path.join(sourceDir, job.file);
  const originalBytes = fs.statSync(input).size;
  originalTotal += originalBytes;
  const meta = await sharp(input).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  const widths = [...new Set(candidateWidths.filter((item) => item < width).concat(width))].sort((a, b) => a - b);

  const asset = { width, height, avif: [], webp: [], jpg: [] };

  for (const target of widths) {
    const pipeline = sharp(input).rotate().resize({ width: target, withoutEnlargement: true });
    const base = `${job.key}-${target}`;

    const avifPath = path.join(outDir, `${base}.avif`);
    const webpPath = path.join(outDir, `${base}.webp`);
    const jpgPath = path.join(outDir, `${base}.jpg`);

    await pipeline.clone().avif({ quality: 50, effort: 4 }).toFile(avifPath);
    await pipeline.clone().webp({ quality: 72 }).toFile(webpPath);
    await pipeline.clone().jpeg({ quality: 72, mozjpeg: true, progressive: true }).toFile(jpgPath);

    for (const format of ["avif", "webp", "jpg"]) {
      const filePath = path.join(outDir, `${base}.${format}`);
      const bytes = fs.statSync(filePath).size;
      generatedTotal += bytes;
      generatedByFormat[format] += bytes;
      asset[format].push({ src: `/images/${base}.${format}`, width: target });
    }
  }

  manifest[job.key] = asset;
  const largestAvif = asset.avif[asset.avif.length - 1];
  const largestAvifBytes = fs.statSync(path.join(outDir, path.basename(largestAvif.src))).size;
  report.push({
    key: job.key,
    file: job.file,
    dimensions: `${width}×${height}`,
    original: originalBytes,
    variants: widths.join(", "),
    largestAvif: largestAvifBytes,
  });
}

const heroInput = path.join(sourceDir, "aframe_cabin_hero_1792270806419.jpg");
await sharp(heroInput)
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 76, mozjpeg: true })
  .toFile(path.join(root, "public/og-image.jpg"));

const iconSvg = fs.readFileSync(path.join(root, "public/favicon.svg"));
await sharp(iconSvg).resize(180, 180).png().toFile(path.join(root, "public/apple-touch-icon.png"));

const lines = [
  "/** Vygenerováno skriptem scripts/optimize-images.mjs. Neupravujte ručně. */",
  `export const images = ${JSON.stringify(manifest, null, 2)} as const;`,
  "",
];
fs.writeFileSync(path.join(root, "src/image-manifest.ts"), lines.join("\n"));

const ogBytes = fs.statSync(path.join(root, "public/og-image.jpg")).size;
const iconBytes = fs.statSync(path.join(root, "public/apple-touch-icon.png")).size;

console.log("\nPůvodní JPEG použité na stránce");
for (const row of report) {
  console.log(
    `${row.key.padEnd(12)} ${row.dimensions.padEnd(12)} ${fmt(row.original).padStart(10)}  → největší AVIF ${fmt(row.largestAvif).padStart(8)}  šířky ${row.variants}`,
  );
}
console.log(`\nSoučet původních JPEG: ${fmt(originalTotal)}`);
console.log(
  `Vygenerované varianty: ${fmt(generatedTotal)} (AVIF ${fmt(generatedByFormat.avif)}, WebP ${fmt(generatedByFormat.webp)}, JPEG ${fmt(generatedByFormat.jpg)})`,
);
console.log(`og-image.jpg ${fmt(ogBytes)}, apple-touch-icon.png ${fmt(iconBytes)}`);

fs.writeFileSync(
  path.join(root, "scripts/image-size-report.json"),
  JSON.stringify(
    {
      originalTotal,
      generatedTotal,
      generatedByFormat,
      ogBytes,
      iconBytes,
      rows: report,
    },
    null,
    2,
  ),
);
