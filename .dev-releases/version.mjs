import { execSync } from 'child_process'

const date = new Date()

const newVersion = `0.0.0-dev.${date.getTime()}`

console.info(`Tag ${newVersion}...`)

execSync(`cd lib && git tag ${newVersion}`)

console.info('Done !')
console.info('Pushing tags...')

execSync(`git push origin ${newVersion} --no-verify`)

console.info('Done !')
console.info(
  'Visit https://app.circleci.com/pipelines/github/WTTJ/welcome-ui to see your release progress'
)
