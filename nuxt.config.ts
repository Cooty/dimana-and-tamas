// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      // https://www.npmjs.com/package/postcss-nested
      'postcss-nested': {},
      // https://www.npmjs.com/package/postcss-custom-media
      'postcss-custom-media': {},
    },
  },
  modules: ['@nuxtjs/google-fonts'],
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
})
