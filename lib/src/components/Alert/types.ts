import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { TextProps } from '@/components/Text/types'

import type { IconName } from '../Icon/types'

export type AlertProps = AlertOptions &
  ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement>

export type AlertTitleProps = TextProps & {
  hasCloseButton?: boolean
}

interface AlertOptions {
  closeButtonDataTestId?: string
  cta?: JSX.Element
  /**
   * add a close button with an onclick handleClose function
   */
  handleClose?: () => void
  icon?: IconName
  isFullWidth?: boolean
  size?: 'lg' | 'md'
  variant?: 'ai' | 'brand' | 'danger' | 'info' | 'success' | 'warning'
}
