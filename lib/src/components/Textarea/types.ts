import type { ComponentPropsWithoutRef } from 'react'

export interface TextareaOptions {
  minRows?: number
  variant?: 'danger' | 'success' | 'warning'
}

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & TextareaOptions
