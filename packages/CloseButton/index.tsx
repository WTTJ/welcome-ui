import React from 'react'
import { CrossIcon } from '@welcome-ui/icons'
import { ButtonProps } from '@welcome-ui/button'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton $h={30} $w={30} href="a" ref={ref} shape="circle" title="Close" {...props}>
    <CrossIcon $color="light.100" size="xs" />
  </S.CloseButton>
))

// Nested exports
export const StyledCloseButton = S.CloseButton
