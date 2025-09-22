import type {
  ComponentPropsWithRef,
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
} from 'react'

import type { TextProps } from '@/components/Text/types'

export type AlertProps = AlertOptions &
  ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement>

export type AlertTitleProps = TextProps & {
  hasCloseButton?: boolean
}

export type CloneActionsReturns = ReactElement<unknown, JSXElementConstructor<AlertProps> | string>

interface AlertOptions {
  closeButtonDataTestId?: string
  cta?: JSX.Element
  dataTestId?: string
  /**
   * @description add a close button with an onclick handleClose function
   */
  handleClose?: () => void
  /**
   * @description you can remove the icon by setting this prop to false
   * by default the icon is shown unless the variant is 'beige'
   */
  hideIcon?: boolean
  isFullWidth?: boolean
  size?: 'md' | 'sm'
  variant?: 'ai' | 'beige' | 'danger' | 'info' | 'success' | 'warning'
}
