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
  size?: 'lg' | 'md' | 'sm'
  /**
   * If true, display an eye / eye-slash icon to toggle visibility.
   */
  withVisibilityIcon?: boolean
}
