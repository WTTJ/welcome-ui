/* eslint-disable perfectionist/sort-modules */
// UTILS

import type { themeVariables } from './generated/variables'

export type ThemeVariables = typeof themeVariables

export type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E
  }
>

export type ColorTokens = Extract<keyof ThemeVariables, `--color-${string}`>

export type ColorTokenNames = {
  [K in ColorTokens]: K extends `--${infer Rest}` ? Rest : never
}[ColorTokens]

export type ColorVariants = {
  [K in keyof ThemeVariables]: K extends `--color-${infer Rest}` ? Rest : never
}[keyof ThemeVariables]

export type ScreenSizes = {
  [K in keyof ThemeVariables]: K extends `--breakpoint-${infer Rest}` ? Rest : never
}[keyof ThemeVariables]
