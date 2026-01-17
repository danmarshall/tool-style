import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // Configuration for the Astro template
  integrations: [react()]
});
