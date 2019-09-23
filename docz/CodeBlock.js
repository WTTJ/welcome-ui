import React from 'react'
import { object } from 'prop-types'
import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

const CodeBlock = styled.pre(
  ({ show }) => css`
    font-family: monospace;
    font-size: body3;
    line-height: h4;
    color: nude.200;
    margin-top: xl;
    padding: lg;
    background-color: dark.500;
    border: 1px solid ${th.color('nude.200')};
    border-radius: sm;
    overflow: auto;
    code {
      font: inherit;
    }
    display: ${show > 0 ? 'block' : 'none'};
  `
)

export const DoczCodeBlock = ({ children, ...rest }) => (
  <CodeBlock {...rest}>
    <code>{JSON.stringify(children, 0, 2)}</code>
  </CodeBlock>
)

DoczCodeBlock.propTypes = {
  children: object
}
