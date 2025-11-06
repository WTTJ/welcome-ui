import type { ComponentProps, ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { IconProps } from '../Icon/types'

export type StickyNotesProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  StickyNotesOptions

export type StickyNotesTitleProps = ComponentProps<'div'> &
  HTMLAttributes<HTMLDivElement> &
  StickyNotesTitleOptions

interface StickyNotesOptions {
  children: React.ReactNode
  handleClose?: () => void
  shape?: 'rectangle' | 'square'
  variant?: Variant
}

interface StickyNotesTitleOptions {
  children: React.ReactNode
  icon?: IconProps['name']
  variant?: Variant
}

type Variant = 'blue' | 'brand' | 'green' | 'orange' | 'pink' | 'teal' | 'violet'
