import { defineEcConfig } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  themes: ["dark-plus"],
  styleOverrides: {
    codeFontFamily: "var(--font-mono)",
    uiFontFamily: "var(--font-sans)",
  },
});
