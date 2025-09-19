import { classNames } from '@/utils'

import LoaderStyles from './loader.module.scss'
import type { LoaderProps, LoaderSize } from './types'
import { ValidSize } from './types'

const cx = classNames(LoaderStyles)

const isValidSize = (size: unknown): size is LoaderSize => {
  return Object.values(ValidSize).includes(size as LoaderSize)
}

export const Loader = ({
  className = '',
  size = 'sm',
  variant = 'neutral',
  ...rest
}: LoaderProps) => {
  const formattedSize = typeof size === 'string' ? size : `${size}px`
  const dotStyle = (
    isValidSize(formattedSize) ? {} : { '--size': formattedSize }
  ) as React.CSSProperties

  return (
    <div {...rest} className={cx('root', `variant-${variant}`, className)}>
      <span className={cx('dot', `size-${size}`)} style={dotStyle} />
      <span className={cx('dot', `size-${size}`)} style={dotStyle} />
      <span className={cx('dot', `size-${size}`)} style={dotStyle} />
    </div>
  )
}
