import { forwardRef } from 'react'

import { useField } from '@/components/Field'
import { classNames } from '@/utils'

import textareaStyles from './textarea.module.scss'
import type { TextareaProps } from './types'

const cx = classNames(textareaStyles)

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, minRows = 5, variant, ...rest }, ref) => {
    const { getInputProps, variant: fieldVariant } = useField()
    const _variant = fieldVariant || variant

    return (
      <textarea
        className={cx('root', _variant && `variant-${_variant}`, className)}
        ref={ref}
        rows={minRows}
        {...getInputProps(rest)}
      />
    )
  }
)
