import React from 'react'
import { MenuSeparator } from 'reakit/Menu'

import * as S from './Separator.styled'

export function Separator(props) {
  return <MenuSeparator as={S.Separator} {...props} />
}
