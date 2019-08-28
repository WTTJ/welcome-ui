import React from 'react'
import { createPortal } from 'react-dom'

import * as S from './styles'

export const DatePickerPopper = ({ children }) =>
  typeof window !== 'undefined'
    ? createPortal(<S.Popper>{children}</S.Popper>, document.querySelector('body'))
    : null
