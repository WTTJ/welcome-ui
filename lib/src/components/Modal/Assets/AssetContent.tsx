import type { HTMLAttributes } from 'react'
import React from 'react'

import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
const cx = classNames(modalStyles)

export const AssetContent = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={cx('root', 'asset-content', className)} {...rest}>
      {children}
    </div>
  )
}

AssetContent.displayName = 'AssetModal.Content'
