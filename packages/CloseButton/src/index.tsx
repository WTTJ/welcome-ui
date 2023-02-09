import React from 'react'
import { CrossIcon } from '@welcome-ui/icons'
import { ButtonProps } from '@welcome-ui/button'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
    <CrossIcon size="lg" />
  </S.CloseButton>
))
