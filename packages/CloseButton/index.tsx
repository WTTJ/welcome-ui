import React from 'react'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { ButtonProps } from '@welcome-ui/button'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton h={30} ref={ref} shape="circle" title="Close" w={30} {...props}>
    <CrossIcon color="light.100" size="xs" />
  </S.CloseButton>
))

// Nested exports
export const StyledCloseButton = S.CloseButton
