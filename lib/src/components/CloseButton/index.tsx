import React from 'react'

import * as S from './styles'

import { CrossIcon } from '@/Icons'
import { ButtonProps } from '@/Button'
import { forwardRef } from '@/System'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
    <CrossIcon size="lg" />
  </S.CloseButton>
))
