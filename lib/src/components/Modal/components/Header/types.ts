import type { HTMLAttributes, ReactElement } from 'react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

export interface HeaderOptions {
  icon?: ReactElement
  subtitle?: JSX.Element | string
  title: JSX.Element | string
}

export type HeaderProps = MergeProps<HeaderOptions, HTMLAttributes<HTMLDivElement>>
