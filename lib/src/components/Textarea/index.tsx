import { forwardRef } from 'react'

import { classNames } from '@/utils'

import textareaStyles from './textarea.module.scss'
import type { TextareaProps } from './types'

const cx = classNames(textareaStyles)

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ minRows = 5, variant = 'default', ...rest }, ref) => (
    <textarea className={cx('root', `variant-${variant}`)} ref={ref} rows={minRows} {...rest} />
  )
)
