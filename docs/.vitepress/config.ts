import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Secure Browse',
  description: 'Extension Manager for Financial Sites',
  themeConfig: {
    logo: '/icon.png',
    nav: [
      {
        text: 'Privacy Policy',
        link: '/privacy',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/rxliuli/secure-browse',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 rxliuli',
    },
  },
})
