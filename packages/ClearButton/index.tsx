import React from 'react'
import { ButtonProps } from '@welcome-ui/button'

import * as S from './styles'

export type ClearButtonProps = Omit<ButtonProps, 'shape' | 'title' | 'variant'>

export const ClearButton: React.FC<ClearButtonProps> = props => (
  <S.ClearButton shape="circle" title="Clear" variant="tertiary" {...props}>
    <S.Icon />
  </S.ClearButton>
)

// Nested exports
export const StyledClearButton = S.ClearButton
