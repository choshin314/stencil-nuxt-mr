import { applyPolyfills, defineCustomElements } from '@choshin524/components/loader'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use({
    async install() {
      applyPolyfills().then(defineCustomElements)
    }
  })
})
