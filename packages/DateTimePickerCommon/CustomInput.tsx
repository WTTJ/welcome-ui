import React from 'react'
import { IconWrapper } from '@welcome-ui/field'
import { ClearButton } from '@welcome-ui/clear-button'
import { CreateWuiProps } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'

import * as S from './styles'

export type Focused = 'date' | 'time' | null
export type Icon = JSX.Element
export type IconPlacement = 'right' | 'left'

export interface CustomInputOptions {
  focused: Focused
  handleBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
  handleFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  icon?: Icon
  iconPlacement?: IconPlacement
  inputRef: React.Ref<HTMLInputElement>
  onReset?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: DefaultFieldStylesProps['size']
  value?: string | null
}

export type CustomInputProps = CreateWuiProps<'div', CustomInputOptions>

// eslint-disable-next-line react/prefer-stateless-function
export const CustomInput: React.FC<CustomInputProps> = ({
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
}) => {
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
      <input value={value} {...rest} ref={inputRef} />
      {value && (
        <IconWrapper iconPlacement="right" size={size}>
          <ClearButton aria-label="clear date" onClick={onReset} />
        </IconWrapper>
      )}
    </S.CustomInput>
  )
}
