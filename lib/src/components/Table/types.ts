import type { ComponentPropsWithoutRef, ComponentPropsWithRef, HTMLAttributes } from 'react'

export type TableProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  TableOptions

export type TableTrProps = ComponentPropsWithoutRef<'tr'> &
  HTMLAttributes<HTMLTableRowElement> &
  TableTrOptions

interface TableOptions {
  /**
   * Add space on first and last child on the Td and Th component
   */
  indent?: boolean
}

interface TableTrOptions {
  /**
   * Change the cursor to pointer to indicate the row is clickable
   */
  onClick?: (props?: unknown) => void
  /**
   * Change the background color of the row to represent a specific state
   */
  variant?: 'danger' | 'info' | 'success' | 'warning'
}
