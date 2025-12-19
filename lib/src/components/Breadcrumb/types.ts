/* eslint-disable perfectionist/sort-modules */
import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { IconName } from '../Icon/types'

/* Main component */

interface BreadcrumbOptions {
  children: React.ReactNode | React.ReactNode[]
  icon?: boolean | IconName
  /** set clickable or not the last child */
  lastChildNotClickable?: boolean
  separator?: React.ReactNode | string
}

export type BreadcrumbProps = BreadcrumbOptions &
  ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement>

/* Item component */

export interface BreadcrumbItemOptions {
  children: React.ReactNode
  collapsed?: boolean
  'data-testid'?: string
  icon?: boolean | IconName
  isActive?: boolean | React.ReactNode
  separator?: React.ReactNode | string
  /* useful for react-router */
  to?: string
}
