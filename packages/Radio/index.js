import React, { forwardRef } from 'react'
import { bool, elementType, func, number, oneOf, oneOfType, string } from 'prop-types'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'

import { DIRECTIONS_TYPE } from '../../src/utils/propTypes'

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
    <Label
      checkableField
      disabled={disabled}
      disabledIcon={disabledIcon}
      flexDirection="column"
      maxWidth={maxWidth}
      onClick={handleClick}
      variant={variant}
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
        <S.Content>{label}</S.Content>
      </S.Wrapper>
      {hint && <Hint marginTop="0">{hint}</Hint>}
    </Label>
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
  maxWidth: oneOfType([number, string]),
  name: string,
  onChange: func,
  onClick: func,
  value: string,
  variant: string
}
