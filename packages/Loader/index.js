import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

export const Loader = forwardRef(
  ({ color = 'currentColor', dataTestId, size = 'sm', ...rest }, ref) => (
    <Box data-testid={dataTestId} display="flex" ref={ref}>
      <S.LoadingDot backgroundColor={color} shape="circle" size={size} {...rest} />
      <S.LoadingDot backgroundColor={color} shape="circle" size={size} {...rest} />
      <S.LoadingDot backgroundColor={color} shape="circle" size={size} {...rest} />
    </Box>
  )
)

Loader.displayName = 'Loader'

Loader.propTypes = {
  color: string.isRequired,
  size: oneOf(['sm', 'md', 'lg'])
}
