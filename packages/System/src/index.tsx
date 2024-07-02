import React from 'react'
import { type SystemProps } from '@xstyled/styled-components'
import * as S from '@xstyled/styled-components'

export const shouldForwardProp = (prop: string, defaultValidatorFn: (prop: string) => boolean) => {
  return defaultValidatorFn(prop)
}

export type WuiOldProps = S.OpacityProps &
  S.OverflowProps &
  S.TransitionProps &
  S.ZIndexProps &
  S.TopProps &
  S.RightProps &
  S.BottomProps &
  S.LeftProps

export type WuiSystemProps = S.BackgroundsProps &
  S.BorderProps &
  S.BoxShadowProps &
  S.ColorProps &
  S.DisplayProps &
  S.FlexboxesProps &
  S.GridsProps &
  S.HeightProps &
  S.MaxHeightProps &
  S.MaxWidthProps &
  S.MinHeightProps &
  S.MinWidthProps &
  S.SpaceProps &
  S.TypographyProps &
  S.VerticalAlignProps &
  S.WidthProps &
  WuiOldProps

export type WuiWrapperSystemProps = S.MarginProps &
  S.MarginBottomProps &
  S.MarginLeftProps &
  S.MarginRightProps &
  S.MarginTopProps &
  S.MarginXProps &
  S.MarginYProps &
  S.WidthProps &
  WuiOldProps

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

export type ExtraSize = number | string
