export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      light:
        'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'My profile picture',
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true,
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    pageSection: {
      slots: {
        container: 'flex flex-col lg:grid py-16 sm:py-16 lg:py-16 gap-8 sm:gap-8',
        title: 'text-left! text-xl sm:text-xl lg:text-4xl font-black text-primary',
        description: 'text-left! mt-3 text-sm sm:text-md lg:text-sm text-muted',
      },
    },
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        icon: 'i-simple-icons-discord',
        to: 'https://go.nuxt.com/discord',
        target: '_blank',
        'aria-label': 'Nuxt on Discord',
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://go.nuxt.com/x',
        target: '_blank',
        'aria-label': 'Nuxt on X',
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/nuxt/ui',
        target: '_blank',
        'aria-label': 'Nuxt UI on GitHub',
      },
    ],
  },
});
