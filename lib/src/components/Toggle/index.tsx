import * as S from './styles'
import { Size } from './theme'

import { Checkbox, CheckboxProps } from '@/Checkbox'
import { CreateWuiProps, forwardRef } from '@/System'

export type ToggleOptions = Omit<
  CheckboxProps,
  'Component' | 'iconPlacement' | 'indeterminate' | 'hasIcon' | 'transparent' | 'isClearable'
> & {
  checkedIcon?: JSX.Element
  size?: Size
  uncheckedIcon?: JSX.Element
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
