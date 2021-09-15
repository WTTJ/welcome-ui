import React from 'react'
import { oneOf } from 'prop-types'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'

export const ClearButton = ({ size = 'xs', ...rest }) => (
  <S.ClearButton shape="circle" size={size} title="Clear" variant="tertiary" {...rest}>
    <CrossIcon size={size} />
  </S.ClearButton>
)

ClearButton.propTypes /* remove-proptypes */ = {
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

// Nested exports
export const StyledClearButton = S.ClearButton
