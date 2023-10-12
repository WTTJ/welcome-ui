import { camelCase, upperFirst } from 'lodash'

export function getName(name: string) {
  return upperFirst(camelCase(name))
}
