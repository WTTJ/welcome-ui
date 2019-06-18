import React, { forwardRef } from 'react'

import * as S from './styles'

export const IconButton = forwardRef((props, ref) => (
  <S.IconButton data-testid="icon-button" ref={ref} {...props} />
))

IconButton.displayName = 'IconButton'
