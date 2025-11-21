import { DialogDismiss } from '@ariakit/react'
import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import type { BackdropProps } from '../types'

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
              <Icon name="times" />
            </CloseButton>
          }
        />
      </div>
    )
  }
)

AssetBackdrop.displayName = 'AssetModal.Backdrop'
