import { DialogDismiss } from '@ariakit/react'
import { forwardRef } from 'react'

import { Window as WUIWindow } from '@/components/Window'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { ContentProps } from '../types'

const cx = classNames(modalStyles)

/**
 * @name Modal.Content
 */
export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, withClosingButton = true, ...rest }, ref) => {
    return (
      <div
        className={cx('content', withClosingButton && 'with-close-button', className)}
        ref={ref}
        {...rest}
      >
        {withClosingButton ? (
          <DialogDismiss render={<WUIWindow.Header.CloseButton className={cx('close')} />} />
        ) : null}
        {children}
      </div>
    )
  }
)

Content.displayName = 'Modal.Content'
