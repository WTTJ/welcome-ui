import React from 'react'
import { string } from 'prop-types'

import * as S from './styles'

export const Cover = ({ src, ...rest }) => (
  <S.Cover {...rest}>
    <img src={src} />
  </S.Cover>
)

Cover.propTypes /* remove-proptypes */ = {
  src: string.isRequired
}
