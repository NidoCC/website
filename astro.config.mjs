// @ts-check
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
    },
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--font-space-mono",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), svelte()],
});
