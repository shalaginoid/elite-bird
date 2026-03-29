export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },

  modules: ['@nuxt/ui', 'motion-v/nuxt', '@nuxt/image'],

  app: {
    baseURL: '/elite-bird/',
  },

  css: ['~/assets/css/main.css'],

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
});