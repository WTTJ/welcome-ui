import { type CSSProperties } from 'react'

import { classNames, forwardRefWithAs } from '@/utils'

import textStyles from './text.module.scss'
import type { TextOptions } from './types'

export { textStyles as textClasses }

const cx = classNames(textStyles)

export const Text = forwardRefWithAs<TextOptions, 'p'>(
  ({ as: Component = 'p', children, className, lines, variant = 'md', withDash, ...rest }, ref) => {
    const isHeading = variant?.startsWith('heading') || variant?.startsWith('display')
    const isMultiLine = lines && lines > 1 && lines !== Number.POSITIVE_INFINITY
    const isSingleLine = lines === 1

    const classes = cx(
      'root',
      `variant-${variant}`,
      Boolean(lines) && 'with-lines',
      Boolean(isMultiLine) && 'multi-line',
      isSingleLine && 'single-line',
      withDash && isHeading && 'with-dash',
      className
    )

    const cssVariables = isMultiLine || isSingleLine ? { '--lineClamp': lines } : {}

    return (
      <Component
        className={classes}
        ref={ref}
        style={{ ...cssVariables } as CSSProperties}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'
