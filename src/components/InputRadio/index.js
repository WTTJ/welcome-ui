import React, { forwardRef } from 'react'
import { bool, elementType, func, number, object, string } from 'prop-types'

import * as S from './styles'

export const InputRadio = forwardRef(({ name, order, radio, value, ...rest }, ref) => (
  <S.InputRadio id={value} name={name} order={order} ref={ref} value={value} {...rest} {...radio} />
))

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
  type: string,
  value: string
}
