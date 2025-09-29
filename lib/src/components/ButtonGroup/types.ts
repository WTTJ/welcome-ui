import type { ButtonSize, ButtonVariant } from '@/components/Button/types'

export type ButtonGroupProps = {
  disabled?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export type ButtonGroupState = Pick<ButtonGroupProps, 'disabled' | 'size' | 'variant'>
