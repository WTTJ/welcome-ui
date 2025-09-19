import * as Ariakit from '@ariakit/react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Content } from './Content'
import popoverStyles from './popover.module.scss'
import { SubContentComponent, Title } from './Title'
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
      <Ariakit.Popover
        as={Ariakit.Hovercard}
        className={cx('root', withCloseButton && 'with-close-button')}
        store={store}
        {...rest}
        ref={ref}
      >
        <Content onClose={onClose} store={store}>
          {children}
        </Content>
      </Ariakit.Popover>
    )
  }
)

export const PopoverHover = Object.assign(PopoverHoverComponent, {
  Content: SubContentComponent,
  Title,
  Trigger: PopoverHoverTrigger,
})
