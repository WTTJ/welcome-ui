import React, { Children, cloneElement, forwardRef } from 'react'
import { func, node, oneOf, string } from 'prop-types'
import { ClearButton } from '@welcome-ui/clear-button'

import { VARIANTS_TYPE } from '../../src/utils/propTypes'

import { Title } from './Title'
import * as S from './styles'

export const Growl = forwardRef(
  ({ children, closeButtonDataTestId, onClose, variant = 'info' }, ref) => {
    const content = Children.map(children, child => {
      // Add variant to AlertTitle to show the correct icon/color
      if (child.type === Title) {
        return cloneElement(child, { variant })
      }
      return child
    })

    return (
      <S.Growl ref={ref} variant={variant}>
        {onClose && (
          <ClearButton
            data-testid={closeButtonDataTestId}
            onClick={onClose}
            position="absolute"
            right={10}
            top={10}
          />
        )}
        {content}
      </S.Growl>
    )
  }
)

Growl.displayName = 'Growl'

Growl.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  closeButtonDataTestId: string,
  onClose: func,
  variant: oneOf(VARIANTS_TYPE)
}
