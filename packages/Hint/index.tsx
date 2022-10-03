import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

export type Variant = 'error' | 'info' | 'success' | 'warning'

import * as S from './styles'

export interface HintOptions {
  checkableField?: boolean
  variant?: Variant
}

export type HintProps = CreateWuiProps<'div', HintOptions>

export const Hint = forwardRef<'div', HintProps>(
  ({ children, dataTestId, variant, ...rest }, ref) => {
    return (
      <S.Hint data-testid={dataTestId} ref={ref} variant={variant} {...rest}>
        {children}
      </S.Hint>
    )
  }
)

Hint.displayName = 'Hint'

export const StyledHint = S.Hint
