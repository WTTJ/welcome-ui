import { camelCase, upperFirst } from 'lodash'

export function getName(name: string, withoutSpacing?: boolean) {
  const nameFormatted = upperFirst(camelCase(name))

  if (withoutSpacing) return nameFormatted

  return nameFormatted.replace(/([A-Z])/g, ' $1').trim()
}
