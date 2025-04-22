import type { ToastPosition } from 'react-hot-toast/headless'

import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import React, { useContext } from 'react'
import toastRHT, { useToaster } from 'react-hot-toast/headless'

import type { TextProps } from '@/Text'

import type { GrowlProps } from './Growl'
import type { SnackbarProps } from './Snackbar'

import { useCreatePortal } from '../../utils/use-create-portal'
import { Growl } from './Growl'
import { Snackbar, SnackbarAction } from './Snackbar'
import * as S from './styles'
import { ToastWrapper } from './ToastWrapper'

export type ToastOptions = {
  duration?: number
  id?: string
  onClose?: () => void
  position?: ToastPosition
}

const toastWrapperClassName = 'wui-toast-wrapper'

export const selectToastsInDocument = () =>
  document.querySelectorAll(`.${toastWrapperClassName} > *`)

type NotificationsProps = { pauseOnHover?: boolean }

export const Notifications: React.FC<NotificationsProps> = ({ pauseOnHover = true }) => {
  const themeContext = useContext(ThemeContext)
  const createPortal = useCreatePortal()
  const { handlers, toasts } = useToaster()
  const { calculateOffset, endPause, startPause, updateHeight } = handlers

  const onMouseEnter = pauseOnHover ? startPause : undefined
  const onMouseLeave = pauseOnHover ? endPause : undefined

  if (toasts.length === 0) {
    return null
  }

  return (
    <ThemeProvider theme={themeContext || {}}>
      {
        createPortal(
          <div
            className={toastWrapperClassName}
            data-wui-persistent
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {toasts.map(toast => (
              <ToastWrapper
                calculateOffset={calculateOffset}
                key={toast.id}
                toast={toast}
                updateHeight={updateHeight}
              />
            ))}
          </div>
        ) as React.ReactNode
      }
    </ThemeProvider>
  )
}

const Title: React.FC<TextProps> = ({ children, ...rest }) => (
  <S.Title {...rest}>{children}</S.Title>
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
export type { GrowlProps, SnackbarProps }
