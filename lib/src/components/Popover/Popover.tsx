import type { PopoverProps } from '@ariakit/react'
import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Content } from './Content'
import { ContentWrapper } from './ContentWrapper'
import popoverStyles from './popover.module.scss'
import { Title } from './Title'
import { PopoverTrigger } from './Trigger'
import type { UsePopover } from './usePopover'

export interface PopoverOptions extends PopoverProps {
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopover
}

const cx = classNames(popoverStyles)

const PopoverComponent = forwardRef<HTMLDivElement, PopoverOptions>(
  ({ children, onClose, store, ...rest }, ref) => {
    const { withCloseButton } = store

    return (
      <Ariakit.Popover
        className={cx('root', withCloseButton && 'with-close-button')}
        ref={ref}
        store={store}
        {...rest}
      >
        <ContentWrapper onClose={onClose} store={store}>
          {children}
        </ContentWrapper>
      </Ariakit.Popover>
    )
  }
)

export const Popover = Object.assign(PopoverComponent, {
  Content,
  Title,
  Trigger: PopoverTrigger,
})
