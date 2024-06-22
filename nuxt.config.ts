// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/styles/main.css",
    "element-plus/dist/index.css",
    "~/assets/styles/themes.css",
  ],
  modules: ["@nuxtjs/color-mode"],
  plugins: ["~/plugins/element-plus.ts"],
  components: [
    {
      path: "~/components",
    },
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
});
