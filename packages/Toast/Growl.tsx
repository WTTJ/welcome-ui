import React, { Children, cloneElement } from 'react'
import { CloseButton } from '@welcome-ui/close-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { Toast, Variant } from './index'

export interface GrowlOptions {
  icon?: JSX.Element
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
  (
    { children, closeButtonDataTestId, hasCloseButton = true, icon, onClose, variant = 'default' },
    ref
  ) => {
    const content = Children.map(children, child => {
      // Add variant to AlertTitle to show the correct icon/color
      if ((child as React.ReactElement).type === Toast.Text) {
        return cloneElement(child as React.ReactElement, { variant })
      }
      return child
    })

    return (
      <S.Growl hasCloseButton={hasCloseButton} icon={icon} ref={ref} variant={variant}>
        {hasCloseButton && (
          <CloseButton
            data-testid={closeButtonDataTestId}
            onClick={onClose}
            position="absolute"
            right="sm"
            top="sm"
          />
        )}
        {content}
      </S.Growl>
    )
  }
)

Growl.displayName = 'Growl'
