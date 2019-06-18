import React, { forwardRef } from 'react'
import { func, node } from 'prop-types'

import { Icon } from '../Icon'

import * as S from './styles'

export const GrowlAction = S.Action
export const GrowlClose = S.CloseContent
export { GrowlTitle } from './title'

export const Growl = forwardRef(({ children, close, onClose }, ref) => (
  <S.Growl ref={ref}>
    {onClose && (
      <S.Close data-testid="growl-close" onClick={onClose}>
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
  /** node element replace right position  */
  close: node,
  /** action called onclick on right position  */
  onClose: func
}
