import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

export type BodyProps = BodyOptions & ComponentPropsWithRef<'div'>
export type CardProps = CardOptions &
  Omit<
    ComponentPropsWithRef<'div'>,
    | 'aria-disabled'
    | 'aria-label'
    | 'data-active'
    | 'interactive'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyUp'
    | 'role'
    | 'tabIndex'
  >
export type CoverProps = ComponentPropsWithRef<'div'> & CoverOptions
export type FooterProps = ComponentPropsWithRef<'div'>
export type HeaderProps = ComponentPropsWithRef<'div'> & HeaderOptions

interface BodyOptions {
  metadata?: ReactNode
}

interface CardOptions {
  as?: ElementType
  disabled?: boolean
  onClick?: () => void
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
