import { createElement, type CSSProperties } from 'react'

import { classNames, forwardRefWithAs } from '@/utils'

import textStyles from './text.module.scss'
import type { TextProps } from './types'

export const TAG_NAMES = {
  h0: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lg: 'p',
  md: 'p',
  sm: 'p',
  'subtitle-md': 'span',
  'subtitle-sm': 'span',
  xs: 'p',
} as const

const cx = classNames(textStyles)

export const Text = forwardRefWithAs<TextProps, 'p'>(
  ({ as, children, className, lines, variant = 'md', withDash, ...rest }, ref) => {
    const tagName = as || TAG_NAMES[variant]
    const isHeading = variant?.startsWith('h')
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
      tagName,
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
