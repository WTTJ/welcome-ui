import type { MouseEvent } from 'react'
import React from 'react'

import { Icon } from '@/components/Icon'
import { classNames, forwardRefWithAs } from '@/utils'

import tagStyles from './tag.module.scss'
import type { TagOptions } from './types'

const cx = classNames(tagStyles)

function getTextLength(children: React.ReactNode): number | undefined {
  if (typeof children === 'string' || typeof children === 'number') {
    return children.toString().length
  }
  if (React.isValidElement(children) && typeof children.props.children === 'string') {
    return children.props.children.length
  }
  return undefined
}

export const Tag = forwardRefWithAs<TagOptions, 'div'>((props, ref) => {
  const {
    ai = false,
    as: Element = 'div',
    children,
    className,
    disabled = false,
    icon,
    onClick,
    onRemove,
    removeButtonProps,
    size = 'lg',
    variant = 'warm',
    ...rest
  } = props

  // Determine if the tag should have a square shape (only one character and no remove action)
  const isSquare = getTextLength(children) === 1 && !onRemove

  const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (disabled) return
    if (removeButtonProps?.onClick) removeButtonProps.onClick(e)
    if (onRemove) onRemove()
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    if (onClick) onClick(e)
  }

  return (
    <Element
      className={cx(
        'root',
        `variant-${variant}`,
        `size-${size}`,
        !!onRemove && 'hasRemoveAction',
        isSquare && 'isSquare',
        ai && 'ai',
        disabled && 'disabled',
        className
      )}
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      {ai && variant !== 'dash' ? <Icon name="sparkles" size="md" /> : icon}
      {children}
      {onRemove ? (
        <button
          aria-label="remove tag"
          disabled={disabled}
          {...removeButtonProps}
          className={cx('removeButton', removeButtonProps?.className)}
          onClick={handleRemove}
        >
          <Icon name="times" size="md" />
        </button>
      ) : null}
    </Element>
  )
})
