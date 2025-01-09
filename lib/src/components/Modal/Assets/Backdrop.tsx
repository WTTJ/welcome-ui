import React from 'react'
import * as Ariakit from '@ariakit/react'
import styled, { system } from '@xstyled/styled-components'

import { IconFont } from '../../IconFont'
import { Button } from '../../Button'
import * as S from '../styles'
import { forwardRef } from '../../System'

export const CloseButton = styled(Button)`
  position: absolute;
  right: xl;
  top: xl;

  /* Hack for secondary variant on dark mode */
  color: neutral-90;
  border-color: neutral-10;
  background-color: neutral-10;

  &:hover {
    background-color: neutral-40;
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
              <IconFont.Cross />
            </CloseButton>
          }
        />
      </S.Backdrop>
    )
  }
)

Backdrop.displayName = 'Backdrop'
