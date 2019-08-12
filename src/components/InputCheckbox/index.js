import React, { forwardRef } from 'react'
import { bool, elementType, func, number } from 'prop-types'

import { FINAL_FORM_INPUT_TYPES } from '../../utils'

import * as S from './styles'

export const InputCheckbox = forwardRef(
  (
    { checked, Component = S.InputCheckbox, name, onChange, order, setIsCheckboxChecked, ...rest },
    ref
  ) => {
    const toggle = () => setIsCheckboxChecked(!checked)
    const handleChange = e => onChange && onChange(e)

    return (
      <Component
        checked={checked}
        id={name}
        name={name}
        onChange={handleChange}
        onClick={toggle}
        order={order}
        ref={ref}
        {...rest}
      />
    )
  }
)

InputCheckbox.type = 'InputCheckbox'
InputCheckbox.displayName = 'InputCheckbox'

InputCheckbox.propTypes = {
  ...FINAL_FORM_INPUT_TYPES,
  Component: elementType,
  disabled: bool,
  onKeyDown: func,
  order: number
}
