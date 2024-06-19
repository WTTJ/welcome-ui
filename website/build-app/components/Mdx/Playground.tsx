'use client'

import { Box } from '@welcome-ui/box'

import { Highlight } from './Highlight'

import examples from '@/build-app/examples'

interface PreProps {
  code: string
  pathToFile: string
  withCodeEditor?: boolean
}

export const Playground = ({ code, pathToFile, withCodeEditor }: PreProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Component = examples[pathToFile]
  const preview = Component && <Component />

  return (
    <>
      <Box backgroundColor="nude-100" borderRadius={8} padding={{ _: 'sm', lg: '3xl' }}>
        {preview}
      </Box>
      {withCodeEditor && <Highlight code={code} />}
    </>
  )
}
