import React, { forwardRef } from 'react'
import { bool, elementType, func, number, object, string } from 'prop-types'

import * as S from './styles'

export const InputRadio = forwardRef(
  ({ name, order, radio, setIsCheckboxChecked, value, ...rest }, ref) => (
    // setIsCheckboxChecked is here to remove it from the DOM element
    <S.InputRadio
      id={value}
      name={name}
      order={order}
      ref={ref}
      value={value}
      {...rest}
      {...radio}
    />
  )
)

InputRadio.type = 'InputRadio'
InputRadio.displayName = 'InputRadio'

InputRadio.propTypes = {
  autoFocus: bool,
  checked: bool,
  Component: elementType,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  order: number,
  radio: object,
  setIsCheckboxChecked: func,
  type: string,
  value: string
}
