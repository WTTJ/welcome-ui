import React from 'react'
import { bool, elementType, func, number, string } from 'prop-types'

import { REFS_TYPE } from '../../utils'

import * as S from './styles'

export const InputCheckbox = ({
  _ref,
  Component = S.InputCheckbox,
  name,
  order,
  value,
  ...rest
}) => <Component id={name} name={name} order={order} ref={_ref} {...rest} />

InputCheckbox.type = 'InputCheckbox'

InputCheckbox.propTypes = {
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
