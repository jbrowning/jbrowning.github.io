import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jbrowning.org',
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
  ]
});
