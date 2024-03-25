import React from 'react'
import * as Ariakit from '@ariakit/react'
import { Button } from '@welcome-ui/button'
import { Icons } from '@welcome-ui/icons.font'
import styled, { system } from '@wttj/xstyled-styled-components'
import { forwardRef } from '@welcome-ui/system'

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

export type BackdropProps = Pick<Ariakit.DialogOptions, 'hideOnInteractOutside'>

export const Backdrop = forwardRef<'div', BackdropProps>(
  ({ hideOnInteractOutside, ...rest }, ref) => {
    return (
      <S.Backdrop
        backgroundColor="rgba(0, 0, 0, 0.9)"
        hideOnInteractOutside={hideOnInteractOutside}
        {...rest}
        ref={ref}
      >
        <Ariakit.DialogDismiss
          render={
            <CloseButton shape="circle" variant="secondary">
              <Icons.Cross />
            </CloseButton>
          }
        />
      </S.Backdrop>
    )
  }
)

Backdrop.displayName = 'Backdrop'
