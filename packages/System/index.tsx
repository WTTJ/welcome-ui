import React from 'react'
import { SystemProps, system as xstyledSystem } from '@xstyled/system'
import { StyledConfig } from 'styled-components'

// todo clean on v5
export const system = () => {
  console.warn(
    'You must use "system" from @xstyled/system instead of @welcome-ui/system, it will be deprecated in welcome-ui v5'
  )
  return xstyledSystem
}

// todo clean on v5
export const wrapperSystem = system
// todo clean on v5
export const componentSystem = system

export const filterSystemProps = (prop: string): boolean => !xstyledSystem.meta.props.includes(prop)
export const shouldForwardProp: StyledConfig['shouldForwardProp'] = (prop, defaultValidatorFn) =>
  defaultValidatorFn(prop)

export interface WuiTestProps {
  dataTestId?: string
}

export type WuiProps = SystemProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>

export type RightJoinProps<SourceProps, OverrideProps> = Omit<SourceProps, keyof OverrideProps> &
  OverrideProps

export type MergeProps<ComponentProps, Props, WuiProps> = RightJoinProps<ComponentProps, Props> &
  RightJoinProps<WuiProps, Props>

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreateWuiProps<Component extends As, Props = {}> = MergeProps<
  React.ComponentProps<Component>,
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

export type ExtraSize = number | string
