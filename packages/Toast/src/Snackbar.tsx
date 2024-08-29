import React from 'react'
import { CloseButton } from '@welcome-ui/close-button'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { Variant } from './index'

export interface SnackbarOptions {
  variant?: Variant
  onClose?: () => void
  hasCloseButton?: boolean
  icon?: string | JSX.Element
}

export type SnackbarProps = CreateWuiProps<'div', SnackbarOptions>

/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<'div', SnackbarProps>(
  ({ children, hasCloseButton = true, icon, onClose, variant = 'default', ...rest }, ref) => (
    <S.Snackbar hasCloseButton={hasCloseButton} icon={icon} ref={ref} variant={variant} {...rest}>
      <Box alignItems="center" display="flex">
        {children}
        {hasCloseButton && <CloseButton onClick={onClose} size="xs" />}
      </Box>
    </S.Snackbar>
  )
)

Snackbar.displayName = 'Snackbar'
