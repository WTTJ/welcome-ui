import React, { forwardRef } from 'react'
import { func, node } from 'prop-types'

import * as S from './styles'
import { Title } from './Title'
import { Close } from './Close'

export const Growl = forwardRef(({ children, dataTestId, onClose }, ref) => (
  <S.Growl ref={ref}>
    {onClose && <Close data-testid={dataTestId} onClick={onClose} />}
    {children}
  </S.Growl>
))

Growl.displayName = 'Growl'

Growl.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  onClose: func
}

Growl.Action = S.Action
Growl.Title = Title
