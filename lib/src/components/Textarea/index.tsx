import { forwardRef } from 'react'

import { classNames } from '@/utils'

import textareaStyles from './textarea.module.scss'
import type { TextareaProps } from './types'

const cx = classNames(textareaStyles)

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, minRows = 5, variant, ...rest }, ref) => (
    <textarea
      className={cx('root', variant && `variant-${variant}`, className)}
      ref={ref}
      rows={minRows}
      {...rest}
    />
  )
)
