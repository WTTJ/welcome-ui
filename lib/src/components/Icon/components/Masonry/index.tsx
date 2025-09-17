import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MasonryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry" content={content} {...props} />
}
