import React, { forwardRef } from 'react'
import { func, node, oneOf } from 'prop-types'
import { ClearButton } from '@welcome-ui/clear-button'

import { VARIANTS_TYPE } from '../../utils/propTypes'

import { Title } from './Title'
import * as S from './styles'

export const Snackbar = forwardRef(
  ({ children, icon, onClose, variant = 'info', ...rest }, ref) => (
    <S.Snackbar ref={ref} variant={variant} {...rest}>
      <Title icon={icon} pb="0" variant={variant}>
        <>
          {children}
          {onClose && <ClearButton onClick={onClose} />}
        </>
      </Title>
    </S.Snackbar>
  )
)

Snackbar.displayName = 'Snackbar'

Snackbar.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  icon: node,
  onClose: func,
  variant: oneOf(VARIANTS_TYPE)
}
