import type { DialogOptions, DialogStore, DialogStoreProps } from '@ariakit/react'
import type { HTMLAttributes, PropsWithChildren } from 'react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

export type BackdropProps = Pick<ModalOptions, 'backdrop' | 'hideOnInteractOutside'>

export type BodyProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export interface ModalOptions extends Omit<DialogOptions<'div'>, 'as'> {
  ariaLabel: string
  children: React.ReactElement
  size?: Size
}

export type ModalProps = MergeProps<ModalOptions, HTMLAttributes<HTMLDivElement>>

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'auto' | 'xs' | 'sm' | 'md' | 'lg'

export type TriggerProps = PropsWithChildren<{ store: DialogStore }>

export type UseModal = DialogStore

export type UseModalProps = DialogStoreProps & {
  /**
   * Call a function before closing the modal
   * @deprecated use onClose on <Modal /> instead
   */
  onClose?: () => void
}
