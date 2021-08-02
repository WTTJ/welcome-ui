import React, { forwardRef } from 'react'
import { Variant, VariantIcon } from '@welcome-ui/variant-icon'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface HintOptions {
  checkableField?: boolean
  variant?: Variant
}

export type HintProps = HintOptions & React.HTMLAttributes<HTMLDivElement> & WuiProps

export const Hint = forwardRef<HTMLDivElement, HintProps>(
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
