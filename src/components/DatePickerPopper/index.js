import React from 'react'
import { createPortal } from 'react-dom'

import * as S from './styles'

export const DatePickerPopper = ({ children, popperZIndex }) =>
  typeof window !== 'undefined'
    ? createPortal(
        <S.Popper zIndex={popperZIndex}>{children}</S.Popper>,
        document.querySelector('body')
      )
    : null
