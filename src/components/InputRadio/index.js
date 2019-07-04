import React from 'react'
import { bool, func, number, string } from 'prop-types'

import { REFS_TYPE } from '../../utils/propTypes'
import * as S from '../InputCheckbox/styles'

export const InputRadio = ({
  _ref,
  autoFocus,
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onKeyDown,
  onFocus,
  order = -1,
  value
}) => (
  <S.Checkbox checked={checked} disabled={disabled} order={order} type="radio">
    <input
      autoFocus={autoFocus}
      checked={checked}
      disabled={disabled}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      ref={_ref}
      type="radio"
      value={value}
    />
  </S.Checkbox>
)

InputRadio.type = 'InputRadio'

InputRadio.propTypes = {
  _ref: REFS_TYPE,
  autoFocus: bool,
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  order: number,
  value: string
}
