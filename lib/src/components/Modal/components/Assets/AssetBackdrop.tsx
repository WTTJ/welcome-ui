import { DialogDismiss } from '@ariakit/react'
import { forwardRef } from 'react'

import { CrossIcon } from '@/components/Icon'
import type { BackdropProps } from '@/components/Modal/types'
import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
import { CloseButton } from './CloseButton'
const cx = classNames(modalStyles)

export const AssetBackdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ hideOnInteractOutside, ...rest }, ref) => {
    return (
      <div
        className={cx('asset-backdrop', hideOnInteractOutside && 'hideOnInteractOutside')}
        {...rest}
        ref={ref}
      >
        <DialogDismiss
          render={
            <CloseButton>
              <CrossIcon />
            </CloseButton>
          }
        />
      </div>
    )
  }
)

AssetBackdrop.displayName = 'Backdrop'
