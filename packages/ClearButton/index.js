import React from 'react'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'

export const ClearButton = props => (
  <S.ClearButton
    height={18}
    shape="circle"
    title="Clear"
    variant="quaternary"
    width={18}
    {...props}
  >
    <CrossIcon height={8} width={8} />
  </S.ClearButton>
)

export const StyledClearButton = S.ClearButton
