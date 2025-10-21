import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import { Text } from '../Text'

import styles from './stepper.module.scss'
import type { StepperItemProps, StepperProps } from './types'
import { getIcon } from './utils'

const cx = classNames(styles)

const StepperComponent = forwardRef<HTMLOListElement, StepperProps>(
  ({ children, className }, ref) => {
    return (
      <ol className={cx('root', className)} ref={ref}>
        {children}
      </ol>
    )
  }
)

const Separator = () => (
  <div className={cx('separator')}>
    <Icon name="angle-right-b" size="lg" />
  </div>
)

const Item = ({ children, icon, isCompleted, isOpen, onClick }: StepperItemProps) => {
  const selectedIcon = getIcon({ icon, isCompleted, isOpen })
  const isClickable = Boolean(onClick)

  return (
    <li
      aria-current={isOpen}
      className={cx('item', isClickable && 'clickable', isCompleted && 'completed')}
      onClick={onClick}
    >
      {selectedIcon}
      <Text variant="label-md">{children}</Text>
    </li>
  )
}

export const Stepper = Object.assign(StepperComponent, {
  Item,
  Separator,
})
