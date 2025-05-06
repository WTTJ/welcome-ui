import * as Ariakit from '@ariakit/react'
import styled, { system } from '@xstyled/styled-components'

import { forwardRef } from '@/System'

import { Button } from '../../Button'
import { IconsFont } from '../../IconsFont'
import * as S from '../styles'

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
              <IconsFont.Cross />
            </CloseButton>
          }
        />
      </S.Backdrop>
    )
  }
)

Backdrop.displayName = 'Backdrop'
