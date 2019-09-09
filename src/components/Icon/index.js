import React, { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'

import * as S from './styles'
import { icons } from './icons'

export const Icon = forwardRef(({ name, size = 'md', title, ...props }, ref) => {
  if (!name) {
    return null
  }

  const iconConfig = icons[name]

  if (!iconConfig) {
    return null
  }

  return (
    <S.Icon
      dangerouslySetInnerHTML={{ __html: iconConfig.block }}
      data-testid={`icon-${name}`}
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
