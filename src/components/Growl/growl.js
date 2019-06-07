import React from 'react'
import { func, node, string } from 'prop-types'

import { Icon } from '../Icon'

import * as S from './styles'

export const GrowlAction = S.Action
export const GrowlClose = S.CloseContent
export { GrowlTitle } from './title'

export const Growl = ({ children, onClose, closeButton, id }) => {
  const handleClose = () => {
    onClose(id)
  }

  return (
    <S.Growl>
      {onClose && (
        <S.Close onClick={handleClose}>
          {closeButton || (
            <S.CloseContent>
              <Icon name="cross" size="xs" />
            </S.CloseContent>
          )}
        </S.Close>
      )}
      {children}
    </S.Growl>
  )
}

Growl.propTypes = {
  children: node.isRequired,
  /** node element replace right position  */
  closeButton: node,
  id: string,
  /** action called onclick on right position  */
  onClose: func
}
