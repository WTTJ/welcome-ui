import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import { TextProps } from '@welcome-ui/text'
import toastRHT, { ToastPosition, useToaster } from 'react-hot-toast/headless'

import { ToastWrapper } from './ToastWrapper'
import { Growl } from './Growl'
import { Snackbar } from './Snackbar'
import * as S from './styles'

export type Variant = 'default' | 'error' | 'warning' | 'info' | 'success'

type NotificationsProps = { pauseOnHover?: boolean }

type ToastOptions = {
  duration?: number
  position?: ToastPosition
}

export const Notifications: React.FC<NotificationsProps> = ({ pauseOnHover = true }) => {
  const themeContext = useContext(ThemeContext)
  const { handlers, toasts } = useToaster()
  const { calculateOffset, endPause, startPause, updateHeight } = handlers

  const onMouseEnter = pauseOnHover ? startPause : undefined
  const onMouseLeave = pauseOnHover ? endPause : undefined

  return (
    <ThemeProvider theme={themeContext}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {toasts.map(toast => (
          <ToastWrapper
            calculateOffset={calculateOffset}
            key={toast.id}
            toast={toast}
            updateHeight={updateHeight}
          />
        ))}
      </div>
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

  toastRHT(component, toastOptions)
}

/**
 * @deprecated use directly `toast` function instead
 */
export const useToast = () => toast

export const Toast = { Title, Growl, Snackbar }
