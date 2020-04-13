import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'

import * as S from './styles'

export const Loader = forwardRef(({ color, size = 'sm', ...rest }, ref) => {
  return (
    <S.LoaderWrapper ref={ref} {...rest}>
      <S.LoadingDot backgroundColor={color} shape="circle" size={size} />
      <S.LoadingDot backgroundColor={color} shape="circle" size={size} />
      <S.LoadingDot backgroundColor={color} shape="circle" size={size} />
    </S.LoaderWrapper>
  )
})

Loader.displayName = 'Loader'

Loader.propTypes = {
  color: string.isRequired,
  size: oneOf('sm', 'md', 'lg')
}
