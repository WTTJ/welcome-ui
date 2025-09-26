import * as locales from 'date-fns/locale'

export type LocalesKey = keyof typeof locales
const isValidLocale = (locale?: string): locale is LocalesKey => !!locale && locale in locales

export const getLocale = (locale?: LocalesKey) => {
  const browserLocale = navigator.language.split('-')[0]

  if (isValidLocale(locale)) {
    return locales[locale]
  }
  if (isValidLocale(browserLocale)) {
    return locales[browserLocale]
  }
  return locales['enUS']
}
