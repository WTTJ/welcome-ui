import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CloseButtonProps } from '@welcome-ui/close-button'
import { useTheme } from '@wttj/xstyled-styled-components'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

export type CloseProps = Ariakit.DialogDismissProps & CloseButtonProps

export const Close: React.FC<CloseProps> = ({ zIndex = '2', ...props }) => {
  const theme = useTheme()

  return (
    <Box h="0">
      <Ariakit.DialogDismiss
        render={
          <S.CloseButton
            left={`calc(100% - ${theme.space.lg} - ${theme.buttons.sizes.sm.height})`}
            mt="lg"
            position="sticky"
            top="0"
            zIndex={zIndex}
            {...props}
          />
        }
      />
    </Box>
  )
}
