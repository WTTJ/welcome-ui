import { DialogDismiss } from '@ariakit/react'

import { CloseButton } from '@/components/CloseButton'
import type { CloseProps } from '@/components/Modal/types'

export const Close = ({ isOnHeader, ...rest }: CloseProps) => {
  return (
    <DialogDismiss
      render={
        <CloseButton
          className={`top-(--spacing-lg) z-[1] ${isOnHeader ? 'absolute right-(--spacing-lg)' : 'sticky left-[calc(100%-var(--spacing-lg)-var(--height-elements-md))]'}`}
          {...rest}
        />
      }
    />
  )
}
