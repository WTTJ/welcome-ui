import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

export function getComponentProperties(component: string) {
  const file = join(process.cwd(), '../', 'packages', component, 'docs', 'properties.json')
  const fileExist = existsSync(file)

  if (!fileExist) return null

  const properties = readFileSync(file, 'utf8')

  return JSON.parse(properties)
}
