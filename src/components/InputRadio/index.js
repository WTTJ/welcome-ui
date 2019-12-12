import React, { forwardRef } from 'react'
import { bool, elementType, func, oneOf, string } from 'prop-types'

import { DIRECTIONS_TYPE } from '../../utils/propTypes'
import { Label } from '../Label'

import * as S from './styles'

export const InputRadio = forwardRef((props, ref) => {
  const {
    dataTestId,
    disabled,
    disabledIcon,
    flexDirection,
    label,
    onChange,
    onClick,
    variant,
    ...rest
  } = props

  const handleClick = e => {
    e.stopPropagation()
    onClick && onClick(e)
    onChange && onChange(e)
  }

  return (
    <Label
      checkableField
      disabled={disabled}
      disabledIcon={disabledIcon}
      flexDirection={flexDirection}
      onClick={handleClick}
      variant={variant}
    >
      <S.Input>
        <S.InputRadio
          data-testid={dataTestId}
          disabled={disabled}
          label={label}
          ref={ref}
          variant={variant}
          {...rest}
        />
      </S.Input>
      <S.Content>{label}</S.Content>
    </Label>
  )
})

InputRadio.type = 'InputRadio'
InputRadio.displayName = 'InputRadio'

InputRadio.propTypes = {
  disabled: bool,
  disabledIcon: elementType,
  flexDirection: oneOf(DIRECTIONS_TYPE),
  label: string,
  name: string,
  onChange: func,
  onClick: func,
  value: string,
  variant: string
}
