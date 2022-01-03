import React from 'react'
import { ClearButton } from '@welcome-ui/clear-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { Title, TitleOptions } from './Title'
import * as S from './styles'

import { Variant } from '.'

export interface SnackbarOptions {
  variant?: Variant
  onClose: () => void
  hasCloseButton?: boolean
}

export type SnackbarProps = CreateWuiProps<'div', SnackbarOptions & TitleOptions>

export const Snackbar = forwardRef<'div', SnackbarProps>(
  ({ children, hasCloseButton = true, icon, onClose, variant = 'info', ...rest }, ref) => (
    <S.Snackbar hasCloseButton={hasCloseButton} ref={ref} variant={variant} {...rest}>
      <Title icon={icon} variant={variant}>
        <>
          {children}
          {hasCloseButton && <ClearButton onClick={onClose} />}
        </>
      </Title>
    </S.Snackbar>
  )
)

Snackbar.displayName = 'Snackbar'
