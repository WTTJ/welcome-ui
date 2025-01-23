import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarTopIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarTop" content={content} {...props} />
}
