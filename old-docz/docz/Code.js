/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { useCopyText } from '../packages/Copy'
import { Box } from '../packages/Box'
import { Button } from '../packages/Button'

import { Pre } from './Pre'
import { getTheme } from './CodeTheme'

export const Code = ({ children, isCopyable, language = 'jsx' }) => {
  const copyRef = useRef()
  const [copy, copied] = useCopyText(copyRef, 5000)

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={getTheme()}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <Box position="relative">
          <Pre ref={copyRef} style={{ paddingRight: isCopyable ? 80 : 0 }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
          {isCopyable && (
            <Button
              mr="lg"
              mt="lg"
              onClick={copy}
              position="absolute"
              right={0}
              size="xs"
              top={0}
              variant={copied ? 'secondary' : 'tertiary'}
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          )}
        </Box>
      )}
    </Highlight>
  )
}
