import React, { forwardRef } from 'react'
import { func, node } from 'prop-types'

import { Icon } from '../Icon'

import * as S from './styles'

export const GrowlAction = S.Action
export const GrowlClose = S.CloseContent
export { GrowlTitle } from './title'

export const Growl = forwardRef(({ children, close, dataTestId, onClose }, ref) => (
  <S.Growl ref={ref}>
    {onClose && (
      <S.Close data-testid={dataTestId} onClick={onClose}>
        {close || (
          <S.CloseContent>
            <Icon name="cross" size="xs" />
          </S.CloseContent>
        )}
      </S.Close>
    )}
    {children}
  </S.Growl>
))

Growl.displayName = 'Growl'

Growl.propTypes = {
  children: node.isRequired,
  close: node,
  onClose: func
}
