import { DialogDismiss } from '@ariakit/react'
import { forwardRef } from 'react'

import { Window as WUIWindow } from '@/components/Window'

import type { HeaderProps } from '../types'

/**
 * @name Modal.Header
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, title, ...rest }, ref) => {
    return (
      <WUIWindow.Header className={className} ref={ref} {...rest}>
        <WUIWindow.Header.Title title={title} />
        <DialogDismiss render={<WUIWindow.Header.CloseButton />} />
      </WUIWindow.Header>
    )
  }
)

Header.displayName = 'Modal.Header'
