import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PinterestIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pinterest" content={content} {...props} />
}
