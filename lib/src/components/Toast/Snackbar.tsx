import { Box } from '@/Box'
import type { ButtonProps } from '@/Button'
import { Button } from '@/Button'
import { CloseButton } from '@/CloseButton'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'
import type { ToastVariant } from './theme'

export interface SnackbarOptions {
  /** add correct separator for call to action
   * use SnackbarAction
   */
  cta?: JSX.Element
  hasCloseButton?: boolean
  icon?: JSX.Element | null
  onClose?: () => void
  variant?: ToastVariant
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
