import React, { forwardRef } from 'react'

import { DefaultFieldStylesProps, FIELD_ICON_SIZE } from '../../utils/field-styles'

import * as S from './styles'

import { IconGroupWrapper, IconWrapper } from '@/Field'
import { ClearButton } from '@/ClearButton'

export type Focused = 'date' | 'time' | null
export type Icon = JSX.Element
export type IconPlacement = 'right' | 'left'

export interface CustomInputOptions {
  focused: Focused
  handleBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
  handleFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  icon?: Icon
  iconPlacement?: IconPlacement
  onReset?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: DefaultFieldStylesProps['size']
  value?: string | null
}

export type CustomInputProps = Omit<React.ComponentProps<'input'>, keyof CustomInputOptions> &
  CustomInputOptions

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    { focused, handleBlur, handleFocus, icon, iconPlacement, onReset, size, value, ...rest },
    ref
  ) => {
    const iconSize = FIELD_ICON_SIZE[size]

    return (
      <S.CustomInput focused={focused} onBlur={handleBlur} onFocus={handleFocus}>
        <input value={value} {...rest} ref={ref} />
        {icon && iconPlacement !== 'right' && (
          <IconWrapper iconPlacement={iconPlacement} size={iconSize}>
            {React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconWrapper>
        )}
        {value && (
          <IconGroupWrapper size={iconSize}>
            <ClearButton aria-label="clear date" onClick={onReset} />
            {iconPlacement === 'right' &&
              React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconGroupWrapper>
        )}
      </S.CustomInput>
    )
  }
)

CustomInput.displayName = 'CustomInput'
