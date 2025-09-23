import type { ButtonProps } from '@/components/Button/types'

export type CloseButtonProps = ButtonProps & CloseButtonOptions

interface CloseButtonOptions {
  animatePresence?: boolean
}
