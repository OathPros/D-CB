import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oathpros.github.io',
  base: '/D-CB',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
