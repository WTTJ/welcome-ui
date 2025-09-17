import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ReviewIcon: React.FC<IconProps> = props => {
  return <Icon alt="Review" content={content} {...props} />
}
