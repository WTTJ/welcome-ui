import type { ComponentPropsWithRef } from 'react'

export interface RangeOptions extends Omit<SliderOptions, 'onChange' | 'type' | 'value'> {
  onChange: (value: RangeType) => void
  type?: 'fields' | 'inline'
  value: RangeType
}

export type RangeProps = Omit<ComponentPropsWithRef<'div'>, 'onChange'> & RangeOptions

export type RangeType = {
  max: number
  min: number
}

export interface SliderOptions
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  borderSelectorColor?: string
  disabled?: boolean
  hint?: string
  label?: string
  max: number
  min: number
  onChange: (value: number) => void
  step?: number
  tooltip?: boolean
  type?: Type
  value: number
  values?: number[]
}

export type SliderProps = Omit<ComponentPropsWithRef<'div'>, 'onChange'> & SliderOptions

type Type = 'inline' | 'left-field' | 'right-field'
