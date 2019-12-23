import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'

import * as S from './styles'

export const Icon = forwardRef(({ dataTestId, name, size = 'md', title, ...props }, ref) => {
  if (!name) {
    return null
  }

  const iconConfig = require(`@welcome-ui/icons.${name}`).default

  if (!iconConfig) {
    return null
  }

  return (
    <S.Icon
      dangerouslySetInnerHTML={{ __html: iconConfig.block }}
      data-testid={dataTestId && `icon-${dataTestId}`}
      ref={ref}
      role="img"
      size={size}
      stroked={iconConfig.stroked}
      title={title || name}
      viewBox={iconConfig.viewBox || '0 0 100 100'}
      {...props}
    />
  )
})

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: string,
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  title: string
}

export const StyledIcon = S.Icon
