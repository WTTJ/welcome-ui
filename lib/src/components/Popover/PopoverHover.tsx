import * as Ariakit from '@ariakit/react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Content } from './Content'
import { ContentWrapper } from './ContentWrapper'
import popoverStyles from './popover.module.scss'
import { Title } from './Title'
import { PopoverHoverTrigger } from './Trigger'
import type { UsePopoverHover } from './usePopover'

const cx = classNames(popoverStyles)

export interface PopoverHoverOptions extends Ariakit.HovercardProps {
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopoverHover
}

const PopoverHoverComponent = forwardRefWithAs<PopoverHoverOptions, 'div'>(
  ({ children, onClose, store, ...rest }, ref) => {
    const { withCloseButton } = store

    return (
      <Ariakit.Hovercard
        className={cx('root', withCloseButton && 'with-close-button')}
        store={store}
        {...rest}
        ref={ref}
      >
        <ContentWrapper onClose={onClose} store={store}>
          {children}
        </ContentWrapper>
      </Ariakit.Hovercard>
    )
  }
)

export const PopoverHover = Object.assign(PopoverHoverComponent, {
  Content,
  Title,
  Trigger: PopoverHoverTrigger,
})
