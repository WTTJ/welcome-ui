import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Body } from './components/Body'
import { BoxText } from './components/BoxText'
import { Header } from './components/Header'
import { Media } from './components/Media'
import type { WindowProps } from './types'
import windowStyles from './window.module.scss'

const cx = classNames(windowStyles)

const WindowComponent = forwardRefWithAs<WindowProps, 'div'>(({ children, className }) => {
  return <div className={cx('root', className)}>{children}</div>
})

WindowComponent.displayName = 'Window'

export const Window = Object.assign(WindowComponent, {
  Body,
  BoxText,
  Header,
  Media,
})
