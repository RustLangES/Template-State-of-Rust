import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "it"],
    fallback: {
      es: "en",
      it: "en",
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind()]
});