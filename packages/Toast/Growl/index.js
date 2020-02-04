import React, { forwardRef } from 'react'
import { func, node } from 'prop-types'
import { ClearButton } from '@welcome-ui/clear-button'

import * as S from './styles'
import { Title } from './Title'

export const Growl = forwardRef(({ children, dataTestId, onClose }, ref) => (
  <S.Growl ref={ref}>
    {onClose && (
      <ClearButton
        data-testid={dataTestId}
        onClick={onClose}
        position="absolute"
        right={10}
        size="sm"
        top={10}
      />
    )}
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
