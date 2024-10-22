import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://jbrowning.org',
  image: {
    service: sharpImageService()
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    preact({ compat: true })
  ]
});
