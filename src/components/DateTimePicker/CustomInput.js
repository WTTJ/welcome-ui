import React, { PureComponent } from 'react'
import { func, oneOf, string } from 'prop-types'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils/propTypes'
import { IconWrapper } from '../Field/styles'
import { ClearButton } from '../ClearButton'

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
      onReset,
      size,
      value,
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
        <input ref={inputRef} value={value} {...rest} />
        {value && (
          <IconWrapper iconPlacement="right" size={size}>
            <ClearButton aria-label="clear date" onClick={onReset} />
          </IconWrapper>
        )}
      </S.CustomInput>
    )
  }
}

// eslint-disable-next-line react/static-property-placement
CustomInput.propTypes = {
  focused: oneOf('date', 'time', null),
  handleBlur: func,
  handleFocus: func,
  icon: COMPONENT_TYPE,
  iconPlacement: oneOf('right', 'left'),
  inputRef: func,
  onReset: func,
  size: SIZES_TYPE,
  value: string
}
