import React from 'react'
import { ClearButton } from '@welcome-ui/clear-button'

import { Title, TitleOptions } from './Title'
import * as S from './styles'

export interface SnackbarOptions {
  onClose: () => void
}

export type SnackbarProps = SnackbarOptions & TitleOptions

export const Snackbar: React.FC<SnackbarProps> = ({
  children,
  icon,
  onClose,
  variant = 'info',
  ...rest
}) => (
  <S.Snackbar variant={variant} {...rest}>
    <Title icon={icon} pb="0" variant={variant}>
      <>
        {children}
        {onClose && <ClearButton onClick={onClose} />}
      </>
    </Title>
  </S.Snackbar>
)

Snackbar.displayName = 'Snackbar'
