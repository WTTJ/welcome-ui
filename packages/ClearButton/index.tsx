import React from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export const ClearButton: React.FC<WuiProps> = props => (
  <S.ClearButton shape="circle" title="Clear" variant="tertiary" {...props}>
    <S.Icon />
  </S.ClearButton>
)

// Nested exports
export const StyledClearButton = S.ClearButton
