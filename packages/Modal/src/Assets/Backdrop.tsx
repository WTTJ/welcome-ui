import React from 'react'
import * as Ariakit from '@ariakit/react'
import { Button } from '@welcome-ui/button'
import { Icons } from '@welcome-ui/icons.font'
import styled, { system } from '@xstyled/styled-components'

import * as S from '../styles'

export const CloseButton = styled(Button)`
  position: absolute;
  right: xl;
  top: xl;

  /* Hack for secondary variant on dark mode */
  color: dark-900;
  border-color: light-900;
  background-color: light-900;

  &:hover {
    background-color: light-700;
  }

  ${system}
`

export type BackdropProps = HTMLDivElement & Pick<Ariakit.DialogOptions, 'hideOnInteractOutside'>

export const Backdrop = React.forwardRef<BackdropProps>((props, ref) => {
  return (
    <S.Backdrop backgroundColor="rgba(0, 0, 0, 0.9)" {...props} ref={ref}>
      <Ariakit.DialogDismiss
        render={
          <CloseButton shape="circle" variant="secondary">
            <Icons.Cross />
          </CloseButton>
        }
      />
    </S.Backdrop>
  )
})
