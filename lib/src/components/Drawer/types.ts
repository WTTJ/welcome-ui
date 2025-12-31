import type { DialogOptions, DialogProps, DialogStore } from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'

import type { CloseButtonProps } from '@/components/CloseButton/types'
import type { IconName } from '@/components/Icon/types'
export type {
  DialogStore as UseDrawer,
  DialogStoreProps as UseDrawerProps,
  DialogStoreState as UseDrawerState,
} from '@ariakit/react'

export type BackdropOptions = { hideOnInteractOutside?: boolean }

export type BackdropProps = BackdropOptions & ComponentPropsWithRef<'div'>

export type CloseProps = CloseButtonProps

export type ContentProps = ComponentPropsWithRef<'div'> & {
  iconName?: IconName
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
}

export interface DrawerOptions extends DialogOptions<'div'> {
  fullscreen?: boolean
  placement?: Placement
  size?: Size
  withBackdrop?: boolean
  withCloseButton?: boolean
}

export type DrawerProps = ComponentPropsWithRef<'div'> & DialogProps<'div'> & DrawerOptions

export type FooterProps = ComponentPropsWithRef<'div'> & {
  variant?: 'full' | 'right'
}

export type TitleProps = ComponentPropsWithRef<'div'>

export type TriggerProps = ComponentPropsWithRef<'button'> & { store: DialogStore }

type Placement = 'bottom' | 'left' | 'right' | 'top'

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
type Size = 'auto' | 'sm' | 'md' | 'lg' | string
