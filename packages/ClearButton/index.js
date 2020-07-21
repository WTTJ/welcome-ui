import { oneOf } from 'prop-types'
import React from 'react'

import * as S from './styles'

export const ClearButton = props => (
  <S.ClearButton shape="circle" title="Clear" variant="tertiary" {...props}>
    <S.Icon />
  </S.ClearButton>
)

ClearButton.propTypes /* remove-proptypes */ = {
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

// Nested exports
export const StyledClearButton = S.ClearButton
