import React, { forwardRef } from 'react'
import { boolean, number, oneOf, shape, string } from 'prop-types'

import * as S from './styles'

export const Icon = forwardRef(({ content, dataTestId, size = 'md', title, ...props }, ref) => {
  const { name, webfont } = { ...props }

  if (!webfont && !content) {
    return null
  }

  if (webfont && !name) {
    return null
  }

  if (webfont) {
    require('./WttjIcons.css')
    return (
      <S.FontIcon className={`wttj-icon-${name}`} role="img" size={size} {...props} />
    )
  } else {
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
  }
})

Icon.displayName = 'Icon'

Icon.propTypes /* remove-proptypes */ = {
  content: shape({
    width: number,
    height: number,
    block: string
  }),
  name: string,
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  title: string,
  webfont: boolean
}

export const StyledIcon = S.Icon
