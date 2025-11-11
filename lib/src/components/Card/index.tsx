import { forwardRef } from 'react'

import { Body } from '@/components/Card/Body'
import { Cover } from '@/components/Card/Cover'
import { Footer } from '@/components/Card/Footer'
import { Header } from '@/components/Card/Header'
import { classNames } from '@/utils'

import cardStyles from './card.module.scss'
import type { CardProps } from './types'

const cx = classNames(cardStyles)

export const CardComponent = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, size = 'md', ...rest }, ref) => {
    return (
      <div className={cx('root', `size-${size}`, className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

CardComponent.displayName = 'Card'

export const Card = Object.assign(CardComponent, {
  Body,
  Cover,
  Footer,
  Header,
})
