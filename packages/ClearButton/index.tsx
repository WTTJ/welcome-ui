import React from 'react'
import { WuiProps } from '@welcome-ui/system'
import { ButtonProps } from '@welcome-ui/button'

import * as S from './styles'

export type ClearButtonProps = Omit<ButtonProps, 'shape' | 'title' | 'variant'>

export const ClearButton: React.FC<ButtonProps & WuiProps> = props => (
  <S.ClearButton shape="circle" title="Clear" variant="tertiary" {...props}>
    <S.Icon />
  </S.ClearButton>
)

// Nested exports
export const StyledClearButton = S.ClearButton
