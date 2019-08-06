import React, { PureComponent } from 'react'
import { func, oneOf } from 'prop-types'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils'
import { IconWrapper } from '../Field/styles'
import { Icon } from '../Icon'

import * as S from './styles'

// eslint-disable-next-line react/prefer-stateless-function
export class CustomInput extends PureComponent {
  render() {
    const {
      focused,
      handleBlur,
      handleFocus,
      icon,
      iconPlacement,
      inputRef,
      size,
      ...rest
    } = this.props
    return (
      <S.CustomInput
        focused={focused}
        icon={icon}
        iconPlacement={iconPlacement}
        onBlur={handleBlur}
        onFocus={handleFocus}
        size={size}
      >
        {icon && (
          <IconWrapper iconPlacement={iconPlacement} size={size}>
            {icon}
          </IconWrapper>
        )}
        <input ref={inputRef} {...rest} />
        <IconWrapper iconPlacement="right" size={size}>
          <Icon name="down" size="xs" />
        </IconWrapper>
      </S.CustomInput>
    )
  }
}

CustomInput.propTypes = {
  focused: oneOf('date', 'time', null),
  handleBlur: func,
  handleFocus: func,
  icon: COMPONENT_TYPE,
  iconPlacement: oneOf('right', 'left'),
  inputRef: func,
  size: SIZES_TYPE
}
