import React from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import linkStyles from './link.module.scss'
import type { LinkOptions } from './types'

const cx = classNames(linkStyles)

interface WrapperProps {
  children?: React.ReactNode
  isExternal?: LinkOptions['isExternal']
  size: LinkOptions['size']
}

const Wrapper = ({ children, isExternal, size }: WrapperProps) => {
  return (
    <span className={cx('wui-text')}>
      {children}
      {isExternal ? <Icon name="external-link-alt" size={size} /> : null}
    </span>
  )
}

Wrapper.displayName = 'Link.Wrapper'

const shouldWrapText = (
  child: React.ReactNode,
  size: LinkOptions['size'],
  isExternal?: boolean
) => {
  if (typeof child === 'string') {
    return (
      <Wrapper isExternal={isExternal} size={size}>
        {child}
      </Wrapper>
    )
  }

  if (React.isValidElement(child)) {
    if (
      child.type === 'span' ||
      child.props.as === 'span' ||
      // FormattedMessage from react-intl has a span tag by default
      child.props.tagName === 'span' ||
      child.props['data-wui-link'] === true ||
      typeof child.props.children === 'string'
    ) {
      return isExternal ? (
        <Wrapper isExternal={isExternal} size={size}>
          {child}
        </Wrapper>
      ) : (
        // If it is not external, we just need to add wui-text className to the child as we don't need to wrap it to display the icon
        React.cloneElement(child as React.ReactElement, {
          className: cx('wui-text', child.props.className),
        })
      )
    }
  }
  return child
}

export const Link = forwardRefWithAs<LinkOptions, 'a'>((props, ref) => {
  const {
    as,
    children,
    className,
    disabled,
    isExternal,
    multiline,
    size = 'md',
    target,
    variant = 'primary',
    ...rest
  } = props

  const Element = as || 'a'
  const iconSize = size === 'xs' ? 'sm' : 'md'

  const _children =
    typeof children === 'string'
      ? shouldWrapText(children, iconSize, isExternal)
      : React.Children.map(children, child => shouldWrapText(child, iconSize, isExternal))

  return (
    <Element
      aria-disabled={disabled}
      className={cx(
        'root',
        `variant-${variant}`,
        `size-${size}`,
        isExternal && 'isExternal',
        multiline && 'isMultiline',
        className
      )}
      ref={ref}
      // for security
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      tabIndex={disabled ? -1 : 0}
      target={target}
      {...rest}
    >
      {disabled ? <Icon className={cx('icon-disabled')} name="ban" size="md" /> : null}
      {_children}
    </Element>
  )
})

Link.displayName = 'Link'
