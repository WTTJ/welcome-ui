import type { ComponentProps } from 'react'

export interface TextareaOptions {
  minRows?: number
  variant?: 'danger' | 'success' | 'warning'
}

export type TextareaProps = ComponentProps<'textarea'> & TextareaOptions
