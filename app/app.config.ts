export default defineAppConfig({
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
    pageHero: {
      slots: {
        title: 'max-w-2xl!',
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
});
