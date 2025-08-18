// UTILS

import type { components, primitives, semantics } from './constants'

export type ButtonHeights = ExtractTailNumber<ButtonHeightTokens>

// FIXME this type naming mentions height but it also includes font sizes
export type ButtonHeightTokens = keyof (typeof components)['button']
export type ColorMix = `color-mix(in oklab, var(${ColorTokens}) ${OpacityRanges}%, transparent)`

export type ColorTokens = 'transparent' | PrimitiveColorTokens | SemanticColorTokens

export type SemanticFontSizeTokens = keyof (typeof semantics)['fontSizes']
export type SemanticHeightTokens = keyof (typeof semantics)['heights']
export type SemanticSpacingTokens = keyof (typeof semantics)['spacings']
export type TextFontSizeTokens = keyof (typeof components)['text']

// type BorderTokens = keyof (typeof primitives)['borders']
// type ColorIntensities = ExtractTailNumber<PrimitiveColorTokens>
/**
 * Extracts the tail value from a string of the format '--color-red-10' or '--height-button-lg'
 */
type ExtractTailNumber<S extends string> = S extends `${string}-${infer N}`
  ? ExtractTailNumber<N>
  : S
type OpacityRanges = 10 | 40
type PrimitiveColorTokens = keyof (typeof primitives)['colors']
// type PrimitiveFontFamilyTokens = keyof (typeof primitives)['fontFamilies']
// type PrimitiveFontSizeTokens = keyof (typeof primitives)['fontSizes']
// type PrimitiveFontWeightTokens = keyof (typeof primitives)['fontWeights']
// type PrimitiveHeightTokens = keyof (typeof primitives)['heights']
// type PrimitiveLetterSpacingTokens = keyof (typeof primitives)['letterSpacings']
// type PrimitiveLineHeightTokens = keyof (typeof primitives)['lineHeights']
// type PrimitiveRadiusTokens = keyof (typeof primitives)['radii']
// type PrimitiveScreenTokens = keyof (typeof primitives)['screens']
// type PrimitiveShadowTokens = keyof (typeof primitives)['shadows']
// type PrimitiveSpacingTokens = keyof (typeof primitives)['spacings']
// type PrimitiveTransitionTokens = keyof (typeof primitives)['transitions']
type SemanticColorTokens = keyof (typeof semantics)['colors']
