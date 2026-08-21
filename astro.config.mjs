// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deploy target. For GitHub Pages project site: site = user page, base = repo name.
// When you attach a custom domain (served at root): set site to the domain and base to "/".
const SITE = 'https://keenohte.github.io';
const BASE = '/portfolio';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [mdx(), sitemap()],
});
