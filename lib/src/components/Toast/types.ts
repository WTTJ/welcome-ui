import type { ComponentPropsWithRef, HTMLAttributes } from 'react'
import type { Toast, ToastPosition } from 'react-hot-toast/headless'

export type GrowlProps = ComponentPropsWithRef<'div'> &
  GrowlOptions &
  HTMLAttributes<HTMLDivElement>

export type SnackbarProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  SnackbarOptions

export type ToastOptions = {
  duration?: number
  id?: string
  onClose?: () => void
  position?: ToastPosition
}

export type ToastVariant = 'ai' | 'beige' | 'danger' | 'info' | 'success' | 'warning'

export type ToastWrapperProps = {
  toast: CustomToastOptions & Toast
  updateHeight: (toastId: string, height: number) => void
}

type CustomToastOptions = {
  onClose?: () => void
}

interface GrowlOptions {
  'data-testid'?: string
  hasCloseButton?: boolean
  hideIcon?: boolean
  onClose?: () => void
  variant?: ToastVariant
}

interface SnackbarOptions {
  /** add correct separator for call to action
   * use SnackbarAction
   */
  cta?: JSX.Element
  hasCloseButton?: boolean
  hideIcon?: boolean
  onClose?: () => void
  variant?: ToastVariant
}
