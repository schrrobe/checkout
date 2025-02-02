export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/storybook'],

  // Font Awesome CSS einbinden
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  '~/assets/scss/styles.scss',
      '~/assets/scss/global.scss'
  ],

  // Plugins einfügen
  plugins: [
    // Füge das Plugin hinzu, das du für FontAwesome erstellt hast
    '~/plugins/fontawesome.ts'
  ],
  storybook: {
    url: 'http://localhost:6006', // Standard-URL für Storybook
    port: 6006, // Standard-Port für Storybook
  },
})
