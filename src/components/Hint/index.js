import React, { forwardRef } from 'react'
import { node, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Hint = forwardRef(({ children, dataTestId, variant }, ref) => (
  <S.Hint data-testid={dataTestId} ref={ref} variant={variant}>
    {children}
  </S.Hint>
))

Hint.displayName = 'Hint'

Hint.propTypes = {
  children: node,
  dataTestId: string,
  variant: oneOf(['warning', 'error'])
}
