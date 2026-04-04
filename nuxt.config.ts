import smtp from './smtp';

// const baseURL = '/elite-bird/';
const baseURL = '/';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },

  modules: ['@nuxt/ui', 'motion-v/nuxt', '@nuxt/image', 'nuxt-nodemailer'],

  app: {
    baseURL: baseURL,
  },

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

  // nitro: {
  //   preset: 'cloudflare-pages',
  //   prerender: {
  //     autoSubfolderIndex: false,
  //   },
  // },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', '@vueuse/core', 'zod/locales', 'zod', 'maska/vue'],
    },
  },
});
