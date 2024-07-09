import { camelCase, upperFirst } from 'lodash'

export function getName(name: string, withoutSpacing?: boolean) {
  const nameFormatted = upperFirst(name)

  if (withoutSpacing) return nameFormatted

  return nameFormatted.replace(/-/g, ' ')
}

export function getRepository(name: string) {
  return camelCase(name).charAt(0).toUpperCase() + camelCase(name).slice(1)
}
