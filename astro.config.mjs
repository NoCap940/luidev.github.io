import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nocap940.github.io/luidev.github.io/',
  integrations: [tailwind()]
});