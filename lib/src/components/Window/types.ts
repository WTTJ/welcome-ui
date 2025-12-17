import type { HTMLAttributes, PropsWithChildren } from 'react'

export type ActionButtonProps = HTMLAttributes<HTMLButtonElement>

export type BodyProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
}

export type BoxTextProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export type HeaderProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>
export type MediaProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>
export type WindowProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>
