// UTILS

import type { primitives, semantics } from './tokens'

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

type OpacityRanges = 10 | 40

type PrimitiveColorTokens = keyof (typeof primitives)['colors']
type SemanticColorTokens = keyof (typeof semantics)['colors']
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
