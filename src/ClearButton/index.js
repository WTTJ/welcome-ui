import React from 'react'

import { Icon } from '../Icon'

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
    <Icon height={8} name="cross" width={8} />
  </S.ClearButton>
)
