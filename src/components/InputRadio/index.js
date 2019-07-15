import React, { forwardRef } from 'react'
import { bool, elementType, func, number, string } from 'prop-types'
import { useRadioState } from 'reakit/Radio'

import * as S from './styles'

export const InputRadio = forwardRef(({ name, order, value, ...rest }, ref) => {
  const radio = useRadioState()
  return (
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
})

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
  type: string,
  value: string
}
