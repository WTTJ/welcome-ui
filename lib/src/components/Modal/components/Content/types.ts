import type { UseModal } from '@/components/Modal/types'

export interface ContentOptions {
  children: React.ReactNode
}

export type ContentProps = ContentOptions & {
  store: UseModal
  /**
   * show or hide the closing button
   */
  withClosingButton?: boolean
}
