import { cloneElement } from 'react'
import { Toaster, toast as toastRHT } from 'react-hot-toast'
import type { ToastPosition } from 'react-hot-toast'

import type { TextProps } from '@/components/Text/types'
import { classNames } from '@/utils'

import { Growl } from './components/Growl'
import { Snackbar, SnackbarAction } from './components/Snackbar'
import toastStyles from './toast.module.scss'
import type { ToastOptions } from './types'

const cx = classNames(toastStyles)

const Title = ({ children, className, ...rest }: TextProps) => (
  <p className={cx('title', className)} {...rest}>
    {children}
  </p>
)

export const toast = (component: JSX.Element, options?: ToastOptions) => {
  const name = 'type' in component ? component.type.displayName || component.type.name : undefined
  const position = (name === 'Growl' ? 'top-right' : 'bottom-center') as ToastPosition

  const onClose = () => {
    if (options.onClose) options.onClose()
    toastRHT.dismiss(options.id)
  }

  const toastOptions = {
    duration: 7000,
    position,
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: 0,
    },
    ...options,
  }

  return toastRHT(cloneElement(component, { onClose }), toastOptions)
}

export const Toast = Object.assign(Toaster, {
  Growl,
  Snackbar,
  SnackbarAction,
  Title,
})
