import type { ComponentProps, ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { IconProps } from '../Icon/types'

export type StickyNoteProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  StickyNoteOptions

export type StickyNoteTitleProps = ComponentProps<'div'> &
  HTMLAttributes<HTMLDivElement> &
  StickyNoteTitleOptions

interface StickyNoteOptions {
  children: React.ReactNode
  handleClose?: () => void
  shape?: 'rectangle' | 'square'
  variant?: 'blue' | 'brand' | 'green' | 'orange' | 'pink' | 'teal' | 'violet'
}

interface StickyNoteTitleOptions {
  children: React.ReactNode
  icon?: IconProps['name']
}
