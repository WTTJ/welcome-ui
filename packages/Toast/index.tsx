import React, { cloneElement, useCallback, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import toast from 'toasted-notes'
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager'
import { CreateWuiProps } from '@welcome-ui/system'

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
        duration: 100000000,
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

export interface TitleOptions {
  variant?: Variant
  icon?: JSX.Element
}

export type TitleProps = CreateWuiProps<'div', TitleOptions>

const Title: React.FC<TitleProps> = ({ children, variant = 'default', ...rest }) => (
  <S.Title variant={variant} {...rest}>
    {children}
  </S.Title>
)
export interface TextOptions {
  variant?: Variant
  icon?: JSX.Element
}

export type TextProps = CreateWuiProps<'div', TextOptions>

const Text: React.FC<TextProps> = ({ children, variant = 'default', ...rest }) => (
  <S.Text variant={variant} {...rest}>
    {children}
  </S.Text>
)

export const Toast = { Title, Text, Growl, Snackbar }
