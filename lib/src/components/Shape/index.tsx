import { classNames } from '@/utils'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import styles from './shape.module.scss'
import { getMax } from './utils'

const cx = classNames(styles)

export interface ShapeOptions {
  borderRadius?: string
  className?: string
  h?: string
  shape?: 'circle' | 'square'
  w?: string
}

export type ShapeProps = CreateWuiProps<'div', ShapeOptions>

export const Shape = forwardRef<'div', ShapeProps>(
  ({ borderRadius, children, className, dataTestId, h, shape = 'square', w }, ref) => {
    const maxWidthHeight = (w || h) && getMax(w, h)

    let style = {}

    if (maxWidthHeight) {
      style = { ...style, height: maxWidthHeight, width: maxWidthHeight }
    }

    const radius = borderRadius && shape !== 'circle'

    return (
      <div
        className={cx('root', `shape-${shape}`, radius && `radius-${borderRadius}`, className)}
        data-testid={dataTestId}
        ref={ref}
        style={style}
      >
        {children}
      </div>
    )
  }
)

Shape.displayName = 'Shape'
