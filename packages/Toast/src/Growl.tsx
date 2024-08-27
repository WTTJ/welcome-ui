import React from 'react'
import { CloseButton } from '@welcome-ui/close-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

import { Variant } from './index'

export interface GrowlOptions {
  variant?: Variant
  onClose?: () => void
  hasCloseButton?: boolean
  icon?: string | JSX.Element
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
