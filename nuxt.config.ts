// https://nuxt.com/docs/api/configuration/nuxt-config
const env = require('dotenv').config()

export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [ 'vuetify/lib/styles/main.sass', '@/assets/scss/style.global.scss' ],
  modules: [ '@pinia/nuxt' ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
