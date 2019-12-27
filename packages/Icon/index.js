import React, { forwardRef } from 'react'
import { oneOf, shape, string } from 'prop-types'

import * as S from './styles'

export const Icon = forwardRef((props, ref) => {
  const { alt, content, dataTestId, size = 'md', ...rest } = props
  if (!content) {
    return null
  }

  return (
    <S.Icon
      alt={alt}
      dangerouslySetInnerHTML={{ __html: content.block }}
      data-testid={dataTestId && `icon-${dataTestId}`}
      ref={ref}
      role="img"
      size={size}
      stroked={content.stroked}
      viewBox={content.viewBox || '0 0 100 100'}
      {...rest}
    />
  )
})

Icon.displayName = 'Icon'

Icon.propTypes = {
  alt: string,
  content: shape({
    width: Number,
    height: Number,
    block: string
  }),
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

export const StyledIcon = S.Icon
