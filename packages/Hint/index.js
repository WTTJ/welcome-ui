import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'
import { VariantIcon } from '@welcome-ui/variant-icon'

import * as S from './styles'

export const Hint = forwardRef(
  ({ checkableField, children, dataTestId, variant, ...rest }, ref) => {
    return (
      <S.Hint data-testid={dataTestId} ref={ref} variant={variant} {...rest}>
        {checkableField && <VariantIcon variant={variant} />}
        {children}
      </S.Hint>
    )
  }
)

Hint.displayName = 'Hint'

Hint.propTypes /* remove-proptypes */ = {
  checkableField: bool,
  children: node,
  variant: oneOf(['warning', 'error', 'info', 'success'])
}
