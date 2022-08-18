import React from 'react'
import { CloseButton } from '@welcome-ui/close-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { TextOptions, Toast, Variant } from './index'

export interface SnackbarOptions {
  variant?: Variant
  onClose: () => void
  hasCloseButton?: boolean
}

export type SnackbarProps = CreateWuiProps<'div', SnackbarOptions & TextOptions>

/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<'div', SnackbarProps>(
  ({ children, hasCloseButton = true, icon, onClose, variant = 'default', ...rest }, ref) => (
    <S.Snackbar hasCloseButton={hasCloseButton} icon={icon} ref={ref} variant={variant} {...rest}>
      <Toast.Text icon={icon} variant={variant}>
        <>
          {children}
          {hasCloseButton && <CloseButton onClick={onClose} size="xs" />}
        </>
      </Toast.Text>
    </S.Snackbar>
  )
)

Snackbar.displayName = 'Snackbar'
