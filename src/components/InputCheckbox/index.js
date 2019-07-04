import React from 'react'
import { bool, elementType, func, number, string } from 'prop-types'

import { REFS_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const InputCheckbox = ({
  _ref,
  autoFocus,
  Component = S.Checkbox,
  checked,
  disabled,
  name,
  onBlur,
  onKeyDown,
  onChange,
  onFocus,
  order,
  type = 'checkbox'
}) => {
  const handleChange = () => {}

  return (
    <Component checked={checked} disabled={disabled} order={order} type={type}>
      <input
        autoFocus={autoFocus}
        checked={checked}
        disabled={disabled}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onClick={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        ref={_ref}
        type="checkbox"
      />
    </Component>
  )
}

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
  type: string
}
