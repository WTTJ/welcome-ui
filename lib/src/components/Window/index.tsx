import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Body } from './components/Body'
import { BoxText } from './components/BoxText'
import { Header } from './components/Header'
import { Media } from './components/Media'
import { TabPanel } from './components/TabPanel'
import type { WindowProps } from './types'
import windowStyles from './window.module.scss'

const cx = classNames(windowStyles)

const WindowComponent = forwardRefWithAs<WindowProps, 'div'>(
  ({ as: Component = 'div', children, className, role = 'region', ...rest }, ref) => {
    return (
      <Component className={cx('root', className)} ref={ref} role={role} {...rest}>
        {children}
      </Component>
    )
  }
)

WindowComponent.displayName = 'Window'

export const Window = Object.assign(WindowComponent, {
  Body,
  BoxText,
  Header,
  Media,
  TabPanel,
})
