/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  semi: true,
  useTabs: false,

  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
