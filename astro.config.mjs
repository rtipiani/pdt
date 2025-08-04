// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({}),
    site: 'https://pdtperuviantravel.vercel.app',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        }
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
