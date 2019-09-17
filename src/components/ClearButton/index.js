import React from 'react'

import { Icon } from '../Icon'

import * as S from './styles'

export const ClearButton = props => (
  <S.ClearButton height={0.45} shape="circle" variant="quaternary" width={0.45} {...props}>
    <Icon height={0.5} name="cross" width={0.5} />
  </S.ClearButton>
)
