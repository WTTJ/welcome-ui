import React from 'react'
import PropTypes from 'prop-types'

import { IconSvg } from './styles'
import { icons } from './icons'

export const Icon = ({ name, ...props }) => {
  const iconName = name.toLowerCase()
  const iconConfig = icons[iconName]

  if (!iconConfig) {
    return null
  }

  return (
    <IconSvg
      dangerouslySetInnerHTML={{ __html: iconConfig.block }}
      data-testid={`icon-${iconName}`}
      stroked={iconConfig.stroked}
      viewBox={iconConfig.viewBox || '0 0 100 100'}
      {...props}
    />
  )
}

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.string
}
