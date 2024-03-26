export function useFormLink(lang: string) {
  type LangCodes = 'en' | 'hu' | 'bg'
  const formIds: Record<LangCodes, string> = {
    en: '1FAIpQLScLdy8zXt0tps13JH4A3NvwgB2-BEW4fUdI24jS6CzMU4IMoQ',
    hu: '1FAIpQLSf8CBZgstvMmhzH-_CJTKbbzQjMn59XzG10snkBZjPKkfjW3A',
    bg: '1FAIpQLSfb-jYlzkKuiRAxEyDT8L2ANqbM49wy_cv47VraYH0IrNbqSw',
  }
  return `https://docs.google.com/forms/d/e/${
    formIds[lang as LangCodes]
  }/viewform?hl=${lang}`
}
