import React, { forwardRef } from 'react'
import { node, number, oneOf, string } from 'prop-types'

import { COMPONENT_TYPE } from '../../utils'

import * as S from './styles'

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

export const Text = forwardRef(
  ({ as, children, lines, testId, variant = 'body1', ...rest }, ref) => {
    const tagName = as || TAG_NAMES[variant]

    return (
      <S.Text as={tagName} data-testid={testId} lines={lines} ref={ref} variant={variant} {...rest}>
        {children}
      </S.Text>
    )
  }
)

Text.displayName = 'Text'

Text.propTypes = {
  as: COMPONENT_TYPE,
  children: node,
  lines: number,
  testId: string,
  variant: oneOf(Object.keys(TAG_NAMES))
}
