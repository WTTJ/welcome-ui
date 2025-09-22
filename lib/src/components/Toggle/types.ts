import type { CheckboxCheckOptions } from '@ariakit/react'
import type { ComponentPropsWithRef, InputHTMLAttributes } from 'react'

export type ToggleProps = Omit<
  CheckboxCheckOptions<'input'> &
    ComponentPropsWithRef<'input'> &
    InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  ToggleOptions

interface ToggleOptions {
  checkedIcon?: JSX.Element
  size?: 'md' | 'sm' | 'xs'
  uncheckedIcon?: JSX.Element
}
