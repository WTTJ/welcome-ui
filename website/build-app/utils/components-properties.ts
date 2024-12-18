import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

import { MIGRATED_PACKAGES } from '../../../migrated_packages'

export function getComponentProperties(component: string) {
  const isMigratedPackage = MIGRATED_PACKAGES.some(pkg => component.includes(pkg))
  const file = isMigratedPackage
    ? join(process.cwd(), '../', 'lib', 'src', 'components', component, 'docs', 'properties.json')
    : join(process.cwd(), '../', 'packages', component, 'docs', 'properties.json')
  const fileExist = existsSync(file)

  if (!fileExist) return null

  const properties = readFileSync(file, 'utf8')

  return JSON.parse(properties)
}
