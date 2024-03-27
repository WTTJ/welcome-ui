import React from 'react'
import { Checkbox, CheckboxProps } from '@welcome-ui/checkbox'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

type Size = 'xs' | 'sm' | 'md'

export type ToggleOptions = Omit<
  CheckboxProps,
  | 'Component'
  | 'iconPlacement'
  | 'indeterminate'
  | 'hasIcon'
  | 'transparent'
  | 'isClearable'
  | 'theme'
> & {
  checkedIcon?: JSX.Element
  uncheckedIcon?: JSX.Element
  size?: Size
}
export type ToggleProps = CreateWuiProps<'input', ToggleOptions>

export const Toggle = forwardRef<'input', ToggleProps>(
  ({ checked, checkedIcon, onClick, size = 'xs', uncheckedIcon, ...rest }, ref) => {
    const hasIcon = checkedIcon && uncheckedIcon
    return (
      <S.Wrapper onClick={onClick}>
        {hasIcon && (
          <S.IconWrapper checked={checked} onClick={onClick} size={size}>
            {checked ? checkedIcon : uncheckedIcon}
          </S.IconWrapper>
        )}
        <Checkbox {...rest} Component={S.Toggle} checked={checked} ref={ref} size={size} />
      </S.Wrapper>
    )
  }
)

Toggle.displayName = 'Toggle'
