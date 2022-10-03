import React from 'react'
import { CloseButton } from '@welcome-ui/close-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

import { Variant } from './index'

export interface GrowlOptions {
  variant?: Variant
  closeButtonDataTestId?: string
  onClose?: () => void
  hasCloseButton?: boolean
  icon?: JSX.Element
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
        <Box pr="xl">{children}</Box>
      </S.Growl>
    )
  }
)

Growl.displayName = 'Growl'
