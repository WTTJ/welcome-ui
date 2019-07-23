import React, { PureComponent } from 'react'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils'
import { IconWrapper } from '../Field/styles'

import * as S from './styles'

// eslint-disable-next-line react/prefer-stateless-function
export class CustomInput extends PureComponent {
  render() {
    const { icon, size, ...rest } = this.props
    return (
      <S.CustomInput icon={icon} size={size}>
        {icon && <IconWrapper size={size}>{icon}</IconWrapper>}
        <input {...rest} />
      </S.CustomInput>
    )
  }
}

CustomInput.propTypes = {
  icon: COMPONENT_TYPE,
  size: SIZES_TYPE
}
