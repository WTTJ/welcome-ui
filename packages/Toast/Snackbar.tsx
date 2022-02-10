import React from 'react'
import { ClearButton } from '@welcome-ui/clear-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { TitleOptions, Toast, Variant } from './index'

export interface SnackbarOptions {
  variant?: Variant
  onClose: () => void
  hasCloseButton?: boolean
}

export type SnackbarProps = CreateWuiProps<'div', SnackbarOptions & TitleOptions>

/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<'div', SnackbarProps>(
  ({ children, hasCloseButton = true, icon, onClose, variant = 'info', ...rest }, ref) => (
    <S.Snackbar hasCloseButton={hasCloseButton} ref={ref} variant={variant} {...rest}>
      <Toast.Title icon={icon} variant={variant}>
        <>
          {children}
          {hasCloseButton && <ClearButton onClick={onClose} />}
        </>
      </Toast.Title>
    </S.Snackbar>
  )
)

Snackbar.displayName = 'Snackbar'
