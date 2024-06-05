import { defineConfig } from 'wxt'
import Solid from 'vite-plugin-solid'

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'Secure Browse',
    short_name: 'Secure Browse',
    permissions: ['management', 'tabs', 'storage'],
    description: 'Extension Manager for Financial Sites',
    homepage_url: 'https://secure-browse.rxliuli.com',
  },
  manifestVersion: 3,
  runner: {
    disabled: true,
  },
  vite: () => ({
    build: {
      target: 'esnext',
    },
    plugins: [Solid()],
    fs: {
      allow: ['../*.json'],
    },
  }),
})
