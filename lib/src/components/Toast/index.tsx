import React from 'react'
import { toast as toastRHT } from 'react-hot-toast'
import type { ToastPosition } from 'react-hot-toast'

import type { TextProps } from '@/components/Text'
import { classNames } from '@/utils'

import { Growl } from './components/Growl'
import { Snackbar, SnackbarAction } from './components/Snackbar'
import toastStyles from './toast.module.scss'
import type { ToastOptions } from './types'

const cx = classNames(toastStyles)

const Title: React.FC<TextProps> = ({ children, ...rest }) => (
  <p className={cx('title', rest.className)} {...rest}>
    {children}
  </p>
)

export const toast = (component: JSX.Element, options?: ToastOptions) => {
  const name =
    typeof component === 'string'
      ? undefined
      : component?.type?.displayName || component?.type?.name
  const position = (name === 'Growl' ? 'top-right' : 'bottom-center') as ToastPosition

  const toastOptions = {
    duration: 7000,
    position,
    ...options,
  }

  return toastRHT(component, toastOptions)
}

export { Toaster as Notifications } from 'react-hot-toast'
export const Toast = { Growl, Snackbar, SnackbarAction, Title }
