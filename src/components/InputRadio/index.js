import React from 'react'
import { bool, elementType, func, number, string } from 'prop-types'
import { useRadioState } from 'reakit/Radio'

import { REFS_TYPE } from '../../utils'

import * as S from './styles'

export const InputRadio = ({ _ref, name, order, value, ...rest }) => {
  const radio = useRadioState()
  return (
    <S.InputRadio
      id={value}
      name={name}
      order={order}
      ref={_ref}
      value={value}
      {...rest}
      {...radio}
    />
  )
}

InputRadio.type = 'InputRadio'

InputRadio.propTypes = {
  _ref: REFS_TYPE,
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
