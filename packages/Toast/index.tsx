import React, { cloneElement, useCallback, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import toast from 'toasted-notes'
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager'

import { Growl } from './Growl'
import { Title } from './Title'
import { Snackbar } from './Snackbar'
import * as S from './styles'

export type Variant = 'error' | 'warning' | 'info' | 'success'

export interface CreateToastOptions {
  onClose: () => void
}

export type UseToastReturn = (
  children: React.ReactNode,
  options: MessageOptionalOptions & CreateToastOptions
) => void

export function useToast(): UseToastReturn {
  const themeContext = useContext(ThemeContext)

  const createToast = useCallback(
    (children, options) => {
      const toastOptions = {
        position: 'bottom',
        duration: 5000,
        onClose: undefined,
        ...options
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
                    onClose: () => onCloseToast(onClose)
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

export const Toast = { Title, Growl, Snackbar }
