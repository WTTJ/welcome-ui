import { oneOf } from 'prop-types'
import React from 'react'

import * as S from './styles'

export const ClearButton = ({ ...rest }) => (
  <S.ClearButton shape="circle" title="Clear" variant="tertiary" {...rest}>
    <S.Icon />
  </S.ClearButton>
)

ClearButton.propTypes = {
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

export const StyledClearButton = S.ClearButton
