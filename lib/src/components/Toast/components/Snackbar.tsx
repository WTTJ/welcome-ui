import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'
import { CloseButton } from '@old/CloseButton'

import toastStyles from '../toast.module.scss'
import type { SnackbarProps } from '../types'

const cx = classNames(toastStyles)
/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<'div', SnackbarProps>(
  ({ children, cta, hasCloseButton = true, icon, onClose, variant = 'default', ...rest }, ref) => (
    <S.Snackbar icon={icon} ref={ref} variant={variant} {...rest}>
      <div style={{ alignItems: 'center', display: 'flex', gap: 'sm' }}>
        {children}
        {cta ? <div className={cx('snackbar-separator', `${variant}`)}>{cta}</div> : null}
        {hasCloseButton ? <CloseButton onClick={onClose} size="xs" /> : null}
      </div>
    </S.Snackbar>
  )
)

export const SnackbarAction = forwardRefWithAs<ButtonProps, 'button'>((props, ref) => (
  <Button ref={ref} size="xs" variant="ghost" {...props} />
))

Snackbar.displayName = 'Snackbar'
