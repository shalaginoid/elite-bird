export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  app: {
    baseURL: '/elite-bird/',
  },

  ssr: false,

  // nitro: {
  //   preset: 'github-pages',
  // },
});
