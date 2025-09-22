import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

//TODO Migrate CloseButton, but to what?
import type { CloseButtonProps } from '@old/CloseButton'
import { CloseButton } from '@old/CloseButton'

type CloseProps = CloseButtonProps & {
  isOnHeader?: boolean
}

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
