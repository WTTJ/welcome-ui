import type { MouseEvent } from 'react'
import React from 'react'

import { Icon } from '@/components/Icon'
import { classNames, forwardRefWithAs } from '@/utils'

import tagStyles from './tag.module.scss'
import type { TagOptions } from './types'

export { tagStyles as tagClasses }

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
    as: Component = 'div',
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

  // A native button/anchor root can't legally contain the remove button, so that combination
  // needs to split into sibling interactive elements instead of nesting one inside the other
  const rootTag = Component as unknown as string
  const needsSplitLayout = (rootTag === 'button' || rootTag === 'a') && !!onRemove

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

  const rootClassName = cx(
    'root',
    `variant-${variant}`,
    `size-${size}`,
    !!onRemove && 'hasRemoveAction',
    isSquare && 'isSquare',
    ai && 'ai',
    disabled && 'disabled',
    className
  )

  const labelContent = (
    <>
      {ai && variant !== 'dash' ? <Icon name="sparkles" size="md" /> : icon}
      <span>{children}</span>
    </>
  )

  const removeButtonEl = onRemove ? (
    <button
      aria-label="remove tag"
      disabled={disabled}
      type="button"
      {...removeButtonProps}
      className={cx('removeButton', removeButtonProps?.className)}
      onClick={handleRemove}
    >
      <Icon name="times" size="md" />
    </button>
  ) : null

  if (needsSplitLayout) {
    return (
      <div className={rootClassName}>
        <Component className={cx('label')} onClick={handleClick} ref={ref} {...rest}>
          {labelContent}
        </Component>
        {removeButtonEl}
      </div>
    )
  }

  return (
    <Component className={rootClassName} onClick={handleClick} ref={ref} {...rest}>
      {labelContent}
      {removeButtonEl}
    </Component>
  )
})

Tag.displayName = 'Tag'
