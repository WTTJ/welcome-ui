import React from 'react'
import { oneOf, string } from 'prop-types'

import { IconSvg } from './styles'
import icons from './icons'

export const Icon = ({ icon, ...props }) => {
  const iconConfig = icons[icon.toLowerCase()]

  if (!iconConfig) {
    return null
  }

  return (
    <IconSvg
      dangerouslySetInnerHTML={{ __html: iconConfig.block }}
      stroked={iconConfig.stroked}
      viewBox={iconConfig.viewBox || '0 0 100 100'}
      {...props}
    />
  )
}

Icon.propTypes = {
  /** Icon name */
  icon: string
}
