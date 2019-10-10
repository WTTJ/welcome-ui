import React, { forwardRef } from 'react'
import { bool, elementType, string } from 'prop-types'

import { Label } from '../Label'
import { RadioTab } from '../RadioTab'

import * as S from './styles'

export const InputRadio = forwardRef((props, ref) => {
  const { dataTestId, disabled, disabledIcon, label, tabs, variant, ...rest } = props
  const Component = tabs ? RadioTab : S.InputRadio
  return (
    <Label checkableField disabled={disabled} disabledIcon={disabledIcon} variant={variant}>
      <S.Input>
        <Component
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
  as: elementType,
  dataTestId: string,
  disabled: bool,
  disabledIcon: elementType,
  label: string,
  tabs: bool,
  variant: string
}
