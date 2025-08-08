/* eslint-disable perfectionist/sort-modules */
import './theme.css'

type Intensity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
// TODO FIXME get all sizes peut-^tre avec un codegen ?
type SpacingSize = 'lg' | 'md' | 'sm' | 'xl' | 'xs'
// TODO FIXME get all sizes peut-^tre avec un codegen ?
type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'
// TODO FIXME get all sizes peut-^tre avec un codegen ?
type FontSize = 'lg' | 'md' | 'sm' | 'xl' | 'xs'

type OpacityRange = 10 | 40

//FIXME get all color names peut-^tre avec un codegen ?
type Color = 'blue' | 'brand' | 'green' | 'neutral' | 'red'

export type CSSColorVar = 'transparent' | `--color-${Color}-${Intensity}`

// const redColor: CSSColorVar = '--color-neutral-90'

export type ColorMix = `color-mix(in oklab, var(${CSSColorVar}) ${OpacityRange}%, transparent)`

// const lightBg: ColorMix = 'color-mix(in oklab, var(--color-blue-10) 10%, transparent)'

export type CSSButtonHeightVar = `--height-button-${ButtonSize}`

export type CSSSpacingVar = `--spacing-${SpacingSize}`

// const size: CSSSpacingVar = '--spacing-lg'

export type CSSFontSizeVar = `--text-${FontSize}`
