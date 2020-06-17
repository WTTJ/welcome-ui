import React, { forwardRef } from 'react'
import { number, oneOf, oneOfType, shape, string } from 'prop-types'

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

Icon.propTypes /* remove-proptypes */ = {
  content: shape({
    width: number,
    height: number,
    block: string
  }),
  name: string,
  size: oneOfType([oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl']), number, string]),
  title: string
}

export const StyledIcon = S.Icon
