import { readFileSync } from 'fs'
import { join } from 'path'

export function getComponentProperties(component: string) {
  const file = join(process.cwd(), '../', 'packages', component, 'dist', 'index.doc.json')
  const properties = readFileSync(file, 'utf8')

  return JSON.parse(properties)
}
