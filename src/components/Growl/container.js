import React from 'react'
import { createPortal } from 'react-dom'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

export const GrowlContainer = ({ content, position = 'top-right' }) =>
  createPortal(
    <S.GrowlContainer position={position}>
      {React.Children.map(content, child =>
        React.cloneElement(child, { key: `growl-${content.length}` })
      )}
    </S.GrowlContainer>,
    document.body
  )

GrowlContainer.propTypes = {
  content: node.isRequired,
  position: oneOf(Object.keys(S.POSITIONS))
}
