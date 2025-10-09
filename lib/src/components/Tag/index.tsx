import type { MouseEvent } from 'react'
import React from 'react'

import { Button } from '@/components/Button'
import { CrossIcon } from '@/components/Icon'
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
    as: Element = 'div',
    children,
    className,
    icon,
    onClick,
    onRemove,
    removeButtonProps,
    size = 'md',
    variant,
    ...rest
  } = props

  // Determine if the tag should have a square shape (only one character and no remove action)
  const isSquare = getTextLength(children) === 1 && !onRemove

  const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
    if (removeButtonProps?.onClick) removeButtonProps.onClick(e)
    if (onRemove) onRemove()
  }

  return (
    <Element
      className={cx(
        'root',
        variant && `variant-${variant}`,
        `size-${size}`,
        !!onRemove && 'hasRemoveAction',
        isSquare && 'isSquare',
        className
      )}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {icon}
      {children}
      {onRemove ? (
        <Button
          aria-label="remove tag"
          {...removeButtonProps}
          className={cx('removeButton', removeButtonProps?.className)}
          onClick={handleRemove}
          size="xs"
          variant="tertiary"
        >
          <CrossIcon size="xs" />
        </Button>
      ) : null}
    </Element>
  )
})
