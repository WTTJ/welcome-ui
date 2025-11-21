import { createElement, type CSSProperties } from 'react'

import { classNames, forwardRefWithAs } from '@/utils'

import textStyles from './text.module.scss'
import type { TextProps } from './types'

const cx = classNames(textStyles)

export const Text = forwardRefWithAs<TextProps, 'p'>(
  ({ as = 'p', children, className, lines, variant = 'md', withDash, ...rest }, ref) => {
    const isHeading = variant?.startsWith('heading') || variant?.startsWith('display')
    const isMultiLine = lines && lines > 1 && lines !== Number.POSITIVE_INFINITY
    const isSingleLine = lines === 1

    const classes = cx(
      'root',
      `variant-${variant}`,
      lines && 'with-lines',
      isMultiLine && 'multi-line',
      isSingleLine && 'single-line',
      withDash && isHeading && 'with-dash',
      className
    )

    const cssVariables = isMultiLine || isSingleLine ? { '--lineClamp': lines } : {}

    return createElement(
      as,
      {
        className: classes,
        ref,
        style: { ...cssVariables } as CSSProperties,
        ...rest,
      },
      children
    )
  }
)

Text.displayName = 'Text'
