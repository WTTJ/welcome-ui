import React from 'react'
import { CrossIcon } from '@welcome-ui/icons'
import { ButtonOptions } from '@welcome-ui/button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type ClearButtonProps = CreateWuiProps<
  'button',
  Omit<ButtonOptions, 'shape' | 'title' | 'variant'>
>

export const ClearButton = forwardRef<'button', ClearButtonProps>(({ ...rest }, ref) => (
  <S.ClearButton p="xxs" ref={ref} shape="circle" title="Clear" variant="ghost" {...rest}>
    <CrossIcon size="xs" />
  </S.ClearButton>
))

// Nested exports
export const StyledClearButton = S.ClearButton
