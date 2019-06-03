import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'

import { StyledInputCheckbox } from '../InputCheckbox/styles'

export const InputRadio = memo(
  ({ checked, groupName, name, onBlur, onFocus, order = -1, size = 'md' }) => {
    const inputEl = useRef()

    const onClick = () => inputEl.current.click()

    return (
      <StyledInputCheckbox
        checked={checked}
        onClick={onClick}
        order={order}
        size={size}
        type="radio"
      >
        <input
          defaultChecked={checked}
          id={name}
          name={groupName}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={inputEl}
          type="radio"
        />
      </StyledInputCheckbox>
    )
  }
)

InputRadio.propTypes = {
  checked: PropTypes.bool,
  groupName: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  order: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}
