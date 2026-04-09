import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'public';
const QUALITY = 28;

const slides = ['slide1.avif', 'slide2.avif', 'slide3.avif'];

async function addSlideVariants() {
    for (const slide of slides) {
        const filePath = path.join(PUBLIC_DIR, slide);
        const buffer = fs.readFileSync(filePath);
        
        console.log(`Generando variante 600w para slide: ${slide}...`);
        
        await sharp(buffer)
            .resize(600)
            .avif({ quality: QUALITY, chromaSubsampling: '4:2:0', effort: 6 })
            .toFile(path.join(PUBLIC_DIR, slide.replace('.avif', '-600w.avif')));
    }
    console.log('Variantes 600w para slides completadas.');
}

addSlideVariants().catch(console.error);
