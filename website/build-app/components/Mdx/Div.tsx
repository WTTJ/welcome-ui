import { join } from 'path'
import { existsSync, readFileSync } from 'fs'

import { Colors } from '../Colors'
import { Theme } from '../Theme'
import { IconListProps, IconsList } from '../IconsList'

import { Playground } from './Playground'

import { Alert } from '@/Alert'
import examples from '~/build-app/examples'

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

const replaceWuiImports = (code: string) =>
  code.replaceAll(/(from|import) '@\/([\w-./]+)'/g, "$1 'welcome-ui/$2'")

export const Div = ({ children, node }: DivProps) => {
  const playgroundFile = node?.properties?.dataPlayground
  const colorsName = node?.properties?.dataColors
  const themeEntry = node?.properties?.dataTheme
  const iconsEntry = node?.properties?.dataIcons

  // Colors
  if (colorsName) return <Colors name={colorsName} />

  // Icons objects
  if (iconsEntry) {
    const isIconsFont = node?.properties?.dataIconsFont === 'true' ? true : false

    return <IconsList isIconsFont={isIconsFont} name={iconsEntry} />
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
      'lib',
      'src',
      'components',
      component,
      'docs',
      'examples',
      playgroundFile
    )

    const fileExist = existsSync(pathToFile)

    if (!fileExist) {
      return <Alert variant="danger">File not found</Alert>
    }

    const code = readFileSync(pathToFile, 'utf8')

    const pathToFileFormatted = pathToFile.split('components')[1] as keyof typeof examples

    return (
      <Playground
        code={replaceWuiImports(code)}
        isOverview={isOverview === 'true'}
        mt={playgroundFile === 'overview.tsx' ? 0 : undefined}
        name={component}
        pathToFile={pathToFileFormatted}
        withCodeEditor={withCodeEditor?.toLowerCase() === 'true'}
      />
    )
  }

  return <div {...node}>{children}</div>
}
