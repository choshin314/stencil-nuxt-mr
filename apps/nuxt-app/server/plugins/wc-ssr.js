import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import { renderToString } from  '@choshin524/components/dist/hydrate'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', async (response) => {
    const render = await renderToString(response.body);
    response.body = render.html
  })
});