import React, { type KeyboardEvent, type MouseEvent, type Ref, useState } from 'react'

import { Body } from '@/components/Card/Body'
import { Cover } from '@/components/Card/Cover'
import { Footer } from '@/components/Card/Footer'
import { Header } from '@/components/Card/Header'
import { classNames, forwardRefWithAs } from '@/utils'

import cardStyles from './card.module.scss'
import type { CardProps } from './types'

const cx = classNames(cardStyles)

export const CardComponent = forwardRefWithAs<CardProps, 'div'>(
  ({ as = 'div', children, className, disabled, onClick, size = 'md', ...props }, ref) => {
    const isLink = 'href' in props || 'to' in props
    const internalRef = React.useRef<HTMLDivElement | null>(null)
    const { interactive, ...interactivityProps } = useInteractivity({
      disabled,
      isLink,
      onClick,
      ref: ref || internalRef,
    })

    return React.createElement(
      as,
      {
        ...props,
        ...interactivityProps,
        className: cx('root', `size-${size}`, interactive && 'interactive', className),
        ref: ref || internalRef,
      },
      children
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

// Hook to manage interactivity (mouse, keyboard) of the Card component

const useInteractivity = ({
  disabled,
  isLink,
  onClick,
  ref,
}: Pick<CardProps, 'disabled' | 'onClick'> & {
  isLink: boolean
  ref: Ref<HTMLDivElement>
}) => {
  const [active, setActive] = useState(false)
  const interactive = Boolean(onClick) || isLink

  const interactiveEnabled = interactive && !disabled

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (!isWithinInteractiveElement(target)) {
      onClick?.()
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const cardElement = ref && (typeof ref === 'function' ? null : ref.current)
    if (event.target === cardElement) {
      if (event.key === 'Enter') {
        onClick?.()
        setActive(true)
      }
    }
  }

  const handleKeyUp = () => {
    if (active) {
      setActive(false)
    }
  }

  return {
    'aria-disabled': disabled ? true : undefined,
    'aria-label': interactiveEnabled ? 'Card' : undefined,
    'data-active': interactiveEnabled && active ? true : undefined,
    interactive,
    onClick: interactiveEnabled ? handleClick : undefined,
    onKeyDown: interactiveEnabled ? handleKeyDown : undefined,
    onKeyUp: interactiveEnabled ? handleKeyUp : undefined,
    role: interactiveEnabled ? 'button' : undefined,
    tabIndex: interactiveEnabled ? 0 : undefined,
  }
}

// List of interactive elements to check if the event target is inside one of them
// to avoid triggering the Card's `onClick` event when interacting with them
const interactiveElements = [
  // Interactive elements
  'details',
  'dialog',
  'summary',
  // Form elements
  'button',
  'datalist',
  'fieldset',
  'label',
  'form',
  'input',
  'legend',
  'meter',
  'optgroup',
  'option',
  'output',
  'progress',
  'select',
  'selectedcontent',
  'textarea',
  // Other elements
  'a',
]

const isWithinInteractiveElement = (element: HTMLElement) => {
  return interactiveElements.some(tagName => element.closest(tagName) !== null)
}
