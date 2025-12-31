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

export type ToastVariant = 'error' | 'info' | 'success' | 'warning'

export type ToastWrapperProps = {
  toast: CustomToastOptions & Toast
  updateHeight: (toastId: string, height: number) => void
}

type CustomToastOptions = {
  onClose?: () => void
}

interface GrowlOptions {
  cta?: JSX.Element
  duration?: ToastOptions['duration']
  hasCloseButton?: boolean
  onClose?: ToastOptions['onClose']
  showProgressBar?: boolean
  variant?: ToastVariant
}

interface SnackbarOptions {
  cta?: JSX.Element
  duration?: ToastOptions['duration']
  hasCloseButton?: boolean
  hideProgressBar?: boolean
  onClose?: ToastOptions['onClose']
  variant?: ToastVariant
}
