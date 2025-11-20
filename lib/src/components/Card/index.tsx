import { Body } from '@/components/Card/Body'
import { Cover } from '@/components/Card/Cover'
import { Footer } from '@/components/Card/Footer'
import { Header } from '@/components/Card/Header'
import { classNames, forwardRefWithAs } from '@/utils'

import cardStyles from './card.module.scss'
import type { CardProps } from './types'

const cx = classNames(cardStyles)

export const CardComponent = forwardRefWithAs<CardProps, 'div'>(
  ({ as: Component = 'div', className, disabled, size = 'md', ...props }, ref) => {
    return (
      <Component
        aria-disabled={disabled}
        {...props}
        className={cx('root', `size-${size}`, className)}
        ref={ref}
      />
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
