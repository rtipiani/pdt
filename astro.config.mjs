// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({}),
    site: 'https://pdtperuviantravel.com.pe',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        }
    },
    integrations: [sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date()
    })],
    vite: {
        plugins: [tailwindcss()],
    },
});
