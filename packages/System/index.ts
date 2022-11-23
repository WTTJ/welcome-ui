import React from 'react'
import type { SystemProps } from 'jsx-to-styled'
import type { DefaultTheme } from 'styled-components'

export { default as system } from 'jsx-to-styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = any & { theme: DefaultTheme }
type Breakpoint = keyof DefaultTheme['screens']

export const down = (breakpoint: Breakpoint) => (props: Props) => {
  const value = props.theme.screens?.[breakpoint] || breakpoint
  return `@media (max-width: ${value})`
}

export const up = (breakpoint: Breakpoint) => (props: Props) => {
  const value = props.theme.screens?.[breakpoint] || breakpoint
  return `@media (min-width: ${value})`
}

export type WuiProps = SystemProps

export interface WuiTestProps {
  dataTestId?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>

export type RightJoinProps<SourceProps, OverrideProps> = Omit<SourceProps, keyof OverrideProps> &
  OverrideProps

export type MergeProps<ComponentProps, Props, WuiProps> = RightJoinProps<ComponentProps, Props> &
  RightJoinProps<WuiProps, Props>

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreateWuiProps<Component extends As, Props = {}> = MergeProps<
  Omit<React.ComponentProps<Component>, keyof WuiProps>,
  Props,
  WuiProps & WuiTestProps & { as?: As }
>

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreateWuiComponent<Component extends As, Options = {}> = {
  <AsComponent extends As>(
    props: CreateWuiProps<AsComponent, Options> & { as: AsComponent }
  ): JSX.Element
  (props: CreateWuiProps<Component, Options>): JSX.Element
  displayName?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const forwardRef = <Component extends As, Props = {}>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ForwardRefRenderFunction<any, Props>
): CreateWuiComponent<Component, Props> => {
  return React.forwardRef(component) as unknown as CreateWuiComponent<Component, Props>
}
