import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

export function getComponentProperties(component: string) {
  const isNewPackage = ['Tag'].includes(component)

  const file = isNewPackage
    ? join(process.cwd(), '../', 'src', 'lib', 'components', component, 'docs', 'properties.json')
    : join(process.cwd(), '../', 'packages', component, 'docs', 'properties.json')

  const fileExist = existsSync(file)

  if (!fileExist) return null

  const properties = readFileSync(file, 'utf8')

  return JSON.parse(properties)
}
