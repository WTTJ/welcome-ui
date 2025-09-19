import { forwardRef } from 'react'

import { Box } from '@old/Box'
import { CloseButton } from '@old/CloseButton'

import type { GrowlProps } from '../types'
/**
 * @name Toast.Growl
 */
export const Growl = forwardRef<HTMLDivElement, GrowlProps>(
  ({ children, hasCloseButton = true, icon, onClose, variant = 'default', ...rest }, ref) => {
    const closeButtonDataTestId = rest['data-testid']
      ? `${rest['data-testid']}-close-button`
      : undefined
    return (
      <S.Growl hasCloseButton={hasCloseButton} icon={icon} ref={ref} variant={variant} {...rest}>
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
