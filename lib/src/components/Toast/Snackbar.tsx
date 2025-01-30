import React from 'react'

import * as S from './styles'

import { Box } from '@/Box'
import { Button, ButtonProps } from '@/Button'
import { CloseButton } from '@/CloseButton'
import { CreateWuiProps, forwardRef } from '@/System'

export interface SnackbarOptions {
  /** add correct separator for call to action
   * use SnackbarAction
   */
  cta?: JSX.Element
  hasCloseButton?: boolean
  icon?: JSX.Element | null
  onClose?: () => void
  variant?: 'default' | 'info' | 'success' | 'danger' | 'warning'
}

export type SnackbarProps = CreateWuiProps<'div', SnackbarOptions>

/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<'div', SnackbarProps>(
  ({ children, cta, hasCloseButton = true, icon, onClose, variant = 'default', ...rest }, ref) => (
    <S.Snackbar icon={icon} ref={ref} variant={variant} {...rest}>
      <Box alignItems="center" display="flex" gap="sm">
        {children}
        {cta && <S.SnackbarSeparator variant={variant}>{cta}</S.SnackbarSeparator>}
        {hasCloseButton && <CloseButton onClick={onClose} size="xs" />}
      </Box>
    </S.Snackbar>
  )
)

export const SnackbarAction = forwardRef<'button', ButtonProps>((props, ref) => (
  <Button flexShrink={0} ref={ref} size="xs" variant="ghost" {...props} />
))

Snackbar.displayName = 'Snackbar'
