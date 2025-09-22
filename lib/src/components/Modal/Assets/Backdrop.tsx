import * as Ariakit from '@ariakit/react'

import { CrossIcon } from '@/components/Icon'
import { forwardRef } from '@old/System'

import * as S from '../styles'

import { CloseButton } from './styles'

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
              <CrossIcon />
            </CloseButton>
          }
        />
      </S.Backdrop>
    )
  }
)

Backdrop.displayName = 'Backdrop'
