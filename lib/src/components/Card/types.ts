import type { ComponentPropsWithRef, ReactNode } from 'react'

export type BodyProps = BodyOptions & ComponentPropsWithRef<'div'>
export type CardProps = CardOptions & ComponentPropsWithRef<'div'>
export type CoverProps = ComponentPropsWithRef<'div'> & CoverOptions
export type FooterProps = ComponentPropsWithRef<'div'>
export type HeaderProps = ComponentPropsWithRef<'div'> & HeaderOptions

interface BodyOptions {
  metadata?: ReactNode
}

interface CardOptions {
  disabled?: boolean
  size?: 'lg' | 'md' | 'sm'
}

interface CoverOptions {
  alt: string
  src: string
}

interface HeaderOptions {
  disabled?: boolean
  onClose?: () => void
}
