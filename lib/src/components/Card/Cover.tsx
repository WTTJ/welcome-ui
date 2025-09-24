import { forwardRef } from 'react'

import type { CoverProps } from './types'

/**
 * @name Card.Cover
 */
export const Cover = forwardRef<HTMLDivElement, CoverProps>(({ src, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <img src={src} />
    </div>
  )
})
