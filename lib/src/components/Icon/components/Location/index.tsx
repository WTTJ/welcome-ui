import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const LocationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Location" content={content} {...props} />
}
