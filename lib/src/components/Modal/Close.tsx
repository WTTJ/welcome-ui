import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

import type { CloseButtonProps } from '@/CloseButton'
import { CloseButton } from '@/CloseButton'

type CloseProps = {
  isOnHeader?: boolean
} & CloseButtonProps

export const Close = ({ isOnHeader, ...rest }: CloseProps) => {
  const theme = useTheme()

  return (
    <Ariakit.DialogDismiss
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
