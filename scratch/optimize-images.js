import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'public';
const QUALITY = 28; // Calidad ultra-agresiva para satisfacer a Lighthouse (28)

const files = fs.readdirSync(PUBLIC_DIR).filter(file => file.endsWith('.avif'));

async function optimizeImages() {
    for (const file of files) {
        if (file.startsWith('tmp_') || file === 'test-q30.avif') continue;

        const filePath = path.join(PUBLIC_DIR, file);
        const buffer = fs.readFileSync(filePath);
        
        console.log(`Optimizando ULTRA-agresivamente: ${file}...`);
        
        // Re-comprimir original y variantes existentes
        await sharp(buffer)
            .avif({ quality: QUALITY, chromaSubsampling: '4:2:0', effort: 6 })
            .toFile(path.join(PUBLIC_DIR, `tmp_${file}`));
        
        fs.renameSync(path.join(PUBLIC_DIR, `tmp_${file}`), filePath);

        // Generar variantes para paquetes si no existen
        const isVariant = file.match(/-\d+w\.avif$/);
        const isFixedAsset = file.startsWith('android') || file.startsWith('apple') || file.startsWith('favicon') || file === 'og-image.png';

        if (!isVariant && !isFixedAsset && !file.startsWith('slide')) {
            console.log(`Generando variantes de 400w, 600w, 800w para: ${file}...`);
            
            // 400w
            await sharp(buffer)
                .resize(400)
                .avif({ quality: QUALITY, chromaSubsampling: '4:2:0', effort: 6 })
                .toFile(path.join(PUBLIC_DIR, file.replace('.avif', '-400w.avif')));

            // 600w
            await sharp(buffer)
                .resize(600)
                .avif({ quality: QUALITY, chromaSubsampling: '4:2:0', effort: 6 })
                .toFile(path.join(PUBLIC_DIR, file.replace('.avif', '-600w.avif')));

            // 800w
            await sharp(buffer)
                .resize(800)
                .avif({ quality: QUALITY, chromaSubsampling: '4:2:0', effort: 6 })
                .toFile(path.join(PUBLIC_DIR, file.replace('.avif', '-800w.avif')));
        }
    }
    console.log('Optimización ULTRA-agresiva completada.');
}

optimizeImages().catch(console.error);
