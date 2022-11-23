import React, { cloneElement, useCallback, useContext } from 'react'
import { ThemeContext, ThemeProvider } from 'styled-components'
import toast from 'toasted-notes'
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager'
import { TextProps } from '@welcome-ui/text'

import { Growl } from './Growl'
import { Snackbar } from './Snackbar'
import * as S from './styles'

export type Variant = 'default' | 'error' | 'warning' | 'info' | 'success'

export interface CreateToastOptions {
  onClose?: () => void
}

export type UseToastOptions = MessageOptionalOptions & CreateToastOptions
export type UseToastReturn = (children: JSX.Element, options?: UseToastOptions) => void

export function useToast(): UseToastReturn {
  const themeContext = useContext(ThemeContext)

  const createToast = useCallback(
    (children: JSX.Element, options: UseToastOptions = {}) => {
      const toastOptions = {
        position: 'bottom' as const,
        duration: 7000,
        ...options,
      }

      const isBottomPosition = toastOptions.position.startsWith('bottom')
      const customOnClose = toastOptions.onClose

      function onCloseToast(onClose: () => void) {
        // custom action onClose
        customOnClose && customOnClose()
        onClose()
      }

      if (children) {
        toast.notify(
          ({ onClose }) => {
            return (
              <ThemeProvider theme={themeContext}>
                <S.Toast isBottom={isBottomPosition}>
                  {cloneElement(children, {
                    ...children.props,
                    onClose: () => onCloseToast(onClose),
                  })}
                </S.Toast>
              </ThemeProvider>
            )
          },
          { ...toastOptions }
        )
      }
    },
    [themeContext]
  )

  return createToast
}

const Title: React.FC<TextProps> = ({ children, ...rest }) => (
  <S.Title {...rest}>{children}</S.Title>
)

export const Toast = { Title, Growl, Snackbar }
