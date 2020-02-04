import React, { cloneElement, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import toast from 'toasted-notes'

import * as S from './styles'

export function useToast() {
  const themeContext = useContext(ThemeContext)

  function createToast(children, options) {
    const toastOptions = {
      position: 'bottom',
      duration: 3000,
      ...options
    }

    const isBottomPosition = toastOptions.position.startsWith('bottom')

    if (children) {
      toast.notify(
        ({ onClose }) => {
          return (
            <ThemeProvider theme={themeContext}>
              <S.Toast isBottom={isBottomPosition}>
                {cloneElement(children, {
                  ...children.props,
                  onClose: onClose
                })}
              </S.Toast>
            </ThemeProvider>
          )
        },
        { ...toastOptions }
      )
    }
  }

  return createToast
}

export * from './Growl'
export * from './Snackbar'
