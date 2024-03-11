import en from './translations/en.json'
import bg from './translations/bg.json'
import hu from './translations/hu.json'

export default defineI18nConfig(() => ({
  legacy: false,
  strategy: 'prefix_except_default',
  globalInjection: true,
  messages: {
    en,
    bg,
    hu,
  },
}))
