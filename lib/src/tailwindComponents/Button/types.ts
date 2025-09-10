import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import type {
  ButtonShapes,
  ButtonSizes,
  ButtonVariants,
  PolymorphicProps,
} from '../../tailwindTheme/types'

export type ButtonProps<T extends React.ElementType> = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  PolymorphicProps<T> & {
    children?: ReactNode
    className?: string
    ref?: React.Ref<HTMLButtonElement>
    shape?: ButtonShapes
    size?: ButtonSizes
    style?: CSSProperties
    variant?: ButtonVariants
  }
