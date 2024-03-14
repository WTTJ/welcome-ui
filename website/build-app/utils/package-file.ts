import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

export function getPackageFile(component: string): { packageName?: string; name?: string } {
  const file = join(process.cwd(), '../', 'packages', component, 'package.json')
  const fileExist = existsSync(file)

  if (!fileExist)
    return {
      name: undefined,
      packageName: undefined,
    }

  const properties = JSON.parse(readFileSync(file, 'utf8'))

  const name = properties.component.split(',')[0]

  return {
    name,
    packageName: properties.name,
  }
}
