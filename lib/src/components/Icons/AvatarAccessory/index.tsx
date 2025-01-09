import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AvatarAccessoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarAccessory" content={content} {...props} />
}
