import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ThumbDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ThumbDown" content={content} {...props} />
}
