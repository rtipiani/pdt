// convert-to-avif.mjs
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = path.join(__dirname, 'public');
const outputExt = '.avif';

function convertPngToAvif(dir) {
  fs.readdirSync(dir).forEach(async file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertPngToAvif(fullPath);
    } else if (file.endsWith('.png')) {
      const outputPath = fullPath.replace('.png', outputExt);
      try {
        await sharp(fullPath)
          .avif({ quality: 50 })
          .toFile(outputPath);
        console.log(`✅ Convertido: ${outputPath}`);
      } catch (err) {
        console.error(`❌ Error al convertir ${file}:`, err);
      }
    }
  });
}

convertPngToAvif(inputDir);
