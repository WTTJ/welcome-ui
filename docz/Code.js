/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { getTheme } from './CodeTheme'
import { Pre } from './Pre'
import { useCopyText } from '../packages/Copy'
import { Box } from '../packages/Box'
import { Button } from '../packages/Button'

export const Code = ({ children, language = 'jsx', isCopyable }) => {
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
              position="absolute"
              top={0}
              mt="lg"
              mr="lg"
              right={0}
              onClick={copy}
              size="xs"
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
