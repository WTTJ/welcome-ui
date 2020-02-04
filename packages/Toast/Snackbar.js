import React, { forwardRef } from 'react'
import { func, node, oneOf } from 'prop-types'
import { ClearButton } from '@welcome-ui/clear-button'

import * as S from './styles'

export const Snackbar = forwardRef(({ children, onClose, variant = 'info' }, ref) => (
  <S.Snackbar ref={ref} variant={variant}>
    {children}
    {onClose && <ClearButton onClick={onClose} variant="secondary" />}
  </S.Snackbar>
))

Snackbar.displayName = 'Snackbar'

Snackbar.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  onClose: func,
  variant: oneOf(['success', 'error', 'warning', 'info'])
}
