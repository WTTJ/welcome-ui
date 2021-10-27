import React, { Children, cloneElement, forwardRef } from 'react'
import { ClearButton } from '@welcome-ui/clear-button'
import { CreateWuiProps } from '@welcome-ui/system'

import { Title } from './Title'
import * as S from './styles'

import { Variant } from '.'

export interface GrowlOptions {
  variant?: Variant
  closeButtonDataTestId: string
  onClose: () => void
}

export type GrowlProps = CreateWuiProps<'div', GrowlOptions>

export const Growl = forwardRef<HTMLDivElement, GrowlProps>(
  ({ children, closeButtonDataTestId, onClose, variant = 'info' }, ref) => {
    const content = Children.map(children, child => {
      // Add variant to AlertTitle to show the correct icon/color
      if ((child as React.ReactElement).type === Title) {
        return cloneElement(child as React.ReactElement, { variant })
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
