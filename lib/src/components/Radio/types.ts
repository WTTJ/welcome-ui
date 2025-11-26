import type { ComponentPropsWithRef } from 'react'

import type { LabelProps } from '@/components/Label/types'

export interface RadioOptions {
  dataTestId?: string
  hint?: string
  label?: string
  maxWidth?: number | string
  value?: string
  variant?: 'danger' | 'default'
}

export type RadioProps = ComponentPropsWithRef<'input'> &
  Omit<LabelProps, 'children'> &
  RadioOptions
