import { join } from 'path'
import { existsSync, readFileSync } from 'fs'

import { Alert } from '@welcome-ui/alert'

import { Colors } from '../Colors'
import { Theme } from '../Theme'
import { IconListProps, IconsList } from '../IconsList'

import { Playground } from './Playground'

import examples from '@/build-app/examples'

type DivProps = {
  children: string
  node?: {
    properties: {
      dataColors?: string
      dataComponent?: string
      dataIcons?: IconListProps['name']
      dataIconsFont?: string
      dataOverview?: string
      dataPlayground?: string
      dataPlaygroundWithCodeEditor?: string
      dataTheme?: string
    }
  }
}

export const Div = ({ children, node }: DivProps) => {
  const playgroundFile = node?.properties?.dataPlayground
  const colorsName = node?.properties?.dataColors
  const themeEntry = node?.properties?.dataTheme
  const iconsEntry = node?.properties?.dataIcons

  // Colors
  if (colorsName) return <Colors name={colorsName} />

  // Icons objects
  if (iconsEntry) {
    const isIconFont = node?.properties?.dataIconsFont === 'true' ? true : false

    return <IconsList isIconFont={isIconFont} name={iconsEntry} />
  }

  // Theme objects
  if (themeEntry) return <Theme entry={themeEntry} />

  // Get playground files from packages docs folder
  if (playgroundFile) {
    const component = node?.properties?.dataComponent || ''
    const withCodeEditor = node?.properties?.dataPlaygroundWithCodeEditor || 'true'
    const isOverview = node?.properties?.dataOverview || ''

    const pathToFile = join(
      process.cwd(),
      '../',
      'packages',
      component,
      'docs',
      'examples',
      playgroundFile
    )
    const fileExist = existsSync(pathToFile)

    if (!fileExist) {
      return <Alert variant="error">File not found</Alert>
    }

    const code = readFileSync(pathToFile, 'utf8')

    return (
      <Playground
        code={`${code}`}
        isOverview={isOverview === 'true'}
        mt={playgroundFile === 'overview.tsx' ? 0 : undefined}
        name={component}
        pathToFile={pathToFile.split('packages')[1] as keyof typeof examples}
        withCodeEditor={withCodeEditor?.toLowerCase() === 'true'}
      />
    )
  }

  return <div {...node}>{children}</div>
}
