/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

/**
 * The following source code is mainly inspired by
 * https://github.com/pluralsight/classic-design-system/blob/08f0962dec18d99e1799a16c7b7eac86f01cbc27/packages/util/src/primatives.ts
 */

export type As<BaseProps = any> = React.ElementType<BaseProps>
/**
 * Omit will not distribute over unions by default, this utility type will
 * distribute it, allowing to omit keys from each member of the union.
 *
 * @example
 *  type A = { a: string; b: number }
 *  type B = { a: string; c: boolean }
 *  type Union = A | B
 *
 *  // Without DistributiveOmit
 *  type Test1 = Omit<Union, 'a'> // never  (because 'a' is in both A and B)
 *  type Test2 = Omit<Union, 'b'> // B      (because 'b' is not in B)
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never
export interface ForwardRefWithAsRenderFunction<
  DefaultComponentType extends As,
  ComponentProps extends PropsType = Record<string, any>,
> {
  (
    props: PropsFromAs<DefaultComponentType, ComponentProps>,
    ref: React.Ref<React.ElementRef<DefaultComponentType>>
  ): null | React.ReactElement
  // explicit rejected with `never` required due to
  // https://github.com/microsoft/TypeScript/issues/36826
  /**
   * defaultProps are not supported on render functions
   */
  defaultProps?: never
  displayName?: string
  /**
   * propTypes are not supported on render functions
   */
  propTypes?: never
}

export interface FunctionComponentWithAs<
  DefaultComponentType extends As,
  ComponentProps extends PropsType,
> {
  /**
   * Inherited from React.FunctionComponent with modification to support `as`
   */
  <CompType extends As = DefaultComponentType>(
    props: PropsWithAs<CompType, ComponentProps>,
    context?: any
  ): null | React.ReactElement<any, any>
  /**
   * Inherited from React.FunctionComponent
   */
  defaultProps?: Partial<PropsWithAs<DefaultComponentType, ComponentProps>>
  displayName?: string
}

/**
 * This will merge two prop objects, giving P1 priority over P2
 * In other words, any props in P1 that are also in P2 will override the ones in P2
 * This is useful when combining the props of the `as` component with your own props
 */
export type MergeProps<P1 = EmptyProps, P2 = EmptyProps> = DistributiveOmit<P2, keyof P1> & P1

/**
 * Get the props of a component with `as` support
 * This will take care of the ref and the merging of the props
 */
export type PropsFromAs<
  CompType extends As,
  ComponentProps extends PropsType,
> = React.PropsWithoutRef<PropsWithAs<CompType, ComponentProps>>

/**
 * Props of a component with `as` support
 */
export type PropsWithAs<CompType extends As, ComponentProps extends PropsType> = MergeProps<
  WithAs<CompType, ComponentProps>,
  React.ComponentProps<CompType>
>

/**
 * An empty object type
 */
type EmptyProps = Record<never, never>

/**
 * PropsType can either be an object or null/undefined
 */
type PropsType = null | Record<string, any>

/**
 * Adds the `as` prop to a component's props
 */
type WithAs<DefaultComponentType extends As, ComponentProps extends EmptyProps> = MergeProps<
  { as?: DefaultComponentType },
  ComponentProps
>

/**
 * Wraps a component with a forwardRef and adds the `as` prop support
 */
export function forwardRefWithAs<
  ComponentProps extends PropsType,
  DefaultComponentType extends As = 'div',
>(render: ForwardRefWithAsRenderFunction<DefaultComponentType, ComponentProps>) {
  return React.forwardRef(render) as unknown as FunctionComponentWithAs<
    DefaultComponentType,
    ComponentProps
  >
}
