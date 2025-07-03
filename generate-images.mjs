// generate-images.mjs
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [355, 852, 1278, 1680, 2000, 2268];
const inputDir = './public/';
const outputDir = './public/';

const images = ['slide1.png', 'slide2.png', 'slide3.png'];

images.forEach((imageName) => {
  const inputPath = path.join(inputDir, imageName);

  sizes.forEach((size) => {
    const outputFileName = imageName.replace('.png', `-${size}w.png`);
    const outputPath = path.join(outputDir, outputFileName);

    sharp(inputPath)
      .resize({ width: size })
      .toFile(outputPath)
      .then(() => console.log(`✅ ${outputFileName} creado`))
      .catch((err) => console.error(`❌ Error con ${outputFileName}:`, err));
  });
});