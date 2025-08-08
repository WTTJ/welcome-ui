/* eslint-disable perfectionist/sort-modules */

import type { CSSProperties } from 'react'

import type {
  ColorMix,
  CSSButtonHeightVar,
  CSSColorVar,
  CSSFontSizeVar,
  CSSSpacingVar,
} from '../../TailwindTheme'

// Handled in CSS with classes
export const theme = {
  borderWidth: '--border-width-sm',
  fontWeight: '--font-weight-bold',
  outlineWidth: '--border-width-md',
  transitionDuration: '--duration-medium',
}

// Handled in CSS with classes
export const shapes = {
  circle: {
    borderRadius: '50%',
  },
  square: {
    borderRadius: '--radius-md',
  },
}

// Handled in CSS with classes
export const sizes: ButtonSize = {
  lg: {
    fontSize: '--text-sm',
    height: '--height-button-lg',
    paddingInline: '--spacing-xl',
  },
  md: {
    fontSize: '--text-sm',
    height: '--height-button-md',
    paddingInline: '--spacing-xl',
  },
  sm: {
    fontSize: '--text-xs',
    height: '--height-button-sm',
    paddingInline: '--spacing-sm',
  },
  xs: {
    fontSize: '--text-xs',
    height: '--height-button-xs',
    paddingInline: '--spacing-sm',
  },
}

type PseudoState = '' | 'Active' | 'Focus' | 'Hover'

type ComponentProperties<Keys extends string> = Record<
  Keys,
  {
    [key in `${keyof CSSProperties}${PseudoState}`]?:
      | ColorMix
      | CSSButtonHeightVar
      | CSSColorVar
      | CSSFontSizeVar
      | CSSSpacingVar
  }
>

type Sizes = 'lg' | 'md' | 'sm' | 'xs'

type Variant =
  | 'ghost'
  | 'ghost-danger'
  | 'primary'
  | 'primary-danger'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-danger'

type ButtonVariant = ComponentProperties<Variant>
type ButtonSize = ComponentProperties<Sizes>

export const variants: ButtonVariant = {
  ghost: {
    backgroundColorActive: 'color-mix(in oklab, var(--color-neutral-90) 40%, transparent)',
    backgroundColorHover: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
    borderColor: 'transparent',
    borderColorActive: '--color-neutral-90',
    borderColorHover: 'color-mix(in oklab, var(--color-blue-10) 40%, transparent)',
    outlineColorFocus: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
  },
  'ghost-danger': {
    backgroundColorActive: '--color-red-20',
    backgroundColorHover: '--color-red-10',
    borderColor: 'transparent',
    borderColorActive: '--color-red-20',
    borderColorHover: '--color-red-10',
    color: '--color-red-80',
    outlineColorFocus: '--color-red-40',
  },
  primary: {
    backgroundColor: '--color-brand-40',
    backgroundColorActive: '--color-brand-10',
    backgroundColorHover: '--color-brand-30',
    borderColor: '--color-brand-40',
    borderColorActive: '--color-brand-10',
    borderColorHover: '--color-brand-30',
    outlineColorFocus: '--color-brand-20',
  },
  'primary-danger': {
    backgroundColor: '--color-red-70',
    backgroundColorActive: '--color-red-50',
    backgroundColorHover: '--color-red-60',
    borderColor: '--color-red-70',
    borderColorActive: '--color-red-50',
    borderColorHover: '--color-red-60',
    color: '--color-neutral-10',
    outlineColorFocus: '--color-red-40',
  },
  secondary: {
    backgroundColor: '--color-neutral-90',
    backgroundColorActive: '--color-neutral-50',
    backgroundColorHover: '--color-neutral-70',
    borderColor: '--color-neutral-90',
    borderColorActive: '--color-neutral-50',
    borderColorHover: '--color-neutral-70',
    color: '--color-neutral-10',
    outlineColorFocus: '--color-neutral-40',
  },
  tertiary: {
    backgroundColor: '--color-neutral-10',
    backgroundColorActive: 'color-mix(in oklab, var(--color-neutral-90) 40%, transparent)',
    backgroundColorHover: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
    borderColor: '--color-neutral-90',
    outlineColorFocus: '--color-neutral-40',
  },
  'tertiary-danger': {
    backgroundColor: '--color-neutral-10',
    backgroundColorActive: '--color-red-20',
    backgroundColorHover: '--color-red-10',
    borderColor: '--color-red-80',
    color: '--color-red-80',
    outlineColorFocus: '--color-red-40',
  },
}

// FIXME MOVE ME TO A UTILS FILE
export const variableMap = <T extends Record<string, string>>(token: T) => {
  return Object.entries(token).reduce(
    (acc, [key, value]) => {
      const isVariable = value.startsWith('--')
      const wrappedValue = isVariable ? `var(${value})` : value
      acc[`--${key}`] = wrappedValue
      return acc
    },
    {} as Record<string, string>
  )
}
