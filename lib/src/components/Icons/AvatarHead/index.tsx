import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarHeadIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarHead" content={content} {...props} />
}
