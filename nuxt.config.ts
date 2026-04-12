import smtp from './smtp';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },

  modules: ['@nuxt/ui', 'motion-v/nuxt', '@nuxt/image', 'nuxt-nodemailer'],

  nodemailer: smtp,

  css: ['~/assets/css/main.css'],

  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Montserrat',
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
      icons: ['lucide:moon', 'lucide:sun', 'lucide:x'],
      scan: true,
    },
    serverBundle: false,
  },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', '@vueuse/core', 'zod/locales', 'zod', 'maska/vue'],
    },
  },
});
