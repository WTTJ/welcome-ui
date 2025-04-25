import type { ButtonOptions } from '@/Button'
import { CrossIcon } from '@/Icons'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

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
