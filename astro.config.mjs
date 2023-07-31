import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import compress from 'astro-compress';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  site: "https://vonkprogramming.nl",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
		compress({
			css: false,
			js: false,
			png: true,
			jpg: true,
			webp: true,
			svg: true,
		}),
		compressor({
			gzip: true,
			brotli: false,
		}),
  ],
});
