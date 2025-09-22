/* eslint-disable perfectionist/sort-modules */
import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

/* Main component */

interface BreadcrumbOptions {
  children: React.ReactNode | React.ReactNode[]
  /** set clickable or not the last child */
  lastChildNotClickable?: boolean
  separator?: React.ReactNode | string
}

export type BreadcrumbProps = BreadcrumbOptions &
  ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement>

/* Item component */

interface BreadcrumbItemOptions {
  children: React.ReactNode
  'data-testid'?: string
  isActive?: boolean
  separator?: React.ReactNode | string
  /* useful for react-router */
  to?: string
}

export type BreadcrumbItemProps = BreadcrumbItemOptions &
  ComponentPropsWithRef<'a'> &
  HTMLAttributes<HTMLAnchorElement>
