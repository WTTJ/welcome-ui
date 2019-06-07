import React from 'react'
import { createPortal } from 'react-dom'
import { node } from 'prop-types'

import * as S from './styles'

export const GrowlContainer = ({ content }) => {
  return createPortal(
    <S.GrowlContainer>
      {React.Children.map(content, child =>
        React.cloneElement(child, { key: `growl-${content.length}` })
      )}
    </S.GrowlContainer>,
    document.body
  )
}

GrowlContainer.propTypes = {
  content: node.isRequired
}
