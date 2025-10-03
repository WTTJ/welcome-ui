import type { ComponentPropsWithRef } from 'react'

export type BodyProps = ComponentPropsWithRef<'div'>
export type CardProps = ComponentPropsWithRef<'div'>
export type CoverProps = ComponentPropsWithRef<'div'> & CoverOptions

interface CoverOptions {
  alt: string
  src: string
}
