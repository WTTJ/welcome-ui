import { execSync } from 'child_process'

const date = new Date()

const newVersion = `dev.${date.getTime()}`

console.info(`Tag ${newVersion}...`)

execSync(`git tag ${newVersion}`)

console.info('Done !')
console.info('Pushing tags...')

execSync(`git push origin ${newVersion}`)

console.info('Done !')
console.info(
  'Visit https://app.circleci.com/pipelines/github/WTTJ/welcome-ui to see your release progress'
)
