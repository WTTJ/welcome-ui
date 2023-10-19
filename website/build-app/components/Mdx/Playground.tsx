'use client'

import examples from '@/build-app/examples'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { Highlight, themes } from 'prism-react-renderer'
import { CheckIcon, CopyIcon } from '@welcome-ui/icons'
import { useCopyText } from '@welcome-ui/utils.copy'

interface PreProps {
  code: string
  pathToFile: string
  withCodeEditor?: boolean
}

export const Playground = ({ code, pathToFile, withCodeEditor }: PreProps) => {
  const [copy, copied] = useCopyText(code, 3000)
  // @ts-ignore
  const Component = examples[pathToFile]
  const preview = Component && <Component />

  return (
    <>
      <Box
        padding={{ _: 'sm', lg: '3xl' }}
        backgroundColor="light-900"
        border="1px solid"
        borderColor="dark-100"
      >
        {preview}
      </Box>
      {withCodeEditor && (
        <Highlight theme={themes.duotoneLight} code={code.trim()} language="tsx">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <Box position="relative">
              <Button
                size="xs"
                variant={copied ? 'primary-success' : 'ghost'}
                shape="circle"
                position="absolute"
                right={16}
                top={16}
                onClick={copy}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </Button>
              <Box
                as="pre"
                padding="lg xl"
                style={style}
                border="1px solid"
                borderColor="dark-100"
                borderTop="0"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </Box>
            </Box>
          )}
        </Highlight>
      )}
    </>
  )
}
