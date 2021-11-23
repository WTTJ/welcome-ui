import { compose, Props, SystemProps } from '@xstyled/system'
import { getPx, getTransition, getZIndex, style } from '@xstyled/styled-components'
import * as S from '@xstyled/system'
import { StyledConfig } from 'styled-components'

// Those are styles that were in v1 but not in v2
const oldProps = compose(
  style({ prop: 'opacity' }),
  style({ prop: 'overflow' }),
  style({ prop: 'transition', themeGet: getTransition }),
  style({ prop: 'position' }),
  style({ prop: 'zIndex', themeGet: getZIndex }),
  style({ prop: 'top', themeGet: getPx }),
  style({ prop: 'right', themeGet: getPx }),
  style({ prop: 'bottom', themeGet: getPx }),
  style({ prop: 'left', themeGet: getPx })
)

const SYSTEM_PROPS = Object.freeze([
  S.backgrounds,
  S.borders,
  S.boxShadow,
  S.color,
  S.display,
  S.flexboxes,
  S.grids,
  S.height,
  S.maxHeight,
  S.maxWidth,
  S.minHeight,
  S.minWidth,
  S.space,
  S.typography,
  S.verticalAlign,
  S.width,
  oldProps,
])

const WRAPPER_PROPS = Object.freeze([
  S.margin,
  S.marginBottom,
  S.marginLeft,
  S.marginRight,
  S.marginTop,
  S.mx,
  S.my,
  S.width,
  oldProps,
])

export const system = compose<WuiSystemProps>(...SYSTEM_PROPS)
export const wrapperSystem = compose<WuiWrapperSystemProps>(...WRAPPER_PROPS)
const componentProps = system.meta.props
  .filter(prop => !wrapperSystem.meta.props.includes(prop))
  .map(prop => {
    if (prop === 'w') return S['width']
    if (prop === 'h') return S['height']
    return (S as Props)[prop]
  })
  .filter(Boolean)
export const componentSystem = compose(...componentProps)

export const filterSystemProps = (prop: string): boolean => !system.meta.props.includes(prop)
export const shouldForwardProp: StyledConfig['shouldForwardProp'] = (prop, defaultValidatorFn) =>
  defaultValidatorFn(prop)

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
  Omit<React.ComponentPropsWithoutRef<Component>, 'as'>,
  Props,
  WuiProps & WuiTestProps & { as?: As }
>

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreateWuiPropsWithRef<Component extends As, Props = {}> = MergeProps<
  Omit<React.ComponentProps<Component>, 'as'>,
  Props,
  WuiProps & WuiTestProps & { as?: As }
>

export type ExtraSize = number | string
