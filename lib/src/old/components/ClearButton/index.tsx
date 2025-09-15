import type { ButtonOptions } from '@old/Button'
import { CrossIcon } from '@old/Icons'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import * as S from './styles'

export type ClearButtonProps = CreateWuiProps<
  'button',
  Omit<ButtonOptions, 'shape' | 'title' | 'variant'>
>

export const ClearButton = forwardRef<'button', ClearButtonProps>(
  ({ size = 'xs', ...rest }, ref) => (
    <S.ClearButton ref={ref} shape="circle" size={size} title="Clear" variant="ghost" {...rest}>
      <CrossIcon size="xxs" />
    </S.ClearButton>
  )
)

// Nested exports
export const StyledClearButton = S.ClearButton
