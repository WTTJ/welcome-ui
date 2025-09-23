import type { DialogOptions, DialogStore } from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'

import type { CloseButtonProps } from '@/components/CloseButton/types'

export type {
  DialogStore as UseDrawer,
  DialogStoreProps as UseDrawerProps,
  DialogStoreState as UseDrawerState,
} from '@ariakit/react'

export type BackdropOptions = { hideOnInteractOutside?: boolean }

export type BackdropProps = BackdropOptions & ComponentPropsWithRef<'div'>

export type CloseProps = CloseButtonProps & { className?: string }

export type ContentOptions = { className?: string }

export type ContentProps = ComponentPropsWithRef<'div'> & ContentOptions

export interface DrawerOptions extends DialogOptions<'div'> {
  placement?: Placement
  size?: Size
  withBackdrop?: boolean
  withCloseButton?: boolean
}

export type DrawerProps = ComponentPropsWithRef<'div'> & DrawerOptions

export type FooterOptions = { className?: string }

export type FooterProps = ComponentPropsWithRef<'div'> & FooterOptions

export type TitleOptions = { className?: string }

export type TitleProps = ComponentPropsWithRef<'div'> & TitleOptions

export type TriggerProps = { as?: React.ElementType; children: React.ReactNode; store: DialogStore }

type Placement = 'bottom' | 'left' | 'right' | 'top'

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
type Size = 'auto' | 'sm' | 'md' | 'lg' | string
