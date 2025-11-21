import { cloneElement } from 'react'
import { Toaster, toast as toastRHT } from 'react-hot-toast'
import type { ToastPosition } from 'react-hot-toast'

import type { IconProps } from '@/components/Icon/types'
import type { TextProps } from '@/components/Text/types'
import { classNames } from '@/utils'

import { Growl, GrowlAction } from './components/Growl'
import { Snackbar, SnackbarAction } from './components/Snackbar'
import toastStyles from './toast.module.scss'
import type { ToastOptions, ToastVariant } from './types'

const cx = classNames(toastStyles)

export const ICON: Record<ToastVariant, IconProps['name']> = {
  error: 'exclamation-octagon',
  info: 'info-circle',
  success: 'check-circle',
  warning: 'exclamation-triangle',
}

const DURATION: Record<ToastVariant, number> = {
  error: 8000,
  info: 7000,
  success: 7000,
  warning: 8000,
}

const Title = ({ children, className, ...rest }: TextProps) => (
  <p className={cx('title', className)} {...rest}>
    {children}
  </p>
)

Title.displayName = 'Toast.Title'

export const toast = (component: JSX.Element, options?: ToastOptions) => {
  const name = 'type' in component ? component.type.displayName || component.type.name : undefined
  const position = (name === 'Growl' ? 'top-right' : 'bottom-center') as ToastPosition

  const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (options?.onClose) options.onClose()
    toastRHT.dismiss(options?.id)
  }

  const variant = component.props.variant || 'info'

  const toastOptions = {
    duration: DURATION[variant as ToastVariant],
    position,
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      maxWidth: '100%',
      padding: 0,
    },
    ...options,
  }

  return toastRHT(
    cloneElement(component, { duration: toastOptions.duration, onClose }),
    toastOptions
  )
}

Toaster.displayName = 'Toast'

export const Toast = Object.assign(Toaster, {
  Growl,
  GrowlAction,
  Snackbar,
  SnackbarAction,
  Title,
})
