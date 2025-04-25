import React from 'react'

import { Box } from '@/Box'
import { CloseButton } from '@/CloseButton'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'
import type { ToastVariant } from './theme'

export interface GrowlOptions {
  hasCloseButton?: boolean
  icon?: JSX.Element | null
  onClose?: () => void
  variant?: ToastVariant
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
        {hasCloseButton ? (
          <CloseButton
            dataTestId={closeButtonDataTestId}
            onClick={onClose}
            position="absolute"
            right="sm"
            top="sm"
          />
        ) : null}
        <Box pr="xl">{children}</Box>
      </S.Growl>
    )
  }
)

Growl.displayName = 'Growl'
