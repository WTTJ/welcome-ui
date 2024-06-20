'use client'

import { Box } from '@welcome-ui/box'
import { WuiProps } from '@welcome-ui/system'

import { Highlight } from './Highlight'

import examples from '@/build-app/examples'

interface PreProps {
  code: string
  pathToFile: keyof typeof examples
  withCodeEditor?: boolean
  mt?: WuiProps['marginTop']
}

export const Playground = ({ code, mt = 'xl', pathToFile, withCodeEditor }: PreProps) => {
  const Component = examples[pathToFile]
  const preview = Component && <Component />

  return (
    <>
      <Box backgroundColor="nude-100" borderRadius="lg" mt={mt} p={{ _: 'sm', lg: '3xl' }}>
        {preview}
      </Box>
      {withCodeEditor && <Highlight>{code}</Highlight>}
    </>
  )
}
