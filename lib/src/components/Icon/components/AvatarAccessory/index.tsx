import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const AvatarAccessoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarAccessory" content={content} {...props} />
}
