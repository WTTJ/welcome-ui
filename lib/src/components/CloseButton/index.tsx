import type { ButtonProps } from '@/Button'
import { CrossIcon } from '@/Icons'
import { forwardRef } from '@/System'

import * as S from './styles'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
    <CrossIcon size="lg" />
  </S.CloseButton>
))
