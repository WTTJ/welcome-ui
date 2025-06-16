import isPropValid from '@emotion/is-prop-valid'
import type { SystemProps } from '@xstyled/styled-components'
import type { JSX, PropsWithoutRef } from 'react'
import React from 'react'

export const shouldForwardProp = (prop: string) => isPropValid(prop)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>

export type CreateWuiComponent<Component extends As, Options = unknown> = {
  <AsComponent extends As>(
    props: CreateWuiProps<AsComponent, Options> & { as: AsComponent }
  ): JSX.Element
  (props: CreateWuiProps<Component, Options>): JSX.Element
  displayName?: string
}

export type CreateWuiProps<Component extends As, Props = unknown> = MergeProps<
  Omit<React.ComponentProps<Component>, keyof WuiProps>,
  Props,
  WuiProps & WuiTestProps & { as?: As }
>

export type MergeProps<ComponentProps, Props, WuiProps> = RightJoinProps<ComponentProps, Props> &
  RightJoinProps<WuiProps, Props>

export type RightJoinProps<SourceProps, OverrideProps> = Omit<SourceProps, keyof OverrideProps> &
  OverrideProps

export type WuiProps = SystemProps

export interface WuiTestProps {
  dataTestId?: string
}

export const forwardRef = <Component extends As, Props = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ForwardRefRenderFunction<any, PropsWithoutRef<Props>>
): CreateWuiComponent<Component, Props> => {
  return React.forwardRef(component) as unknown as CreateWuiComponent<Component, Props>
}
