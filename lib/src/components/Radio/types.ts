import type { ComponentPropsWithRef } from 'react'

import type { LabelProps } from '@/components/Label/types'

export interface RadioOptions {
  dataTestId?: string
  hint?: string
  label?: string
  maxWidth?: number | string
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
  value?: string
  variant?: 'danger' | 'default' | 'warning'
}

export type RadioProps = ComponentPropsWithRef<'input'> &
  Omit<LabelProps, 'children'> &
  RadioOptions
