import lowerCase from 'lodash/lowerCase'
import upperFirst from 'lodash/upperFirst'

export function getName(name: string) {
  return upperFirst(lowerCase(name))
}
