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
        code={`${code}`}
        mt={playgroundFile === 'overview.tsx' ? 0 : undefined}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pathToFile={pathToFile.split('packages')[1]}
        withCodeEditor={withCodeEditor?.toLowerCase() === 'true'}
      />
    )
  }

  return <div {...node}>{children}</div>
}
