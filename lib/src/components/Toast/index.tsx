import React from 'react'
import type { ToastPosition } from 'react-hot-toast/headless'
import toastRHT, { useToaster } from 'react-hot-toast/headless'

import type { TextProps } from '@/components/Text'
import { classNames, useCreatePortal } from '@/utils'

import { Growl } from './components/Growl'
import { Snackbar, SnackbarAction } from './components/Snackbar'
import { ToastWrapper } from './components/ToastWrapper'
import toastStyles from './toast.module.scss'
import type { NotificationsProps, ToastOptions } from './types'

const cx = classNames(toastStyles)

export const Notifications: React.FC<NotificationsProps> = ({ pauseOnHover = true }) => {
  const createPortal = useCreatePortal()
  const { handlers, toasts } = useToaster()
  const { calculateOffset, endPause, startPause, updateHeight } = handlers

  const onMouseEnter = pauseOnHover ? startPause : undefined
  const onMouseLeave = pauseOnHover ? endPause : undefined

  return (
    <>
      {toasts.length > 0 &&
        createPortal(
          <div data-wui-persistent onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {toasts.map(toast => (
              <ToastWrapper
                calculateOffset={calculateOffset}
                key={toast.id}
                toast={toast}
                updateHeight={updateHeight}
              />
            ))}
          </div>
        )}
    </>
  )
}

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

export const remove = (id?: string) => {
  toastRHT.remove(id)
}

export const dismiss = (id?: string) => {
  toastRHT.dismiss(id)
}

export const Toast = { Growl, Snackbar, SnackbarAction, Title }
