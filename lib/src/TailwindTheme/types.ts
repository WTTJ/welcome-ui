// UTILS

import type { components, primitives, semantics } from './tokens'

export type ButtonFontSizeTokens = Extract<ButtonComponentTokens, `--font-size${string}`>
export type ButtonHeightTokens = Extract<ButtonComponentTokens, `--height${string}`>

export type ButtonShapes = ExtractTailValue<ButtonShapeTokens>
export type ButtonShapeTokens = Extract<ButtonComponentTokens, `${string}button-shape${string}`>

export type ButtonSizes = ExtractTailValue<ButtonSizeTokens>
export type ButtonSizeTokens = Extract<ButtonComponentTokens, `${string}button-size${string}`>

export type ButtonVariants = ExtractTailValueAfter<ButtonVariantTokens, 'variant'>
export type ButtonVariantTokens = Extract<
  ButtonComponentTokens,
  `${string}button${string}variant${string}`
>

export type ColorMix = `color-mix(in oklab, var(${ColorTokens}) ${OpacityRanges}%, transparent)`
export type ColorTokens = 'transparent' | PrimitiveColorTokens | SemanticColorTokens

export type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E
  }
>

export type SemanticFontSizeTokens = keyof (typeof semantics)['fontSizes']

export type SemanticHeightTokens = keyof (typeof semantics)['heights']
export type SemanticSpacingTokens = keyof (typeof semantics)['spacings']
export type TextFontSizeTokens = Extract<TextTokens, `--font-size${string}`>
type ButtonComponentTokens = keyof (typeof components)['button']
// type BorderTokens = keyof (typeof primitives)['borders']
// type ColorIntensities = ExtractTailValue<PrimitiveColorTokens>
/**
 * Extracts the tail value from a string of the format '--color-red-10' or '--height-button-lg'
 */
type ExtractTailValue<S extends string> = S extends `${string}-${infer N}` ? ExtractTailValue<N> : S
type ExtractTailValueAfter<
  S extends string,
  V extends string,
> = S extends `${string}-${V}-${infer N}` ? ExtractTailValueAfter<N, V> : S
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

type TextTokens = keyof (typeof components)['text']
