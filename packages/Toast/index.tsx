import React, { cloneElement, useCallback, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import toast from 'toasted-notes'
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager'
import { CreateWuiProps } from '@welcome-ui/system'
import { VariantIcon } from '@welcome-ui/variant-icon'

import { Growl } from './Growl'
import { Snackbar } from './Snackbar'
import * as S from './styles'

export type Variant = 'error' | 'warning' | 'info' | 'success'

export interface CreateToastOptions {
  onClose?: () => void
}

export type UseToastReturn = (
  children: React.ReactNode,
  options?: MessageOptionalOptions & CreateToastOptions
) => void

export function useToast(): UseToastReturn {
  const themeContext = useContext(ThemeContext)

  const createToast = useCallback(
    (children, options = {}) => {
      const toastOptions = {
        position: 'bottom',
        duration: 5000,
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

const Title: React.FC<TitleProps> = ({ children, icon, variant = 'info', ...rest }) => (
  <S.Title variant={variant} {...rest}>
    <VariantIcon icon={icon} variant={variant} />
    {children}
  </S.Title>
)

export const Toast = { Title, Growl, Snackbar }
