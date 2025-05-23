import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

export interface HintOptions {
  checkableField?: boolean
  variant?: 'danger' | 'success' | 'warning'
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
