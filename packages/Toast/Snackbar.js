import React, { forwardRef } from 'react'
import { func, node, oneOf } from 'prop-types'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { ClearButton } from '@welcome-ui/clear-button'

import * as S from './styles'

export const Snackbar = forwardRef(({ children, icon, onClose, variant = 'info' }, ref) => (
  <S.Snackbar ref={ref} variant={variant}>
    <VariantIcon icon={icon} variant={variant} />
    <S.SnackbarTitle variant={variant}>{children}</S.SnackbarTitle>
    {onClose && <ClearButton onClick={onClose} />}
  </S.Snackbar>
))

Snackbar.displayName = 'Snackbar'

Snackbar.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  icon: node,
  onClose: func,
  variant: oneOf(['success', 'error', 'warning', 'info'])
}
