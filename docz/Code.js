/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

import { Pre } from './Pre'

export const Code = ({ children, language = 'jsx' }) => (
  <Highlight {...defaultProps} code={children} language={language} theme={theme}>
    {({ getLineProps, getTokenProps, tokens }) => (
      <Pre>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
)
