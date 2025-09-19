import type { PopoverProps } from '@ariakit/react'
import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Content } from './Content'
import popoverStyles from './popover.module.scss'
import { SubContentComponent, Title } from './Title'
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
        <Content onClose={onClose} store={store}>
          {children}
        </Content>
      </Ariakit.Popover>
    )
  }
)

export const Popover = Object.assign(PopoverComponent, {
  Content: SubContentComponent,
  Title,
  Trigger: PopoverTrigger,
})
