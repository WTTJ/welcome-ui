import React from 'react'
import { ButtonProps } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'

export type ClearButtonProps = Omit<ButtonProps, 'shape' | 'title' | 'variant'>

export const ClearButton: React.FC<ClearButtonProps> = ({ size = 'xs', ...rest }) => (
  <S.ClearButton shape="circle" size={size} title="Clear" variant="tertiary" {...rest}>
    <CrossIcon size={size} />
  </S.ClearButton>
)

// Nested exports
export const StyledClearButton = S.ClearButton
