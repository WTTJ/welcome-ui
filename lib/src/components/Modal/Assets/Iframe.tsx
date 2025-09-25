import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
import type { IframeProps } from './types'

const cx = classNames(modalStyles)

export const Iframe = ({ children }: IframeProps) => {
  return <div className={cx('root', 'iframe-wrapper')}>{children}</div>
}
