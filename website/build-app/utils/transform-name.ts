import { upperFirst } from 'lodash'

export function getName(name: string, withoutSpacing?: boolean) {
  const nameFormatted = upperFirst(name)

  if (withoutSpacing) return nameFormatted

  return nameFormatted.replace(/-/g, ' ')
}
