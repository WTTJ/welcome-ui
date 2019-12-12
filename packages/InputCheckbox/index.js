import React, { forwardRef } from 'react'
import { bool, elementType, func, string } from 'prop-types'

import { FINAL_FORM_INPUT_TYPES } from '../Core/utils/propTypes'

import * as S from './styles'

export const InputCheckbox = forwardRef(
  ({ checked = false, Component = S.InputCheckbox, dataTestId, name, onChange, ...rest }, ref) => {
    const handleChange = e => {
      e.target.checked = !e.target.checked
      onChange && onChange(e)
    }

    return (
      <Component
        checked={checked}
        data-testid={dataTestId}
        id={name}
        name={name}
        onChange={handleChange}
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
  checked: bool,
  Component: elementType,
  name: string.isRequired,
  onChange: func.isRequired
}
