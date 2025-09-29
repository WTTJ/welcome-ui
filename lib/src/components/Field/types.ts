import type { ComponentPropsWithoutRef } from 'react'

import type { HintProps } from '@/components/Hint/types'
import type { LabelProps } from '@/components/Label/types'

export interface FieldOptions extends VariantProps {
  children: React.ReactNode
  disabled?: boolean
  disabledIcon?: React.ReactNode
  hideLabel?: boolean
  hint?: React.ReactNode
  hintProps?: HintProps
  /**
   * If true, the field will be displayed inline (horizontally) instead of block (vertically).
   */
  inline?: boolean
  label: React.ReactNode
  labelProps?: LabelProps
  required?: boolean
}

export type FieldState = {
  disabled?: boolean
  /**
   * Function that provides the necessary accessibility props to the input element.
   */
  getInputProps: FieldGetInputPropsFunction
  hintID: string
  labelID: string
  required?: boolean
  variant?: FieldStateVariant
}

export type FieldStateVariant = 'danger' | 'success' | 'warning'

type FieldGetInputPropsFunction = <T extends ComponentPropsWithoutRef<'input'>>(
  ownProps?: T
) => Pick<
  ComponentPropsWithoutRef<'input'>,
  'aria-describedby' | 'aria-invalid' | 'aria-labelledby' | 'disabled' | 'id' | 'required'
>

type VariantProps = {
  error?: React.ReactNode
  success?: React.ReactNode
  warning?: React.ReactNode
}
