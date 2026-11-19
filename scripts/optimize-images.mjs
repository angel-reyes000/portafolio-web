/**
 * Convierte imágenes fuente (PNG/JPG) a WebP optimizado dentro de /public/images.
 *
 * Uso:
 *   node scripts/optimize-images.mjs <origen> <destino.webp> [anchoMax]
 *
 * Ejemplo:
 *   node scripts/optimize-images.mjs "~/Desktop/captura.png" public/images/projects/mi-proyecto.webp 1600
 *
 * `sharp` ya viene instalado como dependencia de Next.js.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const [, , input, output, maxWidthArg] = process.argv;

if (!input || !output) {
  console.error("Uso: node scripts/optimize-images.mjs <origen> <destino.webp> [anchoMax]");
  process.exit(1);
}

const maxWidth = Number(maxWidthArg ?? 1600);

await mkdir(path.dirname(output), { recursive: true });

const info = await sharp(input)
  .resize({ width: maxWidth, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(output);

console.log(`${output}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
