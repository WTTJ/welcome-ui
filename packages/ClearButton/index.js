import { oneOf } from 'prop-types'
import React from 'react'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'

export const ClearButton = ({ size = 'xs', ...rest }) => (
  <S.ClearButton shape="square" size={size} title="Clear" variant="quaternary" {...rest}>
    <CrossIcon size={size} />
  </S.ClearButton>
)

ClearButton.propTypes = {
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

export const StyledClearButton = S.ClearButton
