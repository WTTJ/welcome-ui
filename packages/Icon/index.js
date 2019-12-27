import React, { forwardRef } from 'react'
import { number, oneOf, shape, string } from 'prop-types'

import * as S from './styles'

export const Icon = forwardRef(({ content, dataTestId, size = 'md', title, ...props }, ref) => {
  if (!content) {
    return null
  }

  return (
    <S.Icon
      alt={title}
      dangerouslySetInnerHTML={{ __html: content.block }}
      data-testid={dataTestId && `icon-${dataTestId}`}
      ref={ref}
      role="img"
      size={size}
      stroked={content.stroked}
      title={title}
      viewBox={content.viewBox || '0 0 100 100'}
      {...props}
    />
  )
})

Icon.displayName = 'Icon'

Icon.propTypes = {
  content: shape({
    width: number,
    height: number,
    block: string
  }),
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  title: string
}

export const StyledIcon = S.Icon
