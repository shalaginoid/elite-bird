export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },

  ssr: false,

  modules: ['@nuxt/ui', 'motion-v/nuxt', '@nuxt/image'],

  app: {
    baseURL: '/elite-bird/',
  },

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900],
        styles: ['normal', 'italic'],
      },
    ],
  },

  ui: {
    colorMode: false,
  },

  icon: {
    clientBundle: {
      icons: ['lucide:moon', 'lucide:sun'],
      scan: true,
    },
    serverBundle: false,
  },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', '@vueuse/core'],
    },
  },
});
