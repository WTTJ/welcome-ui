import type { HTMLAttributes } from 'react'
import React from 'react'

import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
const cx = classNames(modalStyles)

export const Dialog = ({
  children,
  ...rest
}: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={cx('root', 'dialog')} {...rest}>
      {children}
    </div>
  )
}
