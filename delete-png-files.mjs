// delete-png-files.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetDir = path.join(__dirname, 'public'); // Cambia si es necesario

function deletePngFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      deletePngFiles(fullPath); // Recurse
    } else if (file.endsWith('.png')) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Eliminado: ${fullPath}`);
      } catch (err) {
        console.error(`❌ Error al eliminar ${file}:`, err);
      }
    }
  });
}

deletePngFiles(targetDir);
