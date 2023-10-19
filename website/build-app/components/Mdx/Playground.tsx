'use client'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { Highlight, themes } from 'prism-react-renderer'
import { CheckIcon, CopyIcon } from '@welcome-ui/icons'
import { useCopyText } from '@welcome-ui/utils.copy'

import examples from '@/build-app/examples'

interface PreProps {
  code: string
  pathToFile: string
  withCodeEditor?: boolean
}

export const Playground = ({ code, pathToFile, withCodeEditor }: PreProps) => {
  const [copy, copied] = useCopyText(code, 3000)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Component = examples[pathToFile]
  const preview = Component && <Component />

  return (
    <>
      <Box
        backgroundColor="light-900"
        border="1px solid"
        borderColor="dark-100"
        padding={{ _: 'sm', lg: '3xl' }}
      >
        {preview}
      </Box>
      {withCodeEditor && (
        <Highlight code={code.trim()} language="tsx" theme={themes.duotoneLight}>
          {({ getLineProps, getTokenProps, style, tokens }) => (
            <Box position="relative">
              <Button
                onClick={copy}
                position="absolute"
                right={16}
                shape="circle"
                size="xs"
                top={16}
                variant={copied ? 'primary-success' : 'ghost'}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </Button>
              <Box
                as="pre"
                border="1px solid"
                borderColor="dark-100"
                borderTop="0"
                padding="lg xl"
                style={style}
              >
                {tokens.map((line, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      // eslint-disable-next-line react/no-array-index-key
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
