import { forwardRef, useEffect, useRef, useState } from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import { Text } from '../Text'

import styles from './stepper.module.scss'
import type { StepperItemProps, StepperProps } from './types'
import { getIcon } from './utils'

const cx = classNames(styles)

const StepperComponent = forwardRef<HTMLOListElement, StepperProps>(
  ({ children, className }, ref) => {
    const [showLeftFade, setShowLeftFade] = useState(false)
    const [showRightFade, setShowRightFade] = useState(false)
    const internalRef = useRef<HTMLOListElement>(null)
    const olRef = (ref as React.RefObject<HTMLOListElement>) || internalRef

    useEffect(() => {
      const element = olRef.current
      if (!element) return

      const handleScroll = () => {
        const { clientWidth, scrollLeft, scrollWidth } = element

        // Show left fade if scrolled from the left
        setShowLeftFade(scrollLeft > 0)

        // Show right fade if not scrolled to the end
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 1)
      }

      // Initial check
      handleScroll()

      element.addEventListener('scroll', handleScroll)

      // Also check on resize
      const resizeObserver = new ResizeObserver(handleScroll)
      resizeObserver.observe(element)

      return () => {
        element.removeEventListener('scroll', handleScroll)
        resizeObserver.disconnect()
      }
    }, [olRef])

    // Center the current step on mount and when it changes
    useEffect(() => {
      const element = olRef.current
      if (!element) return

      const currentStep = element.querySelector('[aria-current="true"]')
      if (currentStep) {
        currentStep.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }, [children, olRef])

    return (
      <div className={cx('wrapper')}>
        <ol
          className={cx(
            'root',
            className,
            showLeftFade && 'fade-left',
            showRightFade && 'fade-right'
          )}
          ref={olRef}
        >
          {children}
        </ol>
      </div>
    )
  }
)

StepperComponent.displayName = 'Stepper'

const Separator = () => (
  <div className={cx('separator')}>
    <Icon name="angle-right-b" size="lg" />
  </div>
)

Separator.displayName = 'Stepper.Separator'

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

Item.displayName = 'Stepper.Item'

export const Stepper = Object.assign(StepperComponent, {
  Item,
  Separator,
})
