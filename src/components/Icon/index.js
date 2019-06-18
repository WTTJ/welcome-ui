import React, { forwardRef } from 'react'
import { string } from 'prop-types'

import { IconSvg } from './styles'
import { icons } from './icons'

export const Icon = forwardRef(({ name, ...props }, ref) => {
  const iconName = name.toLowerCase()
  const iconConfig = icons[iconName]

  if (!iconConfig) {
    return null
  }

  return (
    <IconSvg
      dangerouslySetInnerHTML={{ __html: iconConfig.block }}
      data-testid={`icon-${iconName}`}
      ref={ref}
      stroked={iconConfig.stroked}
      viewBox={iconConfig.viewBox || '0 0 100 100'}
      {...props}
    />
  )
})

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: string
}
