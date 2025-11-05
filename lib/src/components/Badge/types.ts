import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

export type BadgeProps = BadgeOptions &
  ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement>

interface BadgeOptions {
  children?: number | React.ReactElement | string
  size?: 'lg' | 'md' | 'sm'
  variant?: 'blue' | 'brand' | 'neutral' | 'warm'
  // if a number is higher than 99, we replace this number by 99+
  withNumberAbbreviation?: boolean
}
