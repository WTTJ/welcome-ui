import { DialogDismiss } from '@ariakit/react'

import { CrossIcon } from '@/components/Icon'
import type { BackdropProps } from '@/components/Modal/types'
import { forwardRef } from '@old/System'

import * as S from '../../styles'

import { CloseButton } from './styles'

export const Backdrop = forwardRef<'div', BackdropProps>(
  ({ hideOnInteractOutside, ...rest }, ref) => {
    return (
      <S.Backdrop
        backgroundColor="rgba(0, 0, 0, 0.9)"
        hideOnInteractOutside={hideOnInteractOutside}
        {...rest}
        ref={ref}
      >
        <DialogDismiss
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
