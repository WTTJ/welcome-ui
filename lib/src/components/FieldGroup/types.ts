import type { HTMLAttributes } from 'react'
import type React from 'react'

import type { LabelProps } from '@/components/Label/types'

export interface FieldGroupOptions {
  hideLabel?: boolean
  label: React.ReactNode
  required?: LabelProps['required']
}

export type FieldGroupProps = FieldGroupOptions & HTMLAttributes<HTMLFieldSetElement>
