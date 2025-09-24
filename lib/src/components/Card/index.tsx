import { forwardRef } from 'react'

import { Body } from '@/components/Card/Body'
import { Cover } from '@/components/Card/Cover'
import { classNames } from '@/utils'

import cardStyles from './card.module.scss'
import type { CardProps } from './types'

const cx = classNames(cardStyles)

export const CardComponent = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('root', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

export const Card = Object.assign(CardComponent, {
  Body,
  Cover,
})
