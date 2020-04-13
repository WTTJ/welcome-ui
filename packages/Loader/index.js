import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'

import * as S from './styles'

export const Loader = forwardRef(({ color, dataTestId, size = 'sm', ...rest }, ref) => (
  <S.LoaderWrapper data-testid={dataTestId} ref={ref} {...rest}>
    <S.LoadingDot backgroundColor={color} shape="circle" size={size} />
    <S.LoadingDot backgroundColor={color} shape="circle" size={size} />
    <S.LoadingDot backgroundColor={color} shape="circle" size={size} />
  </S.LoaderWrapper>
))

Loader.displayName = 'Loader'

Loader.propTypes = {
  color: string.isRequired,
  size: oneOf('sm', 'md', 'lg')
}
