import colors from 'vuetify/lib/util/colors';

import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { en, th } from "vuetify/locale";

const setColors = {
  primary: colors.indigo.darken2,
  accent: colors.grey.darken3,
  secondary: colors.amber.darken3,
  info: colors.teal.lighten1,
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3
}

// const component = { ...components, ...{ VDatePicker } }
export default defineNuxtPlugin(async (nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: { fa, mdi },
    },
    locale: {
      locale: "th",
      fallback: "en",
      messages: { th, en },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: setColors
        }
      }
    }
  })
  
  nuxtApp.vueApp.use(vuetify)
})