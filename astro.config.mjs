// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// ─── FSSAI production guard ───────────────────────────────────────────────────
// Reads src/config.js synchronously at build time.
// Fails the production build if fssai is missing or not 14 digits.
// Does NOT block the dev server.
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'production') {
  try {
    const configSrc = readFileSync(join(__dirname, 'src', 'config.js'), 'utf-8');
    const match = configSrc.match(/fssai\s*:\s*['"]([^'"]*)['"]/);
    const fssai = match ? match[1] : '';
    if (!fssai || !/^\d{14}$/.test(fssai)) {
      console.error('\n❌ FSSAI number missing or invalid.');
      console.error('   Add a 14-digit FSSAI licence number to src/config.js before deploying.\n');
      process.exit(1);
    }
  } catch (e) {
    console.error('\n❌ Could not read src/config.js to validate FSSAI number.\n');
    process.exit(1);
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://teareserve.in', // TODO: update with your real domain

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
  ],
});