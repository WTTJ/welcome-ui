import { join } from 'path'
import { existsSync, readFileSync } from 'fs'

import { Alert } from '@welcome-ui/alert'

import { Playground } from './Playground'

import examples from '@/build-app/examples'

type DivProps = {
  children: string
  node?: {
    properties: {
      dataComponent?: string
      dataOverview?: string
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
