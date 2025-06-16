import type { ComponentType as ReactComponentType } from 'react'

export type ComponentType = ReactComponentType<unknown> | Record<string, unknown> | string

export const DIRECTIONS = ['row', 'container', 'column'] as const
export type DirectionType = (typeof DIRECTIONS)[number]

export const INPUTS = [
  'checkbox',
  'email',
  'file',
  'password',
  'radio',
  'search',
  'tel',
  'text',
] as const
export type InputType = (typeof INPUTS)[number]

export interface OptionType {
  label: number | string
  value: number | string
}

export const SHAPES = ['square', 'circle'] as const
export type ShapeType = (typeof SHAPES)[number]

export const SIZES = ['sm', 'md', 'lg'] as const
export type SizeType = (typeof SIZES)[number]

export const VARIANTS = ['danger', 'info', 'success', 'warning'] as const
export type VariantType = (typeof VARIANTS)[number]

// Legacy exports for backward compatibility (if needed)
export const COMPONENT_TYPE = ['function', 'object', 'string'] // For documentation purposes
export const DIRECTIONS_TYPE = DIRECTIONS
export const INPUTS_TYPE = INPUTS
export const OPTIONS_TYPE = 'OptionType' // Reference to the interface
export const SHAPES_TYPE = SHAPES
export const SIZES_TYPE = SIZES
export const VARIANTS_TYPE = VARIANTS
