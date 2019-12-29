import React, { forwardRef } from 'react'
import { bool, elementType, func, oneOf, string } from 'prop-types'

import { DIRECTIONS_TYPE, SIZES_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const RadioTab = forwardRef((props, ref) => {
  const {
    checked,
    dataTestId,
    disabled,
    disabledIcon,
    flexDirection,
    label,
    onChange,
    onClick,
    size,
    variant,
    ...rest
  } = props

  const handleClick = e => {
    e.stopPropagation()
    onClick && onClick(e)
    onChange && onChange(e)
  }

  return (
    <S.Label
      checkableField
      checked={checked}
      disabled={disabled}
      disabledIcon={disabledIcon}
      flexDirection={flexDirection}
      onClick={handleClick}
      size={size}
      variant={variant}
    >
      <S.Input>
        <S.Radio
          data-testid={dataTestId}
          disabled={disabled}
          label={label}
          ref={ref}
          variant={variant}
          {...rest}
        />
      </S.Input>
      <S.Content>{label}</S.Content>
    </S.Label>
  )
})

RadioTab.type = 'RadioTab'
RadioTab.displayName = 'RadioTab'

RadioTab.propTypes /* remove-proptypes */ = {
  checked: bool,
  disabled: bool,
  disabledIcon: elementType,
  flexDirection: oneOf(DIRECTIONS_TYPE),
  label: string,
  onChange: func,
  onClick: func,
  size: oneOf(SIZES_TYPE),
  variant: string
}
