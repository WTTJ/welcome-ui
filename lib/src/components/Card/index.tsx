import { Body } from '@/components/Card/Body'
import { Cover } from '@/components/Card/Cover'
import { classNames, forwardRefWithAs } from '@/utils'

import cardStyles from './card.module.scss'
import type { CardProps } from './types'

const cx = classNames(cardStyles)

export const CardComponent = forwardRefWithAs<CardProps, 'div'>(
  ({ as: Component = 'div', children, className, ...rest }, ref) => {
    return (
      <Component className={cx('root', className)} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)

export const Card = Object.assign(CardComponent, {
  Body,
  Cover,
})
