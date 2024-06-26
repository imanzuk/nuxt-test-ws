export default defineNuxtConfig({
  devtools: { enabled: process.env.DEVTOOLS_ENABLED },
  modules: ['@nuxtjs/supabase', "@nuxt/ui", '@pinia/nuxt'],
  ui: {
    notifications: {
      position: 'top-0 bottom-auto'
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.postcss'
  },
  app: {
    head: {
      charset: 'utf-16',
      title: 'Nuxt.js test app',
      viewport: 'width=500, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono&display=swap' },
      ]
    }
  }
})
