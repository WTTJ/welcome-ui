import { DialogDismiss } from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

//TODO Migrate CloseButton, but to what?
import { CloseButton } from '@old/CloseButton'

import type { CloseProps } from './types'

export const Close = ({ isOnHeader, ...rest }: CloseProps) => {
  const theme = useTheme()

  return (
    <DialogDismiss
      render={
        <CloseButton
          left={
            isOnHeader
              ? undefined
              : `calc(100% - ${theme.space.lg} - ${theme.buttons.sizes.sm.height})`
          }
          position={isOnHeader ? 'absolute' : 'sticky'}
          right={isOnHeader ? 'lg' : undefined}
          top="lg"
          zIndex="1"
          {...rest}
        />
      }
    />
  )
}
