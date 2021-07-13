import React, { forwardRef } from 'react'
import { Variant, VariantIcon } from '@welcome-ui/variant-icon'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  checkableField?: boolean
  dataTestId?: string
  variant?: Variant
}

export const Hint = forwardRef<HTMLDivElement, HintProps & WuiProps>(
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
