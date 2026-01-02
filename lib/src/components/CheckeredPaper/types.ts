import type { ComponentPropsWithRef } from 'react'

export type CheckeredPaperProps = CheckeredPaperOptions & ComponentPropsWithRef<'div'>

interface CheckeredPaperOptions {
  children: React.ReactNode
}
