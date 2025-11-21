import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'

const cx = classNames(modalStyles)

export const Iframe = ({ children }: React.PropsWithChildren) => {
  return <div className={cx('root', 'iframe-wrapper')}>{children}</div>
}

Iframe.displayName = 'AssetModal.Iframe'
