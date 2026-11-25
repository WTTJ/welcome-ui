import { classNames } from '@/utils'

import LoaderStyles from './loader.module.scss'
import type { LoaderProps, LoaderSize } from './types'
import { ValidSize } from './types'

export { LoaderStyles as loaderClasses }

const cx = classNames(LoaderStyles)

const isValidSize = (size: unknown): size is LoaderSize => {
  return Object.values(ValidSize).includes(size as LoaderSize)
}

export const Loader = ({
  'aria-label': ariaLabel = 'Loading',
  className = '',
  size = 'sm',
  variant = 'neutral',
  ...rest
}: LoaderProps) => {
  const regExp = /[a-zA-Z]/
  const formattedSize = typeof size === 'string' && regExp.test(size) ? size : `${size}px`
  const dotStyle = (
    isValidSize(formattedSize) ? {} : { '--size': formattedSize }
  ) as React.CSSProperties

  return (
    <div
      aria-label={ariaLabel}
      role="status"
      {...rest}
      className={cx('root', `variant-${variant}`, className)}
    >
      <span aria-hidden="true" className={cx('dot', `size-${size}`)} style={dotStyle} />
      <span aria-hidden="true" className={cx('dot', `size-${size}`)} style={dotStyle} />
      <span aria-hidden="true" className={cx('dot', `size-${size}`)} style={dotStyle} />
    </div>
  )
}

Loader.displayName = 'Loader'
