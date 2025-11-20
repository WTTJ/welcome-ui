import { forwardRef } from 'react'

import type { CoverProps } from './types'

/**
 * @name Card.Cover
 */
export const Cover = forwardRef<HTMLDivElement, CoverProps>(({ alt, src, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <img alt={alt} src={src} />
    </div>
  )
})

Cover.displayName = 'Card.Cover'
