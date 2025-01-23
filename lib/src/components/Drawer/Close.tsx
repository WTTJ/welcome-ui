import React from 'react'
import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

import * as S from './styles'

import { CloseButtonProps } from '@/CloseButton'
import { Box } from '@/Box'

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
