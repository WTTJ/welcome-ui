import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AvatarHeadIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarHead" content={content} {...props} />
}
