/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SystemProps } from '@xstyled/styled-components'
import type { PropsWithoutRef } from 'react'

import isPropValid from '@emotion/is-prop-valid'
import React from 'react'

export const shouldForwardProp = (prop: string) => isPropValid(prop)

export type As<Props = any> = React.ElementType<Props>

export type CreateWuiComponent<Component extends As, Options = object> = {
  <AsComponent extends As>(
    props: { as: AsComponent } & CreateWuiProps<AsComponent, Options>
  ): JSX.Element
  (props: CreateWuiProps<Component, Options>): JSX.Element
  displayName?: string
}

export type CreateWuiProps<Component extends As, Props = object> = MergeProps<
  Omit<React.ComponentProps<Component>, keyof WuiProps>,
  Props,
  { as?: As } & WuiProps & WuiTestProps
>

export type MergeProps<ComponentProps, Props, WuiProps> = RightJoinProps<ComponentProps, Props> &
  RightJoinProps<WuiProps, Props>

export type RightJoinProps<SourceProps, OverrideProps> = Omit<SourceProps, keyof OverrideProps> &
  OverrideProps

export type WuiProps = SystemProps

export interface WuiTestProps {
  dataTestId?: string
}

export const forwardRef = <Component extends As, Props = object>(
  component: React.ForwardRefRenderFunction<any, PropsWithoutRef<Props>>
): CreateWuiComponent<Component, Props> => {
  return React.forwardRef(component) as unknown as CreateWuiComponent<Component, Props>
}
