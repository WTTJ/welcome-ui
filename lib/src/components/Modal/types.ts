/* eslint-disable perfectionist/sort-modules */

import type { DialogOptions, DialogStore, DialogStoreProps } from '@ariakit/react'
import type { ComponentProps, HTMLAttributes, PropsWithChildren } from 'react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

import type { IconName } from '../Icon/types'

export type TriggerProps = PropsWithChildren<{ store: DialogStore }>

export type UseModal = DialogStore

export type UseModalProps = DialogStoreProps & {
  /**
   * Call a function before closing the modal
   * @deprecated use onClose on <Modal /> instead
   */
  onClose?: () => void
}

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'auto' | 'sm' | 'md' | 'lg'

export interface ModalOptions {
  ariaLabel: string
  children: React.ReactElement
  size?: Size
}

type BaseDialogOptions = Omit<DialogOptions<'div'>, 'as'>

export type ModalProps = MergeProps<BaseDialogOptions & ModalOptions, ComponentProps<'div'>>

export interface HeaderOptions {
  title: JSX.Element | string
}

export type HeaderProps = MergeProps<HeaderOptions, HTMLAttributes<HTMLDivElement>>

export interface BodyOptions {
  iconName?: IconName
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
}

export type BodyProps = MergeProps<BodyOptions, PropsWithChildren<HTMLAttributes<HTMLElement>>>

export type ContentProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  withClosingButton?: boolean
}

export type BackdropProps = Pick<BaseDialogOptions, 'backdrop' | 'hideOnInteractOutside'>

export type FooterProps = HTMLAttributes<HTMLDivElement>
