import React, { Ref } from 'react'
import { IconWrapper } from '@welcome-ui/field'
import { ClearButton } from '@welcome-ui/clear-button'

import * as S from './styles'

export type Size = 'sm' | 'md' | 'lg'

export type IconPlacement = 'right' | 'left'

export interface CustomInputProps {
  focused?: 'date' | 'time'
  handleBlur?: () => void
  handleFocus?: () => void
  icon?: React.FC
  iconPlacement?: IconPlacement
  value?: string
  onReset?: () => void
  size?: Size
  inputRef?: Ref<HTMLInputElement>
}

const CustomInput: React.FC<CustomInputProps> = props => {
  const {
    focused,
    handleBlur,
    handleFocus,
    icon,
    iconPlacement,
    inputRef,
    onReset,
    size,
    value,
    ...rest
  } = props

  return (
    <S.CustomInput
      focused={focused}
      icon={icon}
      iconPlacement={iconPlacement}
      onBlur={handleBlur}
      onFocus={handleFocus}
      size={size}
    >
      {icon && (
        <IconWrapper iconPlacement={iconPlacement} size={size}>
          {icon}
        </IconWrapper>
      )}
      <input ref={inputRef} value={value} {...rest} />
      {value && (
        <IconWrapper iconPlacement="right" size={size}>
          <ClearButton aria-label="clear date" onClick={onReset} />
        </IconWrapper>
      )}
    </S.CustomInput>
  )
}

CustomInput.displayName = 'CustomInput'

export const CustomInputMemoized = React.memo(CustomInput)
