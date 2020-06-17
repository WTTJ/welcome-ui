import React, { forwardRef } from 'react'
import { number, oneOf, oneOfType, string } from 'prop-types'
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
  size: oneOfType([oneOf(['xs', 'sm', 'md', 'lg']), number, string])
}
