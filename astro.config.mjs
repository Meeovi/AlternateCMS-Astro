import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';

// https://astro.build/config
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react(), vue(), svelte(), prefetch(), sitemap(), partytown()]
});