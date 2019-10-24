import React from 'react'
import { createPortal } from 'react-dom'

import * as S from './styles'

export const DatePickerPopper = props => {
  const { children } = props
  if (!children) return null
  return typeof window !== 'undefined'
    ? createPortal(
        <S.Popper {...children.props}>{children}</S.Popper>,
        document.querySelector('body')
      )
    : null
}
