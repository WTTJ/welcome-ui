import type { ComponentPropsWithRef } from 'react'

export type HintProps = ComponentPropsWithRef<'span'> & HintOptions

interface HintOptions {
  children: React.ReactNode
  variant?: 'danger' | 'success' | 'warning'
}
