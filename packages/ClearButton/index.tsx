import React from 'react'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { Button, ButtonOptions } from '@welcome-ui/button'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type ClearButtonProps = CreateWuiProps<
  typeof Button,
  Omit<ButtonOptions, 'shape' | 'title' | 'variant'>
>

export const ClearButton: React.FC<ClearButtonProps> = ({ size = 'xs', ...rest }) => (
  <S.ClearButton shape="circle" size={size} title="Clear" variant="tertiary" {...rest}>
    <CrossIcon size={size} />
  </S.ClearButton>
)

// Nested exports
export const StyledClearButton = S.ClearButton
