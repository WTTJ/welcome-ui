import { DialogDismiss } from '@ariakit/react'

import { CloseButton } from '@/components/CloseButton'

import type { CloseProps } from '../types'

export const Close = ({ className }: CloseProps) => {
  return (
    <DialogDismiss
      render={props => (
        <CloseButton className={`absolute right-lg top-lg z-10 ${className}`} {...props} />
      )}
    />
  )
}
