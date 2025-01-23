import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarAccessoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarAccessory" content={content} {...props} />
}
