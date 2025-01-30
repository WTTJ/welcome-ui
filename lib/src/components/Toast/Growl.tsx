import React from 'react'

import * as S from './styles'

import { CloseButton } from '@/CloseButton'
import { CreateWuiProps, forwardRef } from '@/System'
import { Box } from '@/Box'

export interface GrowlOptions {
  hasCloseButton?: boolean
  icon?: JSX.Element | null
  onClose?: () => void
  variant?: 'default' | 'info' | 'success' | 'danger' | 'warning'
}

export type GrowlProps = CreateWuiProps<'div', GrowlOptions>

/**
 * @name Toast.Growl
 */
export const Growl = forwardRef<'div', GrowlProps>(
  ({ children, dataTestId, hasCloseButton = true, icon, onClose, variant = 'default' }, ref) => {
    const closeButtonDataTestId = dataTestId ? `${dataTestId}-close-button` : undefined

    return (
      <S.Growl
        data-testid={dataTestId}
        hasCloseButton={hasCloseButton}
        icon={icon}
        ref={ref}
        variant={variant}
      >
        {hasCloseButton && (
          <CloseButton
            dataTestId={closeButtonDataTestId}
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
