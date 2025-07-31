import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  components: {
    dirs: [{ path: '~/components', extensions: ['.vue'] }],
  },
  devtools: { enabled: true },
  css: [
    '@/assets/styles/tailwind.css',
    '@/assets/styles/main.css',
    '@/assets/styles/fonts.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@pinia/nuxt'],

  i18n: {
    lazy: false,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'km', language: 'km-KH', name: 'ភាសាខ្មែរ', file: 'km.json' },
    ],
    defaultLocale: 'km',
    vueI18n: 'en',
  },
})
