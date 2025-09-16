import type { CheckboxCheckOptions } from '@ariakit/react'
import type { ComponentPropsWithRef, InputHTMLAttributes } from 'react'

export type ToggleProps = Omit<
  CheckboxCheckOptions<'input'> &
    ComponentPropsWithRef<'input'> &
    InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  ToggleOptions & {
    className?: string
  }

type Size = 'md' | 'sm' | 'xs'

interface ToggleOptions {
  checkedIcon?: JSX.Element
  size?: Size
  uncheckedIcon?: JSX.Element
}
