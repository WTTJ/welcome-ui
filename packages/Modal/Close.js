import React from 'react'
import { CrossIcon } from '@welcome-ui/icons'

import * as S from './Close.styled'

export function Close(props) {
  return (
    <S.Close {...props} shape="circle" size="sm" variant="secondary">
      <CrossIcon size="sm" />
    </S.Close>
  )
}
