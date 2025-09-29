import type { HTMLAttributes } from 'react'

import type { LabelProps } from '@/components/Label/types'

export interface FieldGroupOptions {
  label?: React.ReactElement
  required?: LabelProps['required']
}

export type FieldGroupProps = FieldGroupOptions & HTMLAttributes<HTMLFieldSetElement>
