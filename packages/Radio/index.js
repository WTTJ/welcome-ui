import React, { forwardRef } from 'react'
import { bool, elementType, func, number, object, oneOf, oneOfType, string } from 'prop-types'

import { DIRECTIONS_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const Radio = forwardRef((props, ref) => {
  const {
    dataTestId,
    disabled,
    disabledIcon,
    flexDirection,
    hint,
    label,
    maxWidth,
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
    <S.Label
      checkableField
      disabled={disabled}
      disabledIcon={disabledIcon}
      flexDirection="column"
      maxWidth={maxWidth}
      onClick={handleClick}
      variant={variant}
      withHint={!!hint}
    >
      <S.Wrapper flexDirection={flexDirection}>
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
        <div>{label}</div>
      </S.Wrapper>
      {hint && <S.Hint>{hint}</S.Hint>}
    </S.Label>
  )
})

Radio.type = 'Radio'
Radio.displayName = 'Radio'

Radio.propTypes /* remove-proptypes */ = {
  disabled: bool,
  disabledIcon: elementType,
  flexDirection: oneOf(DIRECTIONS_TYPE),
  hint: string,
  label: string,
  maxWidth: oneOfType([number, object, string]),
  name: string,
  onChange: func,
  onClick: func,
  value: string,
  variant: string
}
