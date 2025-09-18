import type { ComponentProps, MouseEvent } from 'react'
import React from 'react'

import { classNames, forwardRefWithAs } from '@/utils'
//TODO: update icons import when https://github.com/WTTJ/welcome-ui/pull/2837 is merged
import { CrossIcon } from '@old/Icons'

import tagStyles from './tag.module.scss'

const cx = classNames(tagStyles)

export interface TagProps {
  icon?: React.ReactNode
  onRemove?: () => void
  removeButtonProps?: ComponentProps<'button'>
  size?: TagSize
  variant?: TagVariant
}

export type TagSize = 'md' | 'sm' | 'xs'
export type TagVariant =
  | 'ai'
  | 'blue'
  | 'danger'
  | 'default'
  | 'default'
  | 'green'
  | 'info'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'success'
  | 'teal'
  | 'violet'
  | 'warning'

function getTextLength(children: React.ReactNode): number | undefined {
  if (typeof children === 'string' || typeof children === 'number') {
    return children.toString().length
  }
  if (React.isValidElement(children) && typeof children.props.children === 'string') {
    return children.props.children.length
  }
  return undefined
}

export const Tag = forwardRefWithAs<TagProps, 'div'>((props, ref) => {
  const {
    as,
    children,
    className,
    icon,
    onClick,
    onRemove,
    removeButtonProps,
    size = 'md',
    variant = 'default',
    ...rest
  } = props

  const Element = as || 'div'

  // Check if it's a single character (should be shaped)
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
        size && `size-${size}`,
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
        <button
          aria-label="remove tag"
          type="button"
          {...removeButtonProps}
          className={cx('removeButton', removeButtonProps?.className)}
          onClick={handleRemove}
        >
          <CrossIcon size="xs" title="Remove" />
        </button>
      ) : null}
    </Element>
  )
})

Tag.displayName = 'Tag'
