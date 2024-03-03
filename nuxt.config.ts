// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      // https://www.npmjs.com/package/postcss-nested
      'postcss-nested': {},
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  // https://google-fonts.nuxtjs.org/
  googleFonts: {
    families: {
      Bitter: {
        wght: '100..900',
        ital: '100..900',
      },
    },
    download: true,
    base64: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg', 'hu'],
    vueI18n: './i18n.config.ts',
  },
})
