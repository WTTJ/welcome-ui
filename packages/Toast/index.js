import React, { cloneElement, useCallback, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import toast from 'toasted-notes'

import { Growl } from './Growl'
import { Title } from './Title'
import { Snackbar } from './Snackbar'
import * as S from './styles'

export function useToast() {
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

      function onCloseToast(onClose) {
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

export const Toast = () => {}

Toast.Title = Title
Toast.Growl = Growl
Toast.Snackbar = Snackbar
