import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarBodyIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarBody" content={content} {...props} />
}
