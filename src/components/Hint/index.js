import React, { forwardRef } from 'react'
import { node, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Hint = forwardRef(({ children, testId, variant }, ref) => (
  <S.Hint data-testid={testId} ref={ref} variant={variant}>
    {children}
  </S.Hint>
))

Hint.displayName = 'Hint'

Hint.propTypes = {
  children: node,
  testId: string,
  variant: oneOf(['warning', 'error'])
}
