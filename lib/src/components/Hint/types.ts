import type { ComponentPropsWithRef } from 'react'

export type HintProps = ComponentPropsWithRef<'span'> & HintOptions

interface HintOptions {
  children: React.ReactNode
  /**
   * Change color of text according to the variant
   */
  variant?: 'danger' | 'success' | 'warning'
}
