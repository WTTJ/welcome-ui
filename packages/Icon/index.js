import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'

import * as S from './styles'

export const Icon = forwardRef((props, ref) => {
  const { dataTestId, name, size = 'md', title, ...rest } = props
  if (!name) {
    return null
  }

  const { default: iconConfig } = require(`@welcome-icons/${name}`)

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
      {...rest}
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
