import React, { forwardRef } from 'react'
import { string } from 'prop-types'

import * as S from './styles'
import { icons } from './icons'

export const Icon = forwardRef(({ name, ...props }, ref) => {
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
      stroked={iconConfig.stroked}
      title={name}
      viewBox={iconConfig.viewBox || '0 0 100 100'}
      {...props}
    />
  )
})

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: string
}
