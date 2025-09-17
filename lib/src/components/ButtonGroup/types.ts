import type { ButtonSize, ButtonVariant } from '@/components/Button/types'
import type { PolymorphicProps } from '@/theme/types'

export type ButtonGroupProps<T extends React.ElementType = 'div'> = PolymorphicProps<T> & {
  disabled?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export type ButtonGroupState = Pick<ButtonGroupProps, 'disabled' | 'size' | 'variant'>
