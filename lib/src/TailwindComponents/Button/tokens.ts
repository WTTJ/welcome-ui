/* eslint-disable perfectionist/sort-modules */

import type { CSSProperties } from 'react'

import type {
  ButtonHeights,
  ButtonHeightTokens,
  ColorMix,
  ColorTokens,
  SemanticSpacingTokens,
  TextFontSizeTokens,
} from '../../TailwindTheme/types'

export const theme = {
  borderWidth: '--border-width-sm',
  cursor: 'pointer',
  fontWeight: '--font-weight-bold',
  outlineWidth: '--border-width-md',
  transitionDuration: '--duration-medium',
}

export const shapes = {
  circle: {
    borderRadius: '100%',
    paddingInline: '0',
    paddingInlineHasIcon: '0',
  },
  'circle-lg': {
    fontSize: '--font-size-button-icon-lg',
    width: '--height-button-lg',
  },
  'circle-md': {
    fontSize: '--font-size-button-icon-md',
    width: '--height-button-md',
  },
  'circle-sm': {
    fontSize: '--font-size-button-icon-sm',
    width: '--height-button-sm',
  },
  'circle-xs': {
    fontSize: '--font-size-button-icon-xs',
    width: '--height-button-xs',
  },
  default: {
    borderRadius: '--radius-md',
  },
  square: {
    borderRadius: '0',
    paddingInline: '0',
    paddingInlineHasIcon: '0',
  },
  'square-lg': {
    fontSize: '--font-size-button-icon-lg',
    width: '--height-button-lg',
  },
  'square-md': {
    fontSize: '--font-size-button-icon-md',
    width: '--height-button-md',
  },
  'square-sm': {
    fontSize: '--font-size-button-icon-sm',
    width: '--height-button-sm',
  },
  'square-xs': {
    fontSize: '--font-size-button-icon-xs',
    width: '--height-button-xs',
  },
}

type PseudoState = '' | 'Active' | 'Disabled' | 'Focus' | 'Hover' | `Has${string}`

type ComponentProperties<Keys extends string, Values extends string> = Record<
  Keys,
  {
    [key in `${keyof CSSProperties}${PseudoState}`]?: Values
  }
>

type ButtonSize = ComponentProperties<
  ButtonHeights,
  ButtonHeightTokens | SemanticSpacingTokens | TextFontSizeTokens
>

export const sizes: ButtonSize = {
  lg: {
    fontSize: '--font-size-text-sm',
    height: '--height-button-lg',
    paddingInline: '--spacing-xl',
    paddingInlineHasIcon: '--spacing-lg',
  },
  md: {
    fontSize: '--font-size-text-sm',
    height: '--height-button-md',
    paddingInline: '--spacing-xl',
    paddingInlineHasIcon: '--spacing-md',
  },
  sm: {
    fontSize: '--font-size-text-xs',
    height: '--height-button-sm',
    paddingInline: '--spacing-sm',
    paddingInlineHasIcon: '--spacing-md',
  },
  xs: {
    fontSize: '--font-size-text-xs',
    height: '--height-button-xs',
    paddingInline: '--spacing-sm',
    paddingInlineHasIcon: '--spacing-sm',
  },
}

export type Variant =
  | 'disabled'
  | 'ghost'
  | 'ghost-ai'
  | 'ghost-danger'
  | 'primary'
  | 'primary-ai'
  | 'primary-danger'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-ai'
  | 'tertiary-danger'

type ButtonVariant = ComponentProperties<Variant, ColorMix | ColorTokens | CSSProperties['cursor']>

export const variants: ButtonVariant = {
  disabled: {
    backgroundColorDisabled: '--color-beige-40',
    borderColorDisabled: '--color-beige-40',
    colorDisabled: '--color-beige-70',
    cursor: 'not-allowed',
    outlineColorFocus: '--color-beige-10',
  },
  ghost: {
    backgroundColorActive: 'color-mix(in oklab, var(--color-neutral-90) 40%, transparent)',
    backgroundColorHover: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
    borderColor: 'transparent',
    borderColorActive: 'transparent',
    borderColorHover: 'transparent',
    outlineColorFocus: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
  },
  'ghost-ai': {
    backgroundColorActive: '--color-violet-30',
    backgroundColorHover: '--color-violet-10',
    borderColor: 'transparent',
    borderColorActive: '--color-violet-30',
    borderColorHover: '--color-violet-10',
    color: '--color-violet-70',
    outlineColorFocus: '--color-violet-50',
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
  'primary-ai': {
    backgroundColor: '--color-violet-70',
    backgroundColorActive: '--color-violet-40',
    backgroundColorHover: '--color-violet-60',
    borderColor: '--color-violet-70',
    borderColorActive: '--color-violet-40',
    borderColorHover: '--color-violet-60',
    color: '--color-neutral-10',
    outlineColorFocus: '--color-violet-50',
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
  'tertiary-ai': {
    backgroundColor: '--color-neutral-10',
    backgroundColorActive: '--color-violet-30',
    backgroundColorHover: '--color-violet-10',
    borderColor: '--color-violet-70',
    color: '--color-violet-70',
    outlineColorFocus: '--color-violet-50',
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
export const hydrateCSSVarsWith = <T extends Record<string, string>>(tokens: T) => {
  if (!tokens) return {}
  return Object.entries(tokens).reduce(
    (acc, [key, value]) => {
      const isVariable = value.startsWith('--')
      const wrappedValue = isVariable ? `var(${value})` : value
      acc[`--${key}`] = wrappedValue
      return acc
    },
    {} as Record<string, string>
  )
}
