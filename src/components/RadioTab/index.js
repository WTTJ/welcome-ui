import React, { forwardRef } from 'react'
import { bool, func, string } from 'prop-types'

import { SIZES_TYPE } from '../../utils'

import * as S from './styles'

export const RadioTab = forwardRef(
  (
    {
      autoFocus,
      checked,
      disabled,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      size = 'lg',
      value
    },
    ref
  ) => (
    <S.Input
      autoFocus={autoFocus}
      checked={checked}
      disabled={disabled}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      ref={ref}
      size={size}
      type="radio"
      value={value}
    />
  )
)

RadioTab.type = 'RadioTab'
RadioTab.displayName = 'RadioTab'

RadioTab.propTypes = {
  autoFocus: bool,
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  size: SIZES_TYPE,
  value: string
}
