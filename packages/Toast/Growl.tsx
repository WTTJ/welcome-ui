import React, { Children, cloneElement } from 'react'
import { ClearButton } from '@welcome-ui/clear-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { Toast, Variant } from './index'

export interface GrowlOptions {
  variant?: Variant
  closeButtonDataTestId?: string
  onClose?: () => void
  hasCloseButton?: boolean
}

export type GrowlProps = CreateWuiProps<'div', GrowlOptions>

/**
 * @name Toast.Growl
 */
export const Growl = forwardRef<'div', GrowlProps>(
  ({ children, closeButtonDataTestId, hasCloseButton = true, onClose, variant = 'info' }, ref) => {
    const content = Children.map(children, child => {
      // Add variant to AlertTitle to show the correct icon/color
      if ((child as React.ReactElement).type === Toast.Title) {
        return cloneElement(child as React.ReactElement, { variant })
      }
      return child
    })

    return (
      <S.Growl hasCloseButton={hasCloseButton} ref={ref} variant={variant}>
        {hasCloseButton && (
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
