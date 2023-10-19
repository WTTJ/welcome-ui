import { join } from 'path'
import { existsSync, readFileSync } from 'fs'

import { Alert } from '@welcome-ui/alert'
import { Playground } from './Playground'

type DivProps = {
  children: string
  node?: {
    properties: {
      dataComponent?: string
      dataPlayground?: string
      dataPlaygroundWithCodeEditor?: string
    }
  }
}

export const Div = ({ children, node }: DivProps) => {
  const playgroundFile = node?.properties?.dataPlayground

  if (playgroundFile) {
    const component = node?.properties?.dataComponent || ''
    const withCodeEditor = node?.properties?.dataPlaygroundWithCodeEditor || 'true'

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
        withCodeEditor={withCodeEditor?.toLowerCase() === 'true'}
        code={`${code}`}
        pathToFile={pathToFile.split('packages')[1]}
      />
    )
  }

  return <div {...node}>{children}</div>
}
