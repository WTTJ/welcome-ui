import React from 'react'
import { oneOf, string } from 'prop-types'

import { IconSvg } from './styles'
import icons from './icons'

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
}

export const Icon = props => {
  const { icon, size = 'md' } = props
  const iconConfig = icons[icon.toLowerCase()]

  if (!iconConfig) {
    return null
  }

  const iconSize = sizes[size] || sizes.md

  return (
    <IconSvg
      dangerouslySetInnerHTML={{ __html: iconConfig.block }}
      height={iconSize}
      stroked={iconConfig.stroked}
      viewBox={iconConfig.viewBox || '0 0 100 100'}
      width={iconSize}
    />
  )
}

Icon.propTypes = {
  /** Icon name */
  icon: string,
  /** Icon size` */
  size: oneOf(['sm', 'md', 'lg', 'xl'])
}

// Specifies the default values for props:
Icon.defaultProps = {
  size: 'md'
}
