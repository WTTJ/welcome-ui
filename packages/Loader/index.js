import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

export const Loader = forwardRef(({ color, dataTestId, size = 'sm', ...rest }, ref) => (
  <Box color={color} data-testid={dataTestId} display="flex" ref={ref}>
    <S.LoadingDot shape="circle" size={size} {...rest} />
    <S.LoadingDot shape="circle" size={size} {...rest} />
    <S.LoadingDot shape="circle" size={size} {...rest} />
  </Box>
))

Loader.displayName = 'Loader'

Loader.propTypes = {
  color: string,
  size: oneOf(['xs', 'sm', 'md', 'lg'])
}
