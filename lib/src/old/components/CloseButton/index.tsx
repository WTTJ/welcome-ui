import type { ButtonProps } from '@old/Button'
import { CrossIcon } from '@old/Icons'
import { forwardRef } from '@old/System'

import * as S from './styles'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
    <CrossIcon size="lg" />
  </S.CloseButton>
))
