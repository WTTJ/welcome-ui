import { join } from 'path'
import { existsSync, readFileSync } from 'fs'

import { Alert } from '@welcome-ui/alert'

import { Playground } from './Playground'

type DivProps = {
  children: string
  node?: {
    properties: {
      dataPlayground?: string
      dataComponent?: string
    }
  }
}

export const Div = ({ children, node }: DivProps) => {
  const playgroundFile = node?.properties?.dataPlayground

  if (playgroundFile) {
    const component = node?.properties?.dataComponent || ''

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

    const content = readFileSync(pathToFile, 'utf8')

    return <Playground>{content}</Playground>
  }

  return <div {...node}>{children}</div>
}
