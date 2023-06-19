// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    plugins: ['plugins/wc-ssr.js']
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => /st-.+/.test(tag),
    },
  },
})
