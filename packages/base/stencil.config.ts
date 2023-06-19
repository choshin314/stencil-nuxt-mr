import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-json',
      file: 'dist/wc-docs/docs.json',
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      // needed for dev server
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ]
}


