import PropTypes from 'prop-types'
import React from 'react'

import { Icon } from '../Icon'

import * as S from './styles'

export const GrowlAction = S.Action
export const GrowlClose = S.CloseContent
export { GrowlTitle } from './title'

export const Growl = ({ children, onClose, close }) => (
  <S.Growl>
    {onClose && (
      <S.Close onClick={onClose}>
        {close || (
          <S.CloseContent>
            <Icon name="cross" size="xs" />
          </S.CloseContent>
        )}
      </S.Close>
    )}
    {children}
  </S.Growl>
)

Growl.propTypes = {
  children: PropTypes.node.isRequired,
  /** node element replace right position  */
  close: PropTypes.node,
  /** action called onclick on right position  */
  onClose: PropTypes.func
}
