import React, { PureComponent } from 'react'
import { func } from 'prop-types'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils'
import { IconWrapper } from '../Field/styles'

import * as S from './styles'

// eslint-disable-next-line react/prefer-stateless-function
export class CustomInput extends PureComponent {
  render() {
    const { handleBlur, handleFocus, icon, inputRef, size, ...rest } = this.props
    return (
      <S.CustomInput icon={icon} onBlur={handleBlur} onFocus={handleFocus} size={size}>
        {icon && <IconWrapper size={size}>{icon}</IconWrapper>}
        <input ref={inputRef} {...rest} />
      </S.CustomInput>
    )
  }
}

CustomInput.propTypes = {
  handleBlur: func,
  handleFocus: func,
  icon: COMPONENT_TYPE,
  inputRef: func,
  size: SIZES_TYPE
}
