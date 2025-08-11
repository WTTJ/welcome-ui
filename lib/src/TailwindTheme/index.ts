/* eslint-disable perfectionist/sort-modules */
import './theme.css'
import fs from 'fs'

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

const getStringFrom = (map): string => `${map.property} {${map.value}}`

const getCSSFrom = (mappedCSS): string => {
  const properties = Object.entries(mappedCSS).map(([tokenHierarchy, values]) => {
    return Object.entries(values).map(([comment, directives]) => {
      const directivesString = Object.entries(directives).map(([property, value]) => {
        return `${property}: ${value};\n`
      }
      return `{\n//${comment}\n\n${directivesString} }`)
    })
  })
  return properties
}

const fontFaces = fs.readFileSync('./fontFaces.css', 'utf8')
const baseStyles = fs.readFileSync('./base.css', 'utf8')

const components = {
  button: {
    '--height-button-lg': 'var(--height-elements-lg)',
    '--height-button-md': 'var(--height-elements-md)',
    '--height-button-sm': 'var(--height-elements-sm)',
    '--height-button-xs': 'var(--height-elements-xs)',
  },
}

const semantics = {
  colors: {
    '--color-brand-10': 'var(--color-yellow-10)',
    '--color-brand-20': 'var(--color-yellow-20)',
    '--color-brand-30': 'var(--color-yellow-30)',
    '--color-brand-40': 'var(--color-yellow-40)',
    '--color-brand-50': 'var(--color-yellow-50)',
    '--color-brand-60': 'var(--color-yellow-60)',
    '--color-brand-70': 'var(--color-yellow-70)',
    '--color-brand-80': 'var(--color-yellow-80)',
    '--color-brand-90': 'var(--color-yellow-90)',
    '--color-overlay': 'color-mix(in oklab, var(--color-neutral-90) 55%, transparent)',
    '--color-secondary-blue': 'var(--color-blue-40)',
    '--color-secondary-green': 'var(--color-green-30)',
    '--color-secondary-orange': 'var(--color-red-orange-40)',
    '--color-secondary-pink': 'var(--color-pink-40)',
    '--color-secondary-teal': 'var(--color-teal-40)',
    '--color-secondary-violet': 'var(--color-violet-40)',
  },
  elements: {
    '--height-elements-lg': 'var(--height-48)',
    '--height-elements-md': 'var(--height-40)',
    '--height-elements-sm': 'var(--height-32)',
    '--height-elements-xs': 'var(--height-24)',
  },
}
const primitives = {
  borders: {
    '--border-width-lg': '3px',
    '--border-width-md': '2px',
    '--border-width-sm': '1px',
  },
  colors: {
    '--color-beige-10': '#fbf9f7',
    '--color-beige-20': '#f6f3ef',
    '--color-beige-30': '#eae4de',
    '--color-beige-40': '#d2cbc3',
    '--color-beige-50': '#a7a096',
    '--color-beige-60': '#605b55',
    '--color-beige-70': '#4d4944',
    '--color-beige-80': '#33302d',
    '--color-beige-90': '#1e1c1a',
    '--color-blue-10': '#e0f5ff',
    '--color-blue-20': '#bbeaff',
    '--color-blue-30': '#9bdef7',
    '--color-blue-40': '#55c3e9',
    '--color-blue-50': '#27a5d0',
    '--color-blue-60': '#057aa3',
    '--color-blue-70': '#025a79',
    '--color-blue-80': '#013c50',
    '--color-blue-90': '#00202b',
    '--color-green-10': '#eaffd4',
    '--color-green-20': '#d6f6b4',
    '--color-green-30': '#bade94',
    '--color-green-40': '#9fc873',
    '--color-green-50': '#83ad57',
    '--color-green-60': '#5a8034',
    '--color-green-70': '#40611f',
    '--color-green-80': '#2a4210',
    '--color-green-90': '#142603',
    '--color-neutral-10': '#ffffff',
    '--color-neutral-20': '#f3f3f3',
    '--color-neutral-30': '#dedede',
    '--color-neutral-40': '#bdbdbd',
    '--color-neutral-50': '#989898',
    '--color-neutral-60': '#585858',
    '--color-neutral-70': '#444444',
    '--color-neutral-80': '#212121',
    '--color-neutral-90': '#000000',
    '--color-orange-10': '#ffebce',
    '--color-orange-20': '#ffd495',
    '--color-orange-30': '#ffbb59',
    '--color-orange-40': '#ff9f14',
    '--color-orange-50': '#db860a',
    '--color-orange-60': '#a6670a',
    '--color-orange-70': '#824f06',
    '--color-orange-80': '#573607',
    '--color-orange-90': '#382303',
    '--color-pink-10': '#ffeaf5',
    '--color-pink-20': '#ffd5eb',
    '--color-pink-30': '#feb7dc',
    '--color-pink-40': '#f696c8',
    '--color-pink-50': '#e468a8',
    '--color-pink-60': '#c24887',
    '--color-pink-70': '#972962',
    '--color-pink-80': '#6d1142',
    '--color-pink-90': '#3c0725',
    '--color-red-10': '#fbdedc',
    '--color-red-20': '#fcc7c3',
    '--color-red-30': '#fdb3ae',
    '--color-red-40': '#ff9490',
    '--color-red-50': '#ff6165',
    '--color-red-60': '#e1003a',
    '--color-red-70': '#a80029',
    '--color-red-80': '#75001a',
    '--color-red-90': '#450101',
    '--color-red-orange-10': '#ffded0',
    '--color-red-orange-20': '#ffc9b2',
    '--color-red-orange-30': '#ffb595',
    '--color-red-orange-40': '#ff9868',
    '--color-red-orange-50': '#e67b49',
    '--color-red-orange-60': '#c45927',
    '--color-red-orange-70': '#9f4217',
    '--color-red-orange-80': '#6d2605',
    '--color-red-orange-90': '#451701',
    '--color-teal-10': '#d5fffa',
    '--color-teal-20': '#aaf4eb',
    '--color-teal-30': '#6de1d2',
    '--color-teal-40': '#00c7ae',
    '--color-teal-50': '#01aa95',
    '--color-teal-60': '#008070',
    '--color-teal-70': '#00544a',
    '--color-teal-80': '#003d35',
    '--color-teal-90': '#00211d',
    '--color-violet-10': '#f2f2ff',
    '--color-violet-20': '#e0e0ff',
    '--color-violet-30': '#c9c9ff',
    '--color-violet-40': '#acacff',
    '--color-violet-50': '#9080f0',
    '--color-violet-60': '#7958d6',
    '--color-violet-70': '#593cac',
    '--color-violet-80': '#422a86',
    '--color-violet-90': '#1f0e51',
    '--color-yellow-10': '#fff8d9',
    '--color-yellow-20': '#fff1b2',
    '--color-yellow-30': '#ffe166',
    '--color-yellow-40': '#ffcd00',
    '--color-yellow-50': '#e5b800',
    '--color-yellow-60': '#b69200',
    '--color-yellow-70': '#846a01',
    '--color-yellow-80': '#604d00',
    '--color-yellow-90': '#423500',
  },
  fontFamilies: {
    '--default-font-family': '"Work Sans", sans-serif',
    '--font-family-headings': '"welcome-font", sans-serif',
    '--font-family-icons': '"welcome-icon-font"',
  },
  fontSizes: {
    '--text-h0': '4.0625rem',
    '--text-h1': '2.8125rem',
    '--text-h2': '2.25rem',
    '--text-h3': '1.625rem',
    '--text-h4': '1.25rem',
    '--text-h5': '1rem',
    '--text-h6': '0.875rem',
    '--text-lg': '1.125rem',
    '--text-md': '1rem',
    '--text-sm': '0.875rem',
    '--text-subtitle-md': '0.8125rem',
    '--text-subtitle-sm': '0.6875rem',
    '--text-xs': '0.75rem',
  },
  fontWeights: {
    '--font-weight-bold': '600',
    '--font-weight-medium': '500',
    '--font-weight-regular': '400',
  },
  heights: {
    '--height-8': '0.5rem',
    '--height-10': '0.625rem',
    '--height-16': '1rem',
    '--height-20': '1.25rem',
    '--height-24': '1.5rem',
    '--height-32': '2rem',
    '--height-40': '2.5rem',
    '--height-48': '3rem',
    '--height-64': '4rem',
  },
  letterSpacings: {
    '--letter-spacing-h0': '-0.10625rem',
    '--letter-spacing-h1': '-0.075rem',
    '--letter-spacing-h2': '-0.0625rem',
    '--letter-spacing-h3': '-0.05625rem',
    '--letter-spacing-h4': '-0.0375rem',
    '--letter-spacing-h5': '-0.03125rem',
    '--letter-spacing-h6': '-0.03125rem',
    '--letter-spacing-subtitle-md': '-0.0125rem',
    '--letter-spacing-subtitle-sm': '-0.0125rem',
  },
  lineHeights: {
    '--line-height-h0': '4.5rem',
    '--line-height-h1': '3rem',
    '--line-height-h2': '2.5rem',
    '--line-height-h3': '2rem',
    '--line-height-h4': '1.5rem',
    '--line-height-h5': '1.125rem',
    '--line-height-h6': '1rem',
    '--line-height-subtitle-md': '1',
    '--line-height-subtitle-sm': '1',
  },
  radii: {
    '--radius-2xl': '1.5rem',
    '--radius-lg': '0.5rem',
    '--radius-md': '0.25rem',
    '--radius-sm': '0.125rem',
    '--radius-xl': '1rem',
  },
  screens: {
    '--breakpoint-2xl': '1440px',
    '--breakpoint-3xl': '1620px',
    '--breakpoint-4xl': '1920px',
    '--breakpoint-lg': '980px',
    '--breakpoint-md': '736px',
    '--breakpoint-sm': '480px',
    '--breakpoint-xl': '1280px',
    '--breakpoint-xs': '0px',
  },
  shadows: {
    '--shadow-focus': '0 0 0 2px var(--color-brand-40)',
    '--shadow-focus-danger': '0 0 0 2px var(--color-red-30)',
    '--shadow-focus-success': '0 0 0 2px var(--color-green-30)',
    '--shadow-focus-warning': '0 0 0 2px var(--color-orange-20)',
    '--shadow-md': '3px 4px 10px 0 color-mix(in oklab, var(--color-neutral-90) 7%, transparent)',
    '--shadow-sm': '1px 2px 4px 0 color-mix(in oklab, var(--color-neutral-90) 5%, transparent)',
  },
  spacings: {
    '--spacing-3xl': '3rem',
    '--spacing-4xl': '4rem',
    '--spacing-5xl': '6rem',
    '--spacing-6xl': '8rem',
    '--spacing-7xl': '12rem',
    '--spacing-lg': '1rem',
    '--spacing-md': '0.75rem',
    '--spacing-sm': '0.5rem',
    '--spacing-xl': '1.5rem',
    '--spacing-xs': '0.25rem',
    '--spacing-xxl': '2rem',
    '--spacing-xxs': '0.125rem',
  },
  transitions: {
    '--duration-fast': '100ms',
    '--duration-medium': '300ms',
    '--duration-slow': '500ms',
    '--timing-primary': 'ease',
    '--timing-secondary': 'linear',
    '--timing-tertiary': 'cubic-bezier(0.41, 0.094, 0.54, 0.07)',
  },
}

const theme = {
  property: '@theme',
  value: getCSSFrom({ components, primitives, semantics }),
}

const layer = {
  property: '@layer base',
  value: baseStyles,
}

return `${fontFaces} ${getStringFrom(theme)} ${getStringFrom(layer)}`
