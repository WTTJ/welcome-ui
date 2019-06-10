import React from 'react'
import { number, oneOf, string } from 'prop-types'

import { StyledText } from './styles'

const TAG_NAMES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
  meta1: 'p',
  meta2: 'p'
}

export const Text = ({ as, children, lines, variant = 'body1' }) => {
  const tagName = as || TAG_NAMES[variant]

  return (
    <StyledText as={tagName} lines={lines} variant={variant}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  as: string,
  children: string,
  lines: number,
  variant: oneOf(Object.keys(TAG_NAMES))
}
