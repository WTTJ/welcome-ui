import type { ComponentPropsWithoutRef } from 'react'

export interface TextareaOptions {
  isAdaptative?: boolean
  minRows?: number
  variant?: 'danger' | 'success' | 'warning'
}

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & TextareaOptions
