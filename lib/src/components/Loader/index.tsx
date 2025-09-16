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
  color = '--color-neutral-60',
  size = 'sm',
  ...rest
}: LoaderProps) => {
  const formattedSize = typeof size === 'string' ? size : `${size}px`
  const dotStyle = (
    isValidSize(formattedSize) ? {} : { '--size': formattedSize }
  ) as React.CSSProperties

  return (
    <div {...rest} className={cx('root', className)} style={{ color: `var(${color})` }}>
      <span className={cx('dot', `size-${size}`)} style={dotStyle} />
      <span className={cx('dot', `size-${size}`)} style={dotStyle} />
      <span className={cx('dot', `size-${size}`)} style={dotStyle} />
    </div>
  )
}
