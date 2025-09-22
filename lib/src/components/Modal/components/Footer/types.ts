import type { HTMLAttributes } from 'react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

export interface FooterOptions {
  information?: {
    subtitle: string
    title: string
  }
}

export type FooterProps = MergeProps<FooterOptions, HTMLAttributes<HTMLDivElement>>
