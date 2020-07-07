/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export const Code = ({ children, language = 'jsx' }) => {
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <pre>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
