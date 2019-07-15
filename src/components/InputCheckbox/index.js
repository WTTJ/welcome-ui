import React, { forwardRef } from 'react'
import { bool, elementType, func, number, string } from 'prop-types'

import * as S from './styles'

export const InputCheckbox = forwardRef(
  ({ Component = S.InputCheckbox, name, order, ...rest }, ref) => (
    <Component id={name} name={name} order={order} ref={ref} {...rest} />
  )
)

InputCheckbox.type = 'InputCheckbox'
InputCheckbox.displayName = 'InputCheckbox'

InputCheckbox.propTypes = {
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
  type: string,
  value: string
}
