import type { CheckboxProps } from '@/Checkbox'
import { Checkbox } from '@/Checkbox'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import type { Size } from './theme'

import * as S from './styles'

export type ToggleOptions = {
  checkedIcon?: JSX.Element
  size?: Size
  uncheckedIcon?: JSX.Element
} & Omit<
  CheckboxProps,
  'Component' | 'hasIcon' | 'iconPlacement' | 'indeterminate' | 'isClearable' | 'transparent'
>
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
        <Checkbox {...rest} checked={checked} Component={S.Toggle} ref={ref} size={size} />
      </S.Wrapper>
    )
  }
)

Toggle.displayName = 'Toggle'
