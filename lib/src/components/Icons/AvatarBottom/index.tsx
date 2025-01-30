import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarBottomIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarBottom" content={content} {...props} />
}
