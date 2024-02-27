import en from './translations/en.json'
import bg from './translations/bg.json'
import hu from './translations/hu.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    bg,
    hu,
  },
}))
