import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'

const __dirname = dirname(new URL(import.meta.url).pathname)
const packageJSONPath = join(dirname(__dirname), 'lib', 'package.json')

const packageJSON = JSON.parse(readFileSync(packageJSONPath, { encoding: 'utf-8' }))

const versionToPublish = process.env.CIRCLE_TAG

console.info(`Found latest tag ${versionToPublish}`)

packageJSON.version = versionToPublish.trim()

console.info('Writing version to package.json...')

writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2))

console.info('Done !')
console.info('Publishing ...')

execSync('cd /home/circleci/welcome-ui/lib && npm publish --tag dev')

console.info('Done !')
